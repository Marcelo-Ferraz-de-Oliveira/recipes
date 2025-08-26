import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewRecipeBadge]'
})
export class NewRecipeBadge implements OnInit {
  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  appNewRecipeBadge = input<boolean>();
  ngOnInit(): void {
    if(!this.appNewRecipeBadge()) return;
    const badge = this.renderer.createElement('span');
    const text = this.renderer.createText('Nova!');
    this.renderer.appendChild(badge, text);
    this.renderer.addClass(badge, 'new-badge');
    this.renderer.appendChild(this.el.nativeElement, badge);
  }
}
