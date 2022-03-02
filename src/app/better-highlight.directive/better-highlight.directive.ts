import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    // setStyle can take in 4 arguments - the last one is optional known as a flag..     
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // why is it better? 
  // Angular is not limited to running in the browser 
  // if you try to change the DOM as it was done in the BASIC highlight directive
  // you are more likely to get an error in some circumstance
  // literally depends however this way 'better' is good pracitce

}
