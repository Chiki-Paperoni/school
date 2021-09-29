import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreschoolComponent } from './preschool.component';

const routes: Routes = [{ path: '', component: PreschoolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreschoolRoutingModule {}
