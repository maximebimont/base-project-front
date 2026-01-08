import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() brand = 'Collector Shop';
  year = new Date().getFullYear();
}
