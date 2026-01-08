import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

type NavItem = { label: string; href: string };

@Component({
  selector: 'ui-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() brand = 'Collector Shop';
  @Input() items: NavItem[] = [
    { label: 'À propos', href: '#' },
    { label: 'Produits', href: '#' },
    { label: 'Vendre', href: '#' },
    { label: 'Contact', href: '#' },
  ];
}
