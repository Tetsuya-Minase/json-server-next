import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() disabled: boolean;
  @Input() size?: 'small' | 'large';
  @Input() type?: 'primary' | 'error' | 'warning';
  @Output() clickEvent = new EventEmitter<string>();

  classList: string[] = ['button'];

  ngOnInit(): void {
    switch (this.size) {
      case 'small':
        this.classList.push('button--small');
        break;
      case 'large':
        this.classList.push('button--large');
        break;
    }
    switch (this.type) {
      case 'primary':
        this.classList.push('button--primary');
        break;
      case 'error':
        this.classList.push('button--error');
        break;
      case 'warning':
        this.classList.push('button--warning');
        break;
    }
  }

  onClick() {
    this.clickEvent.emit('click');
  }
}
