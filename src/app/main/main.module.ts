import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SectionComponent } from './section/section.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SectionComponent, MainComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class MainModule {}
