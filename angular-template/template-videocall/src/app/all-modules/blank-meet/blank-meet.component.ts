import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-meet',
  templateUrl: './blank-meet.component.html',
  styleUrls: ['./blank-meet.component.css']
})
export class BlankMeetComponent implements OnInit {
  public toggleValue: boolean = false;

  constructor() { }
  ngAfterViewInit() {
    this.loadjs("assets/js/script.js")
  }
  loadjs(js) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  ngOnInit(): void {
    var app = document.getElementsByTagName("BODY")[0];
    app.classList.remove("darkcall");
  }
  toggle() {
    this.toggleValue = !this.toggleValue;
    const bodyTag = document.body;
    if (this.toggleValue) {
      bodyTag.classList.add('mini-sidebar');
    }
    else {
      bodyTag.classList.remove('mini-sidebar')
    }
  }
  onMouseChange(event: string) {
    const bodyTag = document.body;
    if (this.toggleValue) {
      if (event === 'mouseover') {
        bodyTag.classList.add('mini-sidebar');
        bodyTag.classList.add('expand-menu');
      }
      else if (event === 'mouseout') {
        bodyTag.classList.remove('expand-menu');
      }
    }
  }
  toggleMobile() {
    this.toggleValue = !this.toggleValue;
    var root = document.getElementsByTagName( 'html' )[0];
    var mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    var sidebar:any = document.getElementById('sidebar')

    if (this.toggleValue) {
      root.classList.add('menu-opened');
      mainWrapper.classList.add('slide-nav');
      sidebar.classList.add('opened');
    }
    else {
      root.classList.remove('menu-opened');
      mainWrapper.classList.remove('slide-nav');
      sidebar.classList.remove('opened');
    }
  }
}
