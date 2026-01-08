import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from './shared/ui/button/button.component'; // ou ButtonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent], // <- IMPORTANT
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
