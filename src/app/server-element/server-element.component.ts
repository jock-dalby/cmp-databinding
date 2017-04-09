import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // Define element as a property, assign it's type and key/value pairs. By default, all properties of components are only accessible inside the components. The @Input decorator enables parent components to bind to this property. The parenthesis call the input function and so must be included.
  @Input() element: {type: string, name: string, content: string};


  constructor() { }

  ngOnInit() {
  }

}
