import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild , ElementRef} from '@angular/core';
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

  // newServerName = ''; commenting since we are using local refernce now
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
 
  constructor() { }
  ngOnInit(): void {
  }

  onAddServer(nameInput : HTMLInputElement) {
    // local  ref  example
    // console.log(nameInput); // prints the entire tag for which we created the local refrence
    // console.log(nameInput.value); // prints only the value of the html tag 

    // view child example
    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName : nameInput.value, serverContent : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({serverName : nameInput.value, serverContent : this.serverContentInput.nativeElement.value});
  }

}
