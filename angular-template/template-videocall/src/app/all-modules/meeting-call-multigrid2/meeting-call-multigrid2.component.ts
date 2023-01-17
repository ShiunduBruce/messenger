import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-call-multigrid2',
  templateUrl: './meeting-call-multigrid2.component.html',
  styleUrls: ['./meeting-call-multigrid2.component.css']
})
export class MeetingCallMultigrid2Component implements OnInit {

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
