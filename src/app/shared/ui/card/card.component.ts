// product-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() name = 'Produit';
  @Input() price = 0;            // en euros
  @Input() badge = 'Nouveau';     // ex: Rare, Vérifié, Promo...
  @Input() imageUrl = '';
}
