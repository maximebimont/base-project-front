import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  @Input() variant: 'primary' | 'secondary' = 'primary';
}
