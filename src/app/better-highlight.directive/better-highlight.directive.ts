import { 
  Directive, 
  ElementRef,
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core';

  // why is it better? 
  // Angular is not limited to running in the browser 
  // if you try to change the DOM as it was done in the BASIC highlight directive
  // you are more likely to get an error in some circumstance
  // literally depends however this way 'better' is good pracitce
  // NOTE: several examples created to do the same work - they all used to be on this file..

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // binding to Directive Properties **
  @Input() defaultColor:   string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // Using HostBinding to Bind to Host Properties * <======================
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // binding to Directive Properties **
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {};

  ngOnInit() { 
      this.backgroundColor = this.defaultColor;
  };

  // this can be triggered whenever some event occurs - LISTENS to events on element
  // HostListener: takes in the argument name as an input
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(eventData: Event){  
    this.backgroundColor = this.defaultColor;
  };

};

