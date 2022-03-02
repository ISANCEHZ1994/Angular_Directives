import { Directive, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight4]'
})
export class BetterHighlight4Directive implements OnInit {

  constructor( private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event){
     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');    
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');   
  };

}
