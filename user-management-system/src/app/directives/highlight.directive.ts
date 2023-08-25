import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { IUser } from '../models/user-model';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() user!: IUser;
  isActiveColor = 'green';
  isNotActiveColor = 'red';

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.color') color = 'white';

  ngOnInit(): void {
    if (this.user.isActive) {
      this.backgroundColor = this.isActiveColor;
    } else {
      this.backgroundColor = this.isNotActiveColor;
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
    this.color = 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.user.isActive) {
      this.backgroundColor = this.isActiveColor;
      this.color = 'white';
    } else {
      this.backgroundColor = this.isNotActiveColor;
      this.color = 'white';
    }
  }
}
