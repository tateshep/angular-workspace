import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myEvents = [{event: 'Zero', value: 0}];


  onEventStart(eventData: {event: string, value: number}) {
    this.myEvents.push({
        event: eventData.event,
        value: eventData.value
      }
    );
  }
}
