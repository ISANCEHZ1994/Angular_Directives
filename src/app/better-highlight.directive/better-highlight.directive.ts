import { 
  Directive, 
  ElementRef,
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2 
} from '@angular/core';

  // why is it better? 
  // Angular is not limited to running in the browser 
  // if you try to change the DOM as it was done in the BASIC highlight directive
  // you are more likely to get an error in some circumstance
  // literally depends however this way 'better' is good pracitce

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {};

  ngOnInit() {
    // look into the function setStyle!   
    // function moved to HostListeners below
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  };

  // this can be triggered whenever some event occurs - LISTENS to events on element
  // HostListener: takes in the argument name as an input
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  };

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  };

  // Now when you hover on the div the blue background will appear and leave will change to transparent!

};

