import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preschool',
  templateUrl: './preschool.component.html',
  styleUrls: ['./preschool.component.scss'],
})
export class PreschoolComponent implements OnInit {
  images: string[] = [
    'preschool/gallery/1.png',
    'preschool/gallery/2.png',
    'preschool/gallery/3.png',
    'preschool/gallery/4.png',
    'preschool/gallery/5.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
