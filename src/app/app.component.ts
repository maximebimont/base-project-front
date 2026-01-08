import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoaderComponent } from './shared/ui/loader/loader.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import {CardComponent} from './shared/ui/card/card.component';
import {FooterComponent} from './shared/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    LoaderComponent,
    ButtonComponent,
    CardComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loading = true;

  constructor() {
    // démo : on coupe le loader après 1.5s
    setTimeout(() => (this.loading = false), 15000000);
  }
}
