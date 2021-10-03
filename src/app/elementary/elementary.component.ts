import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementary',
  templateUrl: './elementary.component.html',
  styleUrls: ['./elementary.component.scss'],
})
export class ElementaryComponent implements OnInit {
  list: string[] = ['test.png', 'test2.png', 'test.png', 'test2.png'];
  constructor() {}

  ngOnInit(): void {}
}
