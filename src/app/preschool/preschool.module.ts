import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreschoolRoutingModule } from './preschool-routing.module';
import { PreschoolComponent } from './preschool.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PreschoolComponent],
  imports: [CommonModule, PreschoolRoutingModule, SharedModule],
})
export class PreschoolModule {}
