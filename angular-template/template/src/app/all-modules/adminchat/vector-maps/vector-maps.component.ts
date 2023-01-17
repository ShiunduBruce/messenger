import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-vector-maps',
  templateUrl: './vector-maps.component.html',
  styleUrls: ['./vector-maps.component.css'],
})
export class VectorMapsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'error-page');
  }
}
