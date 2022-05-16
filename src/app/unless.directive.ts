// *ngIf ==> SHOWS if TRUE
// this CUSTOM directive will do the opposite if FALSE show..
// we are basically changing the star in => (*ngIf)
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // getting the condition as an INPUT
  @Input() set appUnless( condition: boolean ){
      // if condition is NOT TRUE
      if( !condition ) {
          this.vcRef.createEmbeddedView(this.templateRef);
      } else {
          this.vcRef.clear();
      };
  };

  constructor(
    private templateRef: TemplateRef<any>, 
    private vcRef: ViewContainerRef 
  ){ };

}
