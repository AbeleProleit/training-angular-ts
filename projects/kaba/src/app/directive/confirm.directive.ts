import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[plConfirm]',
  standalone: false
})
export class ConfirmDirective {
  @Input() plConfirm = '';
  private readonly defaultMessage = 'Proceed?';
  @Output() confirmed = new EventEmitter<void>();

  @HostListener('click')
  private onClick() {
    if (confirm(this.plConfirm === '' ? this.defaultMessage : this.plConfirm))
      this.confirmed.emit();
  }
}
