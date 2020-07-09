import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss']
})
export class PuppyComponent implements OnInit {

  num = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
