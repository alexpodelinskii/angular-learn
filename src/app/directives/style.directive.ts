import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

    @Input('appStyle') color = 'blue';
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)

    }
    @HostListener('click', ['$event.target']) onClick(event: Event) {

        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    }

    @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {

        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'grey')
    }
    @HostListener('mouseleave', ['$event.target']) onLeaver(event: Event) {

        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', null)
    }
}