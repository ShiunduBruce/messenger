import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetingcall-grid',
  templateUrl: './meetingcall-grid.component.html',
  styleUrls: ['./meetingcall-grid.component.css']
})
export class MeetingcallGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var app = document.getElementsByTagName("BODY")[0];
    app.classList.remove("darkmode");
  }
  ngAfterViewInit() {
    this.loadpaintero("assets/plugins/painterro/painterro.min.js")
    this.loadjs("assets/js/script.js")
  }
  loadjs(js) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  loadpaintero(js) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
