import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-puppy-translations',
  templateUrl: './puppy-translations.component.html',
  styleUrls: ['./puppy-translations.component.scss']
})
export class PuppyTranslationsComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
