import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[zoomin]'
})
export class ZoominDirective {
  // Dependency Injection
  constructor(private ele: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,120%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
