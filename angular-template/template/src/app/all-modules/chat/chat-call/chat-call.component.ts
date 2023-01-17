import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AllModulesService } from 'src/app/all-modules.service';
import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-chat-call',
  templateUrl: './chat-call.component.html',
  styleUrls: ['./chat-call.component.css'],
})
export class ChatCallComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  public searchText = '';
  public chatList: any = [];
  public chatLeft: any = [];
  public img;
  public url: any = 'chatList';
  public chatLeftUrl: any = 'leftChat';
  public chatMessageList;
  public messageValue;
  public rows = [];
  public srch = [];
  profileStatus = 'show';
  middleChat = 'hide';
  constructor(private allModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.getChatList();
    this.getChatName('assets/img/avatar-8.jpg', 'Regina Dickerson');
    // Variable Declarations

    var right_sidebar = $('.right-sidebar').width();
    var left_sidebar = $('.left-sidebar').width();
    var chat_bar = $('.chat').width();
    var win_width = $(window).width();

    $('.user-list-item').on('click', function () {
      if ($(window).width() < 992) {
        $('.left-sidebar').addClass('hide-left-sidebar');
        $('.chat').addClass('show-chatbar');
      }
    });

    $('.dream_profile_menu').on('click', function () {
      $('.right-sidebar').addClass('show-right-sidebar');
      $('.right-sidebar').removeClass('hide-right-sidebar');
      if ($(window).width() > 991 && $(window).width() < 1201) {
        $('.chat').css('margin-left', -chat_bar);
      }
      if ($(window).width() < 992) {
        $('.chat').addClass('hide-chatbar');
      }
    });

    $('.close_profile').on('click', function () {
      $('.right-sidebar').addClass('hide-right-sidebar');
      $('.right-sidebar').removeClass('show-right-sidebar');
      if ($(window).width() > 991 && $(window).width() < 1201) {
        $('.chat').css('margin-left', 0);
      }
      if ($(window).width() < 992) {
        $('.chat').removeClass('hide-chatbar');
      }
    });
    $('.nav-tabs a').on('click', function () {
      $(this).tab('show');
    });

    $('.chat-header .left_side i').on('click', function () {
      $('.left-sidebar').removeClass('hide-left-sidebar');
      $('.chat').removeClass('show-chatbar');
    });

    //Rightside accordian
    $('.accordion-col .accordion-title').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    });
    //Custom modal click for status view
    $('*[data-bs-target="#status-modal"]').on('click', function () {
      $('body').addClass('custom-model-open');
    });
    $('.custom-status-close').on('click', function () {
      $('body').removeClass('custom-model-open');
    });

    // //Custom scroll bar
    // if ($(window).width() > 992) {
    //   if (
    //     $('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').length > 0
    //   ) {
    //     $(
    //       '.chat-body, .left-sidebar .sidebar-body, .right-sidebar'
    //     ).mCustomScrollbar();
    //   }
    // }
  }
  getChatList() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.chatList = data;
      this.rows = this.chatList;
      this.srch = [...this.rows];
    });
  }
  getChatName(img, name) {
    this.img = img;
    this.chatMessageList = {
      img: img,
      chatName: name,
    };
  }

  //search by name
  filterItem(val) {
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      val = val.toLowerCase();
      return d.chatName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows.push(...temp);
  }
  hideProfile() {
    this.profileStatus = 'hide';
  }
  showProfile() {
    this.profileStatus = 'show';
  }
  showMiddleChat() {
    this.middleChat = 'show';
  }
  hideMiddleChat() {
    this.middleChat = 'hide';
  }
}
