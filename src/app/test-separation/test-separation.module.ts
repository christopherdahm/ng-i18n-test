import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PuppyComponent } from '../puppy/puppy.component';
import { PuppyTranslationsComponent } from '../puppy-translations/puppy-translations.component';
import { ListedTranslationComponent } from '../listed-translation/listed-translation.component';

const routes: Routes = [
  {
    path: '',
    component: PuppyComponent,
  }
];

@NgModule({
  declarations: [PuppyComponent, PuppyTranslationsComponent, ListedTranslationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class TestSeparationModule { }
