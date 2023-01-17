import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AllModulesService } from 'src/app/all-modules.service';

@Component({
  selector: 'app-chat-status',
  templateUrl: './chat-status.component.html',
  styleUrls: ['./chat-status.component.css'],
})
export class ChatStatusComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  public searchText = '';
  public chatList: any = [];
  public chatLeft: any = [];
  public index;
  public url: any = 'statusList';
  public chatMessageList;
  public messageValue;
  public rows = [];
  public srch = [];
  constructor(private allModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.getChatList();
  }

  getChatList() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.chatList = data;
      this.rows = this.chatList;
      this.srch = [...this.rows];
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
}
