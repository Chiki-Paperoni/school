import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  @Input() img1 = '';
  @Input() img2 = '';

  constructor() {}

  ngOnInit(): void {}
}