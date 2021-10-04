import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  @ViewChild('mobileMenu', { static: false }) menu!: ElementRef;
  @Input() img1 = '';
  @Input() img2 = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  showMenu() {
    this.renderer.setStyle(this.menu.nativeElement, 'height', '100%');
  }
  closeMenu() {
    this.renderer.setStyle(this.menu.nativeElement, 'height', '0%');
  }
}
