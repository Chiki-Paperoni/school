import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  index = 0;

  @ViewChild('list', { static: false })
  list!: ElementRef;
  @Input()
  images!: string[];

  constructor(private renderer: Renderer2) {}

  next() {
    this.index = (this.index + 1) % this.images.length;
    this.transform();
  }
  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    this.transform();
  }
  switch(index: number) {
    this.index != index ? ((this.index = index), this.transform()) : null;
  }
  transform() {
    const style = `translateX(-${this.index * 100}%)`;
    this.renderer.setStyle(this.list.nativeElement, 'transform', style);
  }
}
