import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventCreated = new EventEmitter<{eventName: string, eventValue: number}>();
  myEvents = [];
  gameRunning = false;
  constructor() { }

  ngOnInit() {
  }

  onStartGame () {
    console.log('game started');
    this.gameRunning = true;
    console.log(this.gameRunning);


    this.eventCreated.emit( {
      eventName: this.eventCreated.value
    });
  }


  onStopGame () {
    console.log('game stopped!');
    return this.gameRunning = false;
  }

  onCheckGameRunning () {
    console.log(this.gameRunning);
  }


}
