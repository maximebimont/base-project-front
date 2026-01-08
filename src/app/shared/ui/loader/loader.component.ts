import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() label = 'Chargement…';
  @Input() inline = false; // inline = petit loader, sinon bloc centré
}
