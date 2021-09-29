import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementaryComponent } from './elementary.component';

const routes: Routes = [{ path: '', component: ElementaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementaryRoutingModule {}
