import { Component, OnInit } from '@angular/core';

@Component({
  // ng g c home: ng genrate component home
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
