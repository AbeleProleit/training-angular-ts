import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'button[plDanger]',
  standalone: true,
})
export class DangerDirective {

    @Input() plDanger = ''
    private defaultMsg = 'sure about that?'
    @Output() confirmed = new EventEmitter<void>();

    @HostBinding('style.backgroundColor')
    private readonly backgroundColor = 'lime'

    @HostListener('click')
    private clickHandler(){
      if(confirm(this.plDanger === '' ? this.defaultMsg : this.plDanger))
        this.confirmed.emit();
    }

  }

