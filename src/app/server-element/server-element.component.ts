import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck , 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy {
  // we added the @Input() decorator 
  // (which is executed as a function and which we also need to import from angular/core (See above))
  // to be able to use this property outside of this component 
  // (for eg, we will be using it in App Compomenet HTML)

  // @Input('alias') property : type = value;
  // basically if we want the 'property' to be called by another name when it is accessed by external/parent
  // components, then we can pass the other name (aka 'alias') as a str param to the Input() decorator 
  // (like shown in eg above) once you use an alias, you cannot use the org property name

  @Input() name: string;
  // pass the local referncce used in the HTML tag to View Child()
  @ViewChild('header',  { static: true }) heading : ElementRef;
  @Input() element : {
    type : string,
    name : string,
    content : string
  } ; // defining a variable of type JavaScript Object called element
  // the JavaScript object has three parts which are of type string respectively
  
  constructor( ) {
    console.log('ServerElementComponent constructor');
  }

  ngOnInit(): void {
    console.log('ServerElementComponent ngOnInit');
    // testing ViewChild
    console.log('Text content (oninit) : ' ,this.heading.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ServerElementComponent ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ServerElementComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ServerElementComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ServerElementComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ServerElementComponent ngAfterViewInit');
    console.log('Text content (after view init) : ' ,this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ServerElementComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ServerElementComponent ngOnDestroy');
  }
}
