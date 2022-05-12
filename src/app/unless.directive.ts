// *ngIf ==> SHOWS if TRUE
// this CUSTOM directive will do the opposite if FALSE show..
// we are basically changing the star in => (*ngIf)
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // getting the condition as an INPUT
  @Input() set unless( condition: boolean ){
      // if condition is NOT TRUE
      if( !condition ) {

      } else {

      };
  };

  constructor() { };

}
