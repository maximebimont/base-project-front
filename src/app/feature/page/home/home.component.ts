import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/ui/button/button.component';
import {CardComponent} from '../../../shared/ui/card/card.component';
import {LoaderComponent} from '../../../shared/ui/loader/loader.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    ButtonComponent,
    CardComponent,
    LoaderComponent,
    NgIf
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loading = true;

  constructor() {
    // démo : on coupe le loader après 1.5s
    setTimeout(() => (this.loading = false), 15000000);
  }
}
