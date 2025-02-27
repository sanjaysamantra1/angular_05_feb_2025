import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,120%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }

}
