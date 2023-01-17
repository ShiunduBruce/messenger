import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AllModulesService } from 'src/app/all-modules.service';
import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.css'],
})
export class ChatGroupComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  public searchText = '';
  public groupList: any = [];
  public chatLeft: any = [];
  public index;
  public url: any = 'groupList';
  public chatLeftUrl: any = 'leftGroupChat';
  public groupMessageList;
  public messageValue;
  public rows = [];
  public srch = [];
  public showMember = false;
  public showInfo = true;
  profileStatus = 'show';
  middleChat = 'hide';
  constructor(private allModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.getChatList();
    this.groupName(0, 'Baddies and Buddies', 'carousel1');
    this.getChatMessage();
    $('#search-contact').on('keyup', function () {
      var value = $(this).val().toLowerCase();
      $('#chatsidebar ul li').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

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
      this.groupList = data;
      this.rows = this.groupList;
      this.srch = [...this.rows];
    });
  }
  groupName(index, name, image) {
    this.index = index;
    this.groupMessageList = {
      index: index,
      chatName: name,
      status: 'Active',
      image: image,
    };
  }
  getChatMessage() {
    this.allModuleService.get(this.chatLeftUrl).subscribe((data) => {
      this.chatLeft = data;
    });
  }

  getMessageValue(val) {
    this.messageValue = val;
    let obj = {
      message: '',
      time: '',
      messageRight: val,
      timeRight: '14:32 PM',
      messageRead: '',
      messageDate: 'Today',
    };
    this.allModuleService.add(obj, this.chatLeftUrl).subscribe((data) => {
      this.getChatMessage();
    });
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
  show(val) {
    if (val === 'info') {
      this.showInfo = true;
      this.showMember = false;
    }
    if (val === 'members') {
      this.showInfo = false;
      this.showMember = true;
    }
  }
  callDropdown() {
    $('.accordion-col .accordion-title').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    });
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
