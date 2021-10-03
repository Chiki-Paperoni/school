import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'elementary',
    loadChildren: () =>
      import('./elementary/elementary.module').then((m) => m.ElementaryModule),
  },
  {
    path: 'preschool',
    loadChildren: () =>
      import('./preschool/preschool.module').then((m) => m.PreschoolModule),
  },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
