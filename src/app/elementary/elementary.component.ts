import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementary',
  templateUrl: './elementary.component.html',
  styleUrls: ['./elementary.component.scss'],
})
export class ElementaryComponent implements OnInit {
  list: string[] = [
    'elementary/gallery/1.png',
    'elementary/gallery/2.png',
    'elementary/gallery/3.png',
    'elementary/gallery/4.png',
    'elementary/gallery/5.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
