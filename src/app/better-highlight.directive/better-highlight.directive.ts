import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

  // why is it better? 
  // Angular is not limited to running in the browser 
  // if you try to change the DOM as it was done in the BASIC highlight directive
  // you are more likely to get an error in some circumstance
  // literally depends however this way 'better' is good pracitce

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {};

  ngOnInit() {
    // look into the function setStyle!   
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  };

  // this can be triggered whenever some event occurs - LISTENS to events on element
  // HostListener: takes in the argument name as an input
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  };

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  };

  

};

