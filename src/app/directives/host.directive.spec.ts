import { HostDirective } from './host.directive';

describe('HostDirective', () => {
  it('should create an instance', () => {
    const elementRef = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new HostDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
