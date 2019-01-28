import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    /* Called after a bound input property changes */

   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content:' + this.header.nativeElement.textContent);
    console.log('Text Contnet of paragraph' + this.paragraph.nativeElement.textContent);
        /* Called once the component is initialized */

  }

  ngDoCheck() {
    console.log('ngDoCheck called');
        /* Called during every chane detection run */

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Contnet of paragraph' + this.paragraph.nativeElement.textContent);
      /* Called after content (ng-content) has been projected into view */


  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
        /* Called every time the projected content has been checked */

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text Content:' + this.header.nativeElement.textContent);
      /* Called after the components view (and child viewa ) has been intialized */


  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
        /* Called every time the view ( and child views ) have been checked */

  }
  ngOnDestroy() {
    console.log('ngOnDestroy');

        /* Called once the component is about to be destroyed */

  }
}
