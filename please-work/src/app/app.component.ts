import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'please-work';
}
