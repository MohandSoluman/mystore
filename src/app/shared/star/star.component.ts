import { Component, EventEmitter, Input, OnChanges,  Output,  SimpleChanges } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],

})
export class StarComponent implements OnChanges {
 @Input()rating:number=0;
 @Output() notify: EventEmitter<string> = new EventEmitter<string>();
 constructor(config: NgbRatingConfig) {
  // customize default values of ratings used by this component tree
  config.max = 5;
  config.readonly = true;
  
  }
  ngOnChanges(): void {
  
  }
  
  
  clickStar(){
    this.notify.emit(`the rating ${this.rating} was clicked `);
  }
  

}
