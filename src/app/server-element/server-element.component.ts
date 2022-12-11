import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // we added the @Input() decorator 
  // (which is executed as a function and which we also need to import from angular/core (See above))
  // to be able to use this property outside of this component 
  // (for eg, we will be using it in App Compomenet HTML)

  // @Input('alias') property : type = value;
  // basically if we want the 'property' to be called by another name when it is accessed by external/parent
  // components, then we can pass the other name (aka 'alias') as a str param to the Input() decorator 
  // (like shown in eg above) once you use an alias, you cannot use the org property name

  @Input() element : {
    type : string,
    name : string,
    content : string
  } ; // defining a variable of type JavaScript Object called element
  // the JavaScript object has three parts which are of type string respectively
  constructor( ) { }

  ngOnInit(): void {
  }

}
