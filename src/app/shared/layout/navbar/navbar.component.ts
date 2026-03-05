import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

type NavItem = { label: string; href: string; exact?: boolean };

@Component({
  selector: 'ui-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() brand = 'Collector Shop';
  @Input() items: NavItem[] = [
    { label: 'Accueil', href: '/home', exact: true },
    { label: 'À propos', href: '/about' },
    // { label: 'Produits', href: '/products' },
    { label: 'Ma page', href: '/my-page' }
  ];
}
