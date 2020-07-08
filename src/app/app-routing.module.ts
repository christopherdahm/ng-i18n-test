import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NothingSpecialComponent} from "./nothing-special/nothing-special.component";

const routes: Routes = [
  { path: 'nothing-special', component: NothingSpecialComponent },
  {
    path: 'test',
    loadChildren: () => import('./test-separation/test-separation.module').then(m => m.TestSeparationModule)
  },
  { path: '**', redirectTo: 'nothing-special' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
