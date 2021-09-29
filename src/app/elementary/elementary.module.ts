import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementaryRoutingModule } from './elementary-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ElementaryComponent } from './elementary.component';

@NgModule({
  declarations: [ElementaryComponent],
  imports: [CommonModule, ElementaryRoutingModule, SharedModule],
})
export class ElementaryModule {}
