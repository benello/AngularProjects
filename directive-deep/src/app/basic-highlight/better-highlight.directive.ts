import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements  OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')*/
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') mouseOver(eventData: Event){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');*/
    this.backgroundColor = this.defaultColor;
  }
}
