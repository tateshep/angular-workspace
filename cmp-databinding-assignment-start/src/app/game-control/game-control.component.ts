import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventStart = new EventEmitter<{event: string, value: number}>();
  value = 0;
  myInterval;


  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    // tslint:disable-next-line:prefer-const
    this.myInterval = setInterval(() => this.onStart(), 1000);
  }

  onStop() {
    clearInterval(this.myInterval);
  }

  onStart() {

    this.value ++ ;

      if (this.value % 2 !== 0) {
          this.eventStart.emit({
            event: 'Odd Number',
            value: this.value
          });
        } else {
          this.eventStart.emit({
            event: 'Even Number',
            value: this.value
          });
        }
      }


}


