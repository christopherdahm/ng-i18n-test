import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PuppyComponent } from '../puppy/puppy.component';

const routes: Routes = [
  {
    path: '',
    component: PuppyComponent,
  }
];

@NgModule({
  declarations: [PuppyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class TestSeparationModule { }
