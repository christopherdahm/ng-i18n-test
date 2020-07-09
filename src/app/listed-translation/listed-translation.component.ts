import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listed-translation',
  templateUrl: './listed-translation.component.html',
  styleUrls: ['./listed-translation.component.scss']
})
export class ListedTranslationComponent implements OnInit {

  @Input() puppyType: string;

  constructor() { }

  ngOnInit(): void {
  }

}
