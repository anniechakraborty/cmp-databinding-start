import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type : 'server', 
      name : 'Test Server', 
      content : 'Just a test server to test custom property binding'
    }
  ];
  onServerAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChnagedName(){
    // changing the name of the first element to see how ngOnChanges is working
    this.serverElements[0].name = 'changed';
  }

  onDestroyComponent(){
    // removing the first element to see how ondestroy works
    this.serverElements.splice(0,1);
  }
}
