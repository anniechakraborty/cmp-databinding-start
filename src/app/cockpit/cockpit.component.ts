import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
// we need to import EventEmitter from Angular core package

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  // how to over ride view encapsulation in angular
  // encapsulation : ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  // properties which will be used for custom event binding in app component html
  // used eventemitter to turn the properties into events
  // EventEmitter is a generic type and in between <> we indicate the type of data we are going to emit
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>(); 
  // since we are emitting a JavaScript object to the AppComponent 
  @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  // adding () in the end (above) to call the constructor of EventEmitter to create a new EventEmitter object 
  // which is now stored in serverCreated and blueprintCreated (our custom events)

  newServerName = '';
  newServerContent = '';

  constructor() { }
  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    // console.log(nameInput); // prints the entire tag for which we created the local refrence
    // console.log(nameInput.value); // prints only the value of the html tag 
    this.serverCreated.emit({serverName : nameInput.value, serverContent : this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent});
  }

}
