import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    // a shortcut to create a DIRECTIVE:
    // COMMAND: ng g d <NAME_OF_DIRECTIVE>
}

