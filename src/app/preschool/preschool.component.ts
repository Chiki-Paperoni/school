import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preschool',
  templateUrl: './preschool.component.html',
  styleUrls: ['./preschool.component.scss'],
})
export class PreschoolComponent implements OnInit {
  images: string[] = ['test.png', 'test2.png', 'test2.png'];
  constructor() {}

  ngOnInit(): void {}
}
