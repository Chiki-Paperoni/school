import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HeadComponent, CarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeadComponent, CarouselComponent],
})
export class SharedModule {}
