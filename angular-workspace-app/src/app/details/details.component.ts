import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  styles: [`
    .moreThanFive {
      color: white !important;
    }
  `]
})
export class DetailsComponent implements OnInit {
  displayDetails = false;
  displayLog = [];
  greaterThanFive = 'no';


  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails () {

    this.displayDetails = !this.displayDetails;
    /* this.displayLog.push(this.displayLog.length + 1); */
    this.displayLog.push(new Date());

    console.log(this.displayLog);
  }

  getColor() {
    return this.greaterThanFive === 'yes' ? 'blue' : 'transparent';
  }
}
