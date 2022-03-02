import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive implements OnInit {

  // make sure that the style.<NAME> matches what the next variable <NAME>: <DATATYPE> is
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'red';     
  };

  @HostListener('mouseleave') mouseleave(eventData: Event){    
     this.backgroundColor = 'transparent'; 
  }

}
