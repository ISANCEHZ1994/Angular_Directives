import { Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight3]'
})
export class BetterHighlight3Directive implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');      
  }

}
