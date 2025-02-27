import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Zoomin]'
})
export class ZoominDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,120%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }

}
