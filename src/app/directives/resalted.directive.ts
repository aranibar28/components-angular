import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalted]',
})
export class ResaltedDirective {
  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
  }

  @Input('appResalted') newColor: string = '';

  @HostListener('mouseenter') mouseIn() {
    this.resalted(this.newColor || 'yelow');
  }

  @HostListener('mouseleave') mouseOut() {
    this.resalted(null);
  }

  private resalted(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
