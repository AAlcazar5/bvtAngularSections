import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    // [] mean it will be recognized when we add it to an element
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // property of this class and automatically assigns this value to this property
    constructor(private elementRef: ElementRef) {
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}



