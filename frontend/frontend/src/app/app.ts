import { Component, signal } from '@angular/core'; // Component para crear componentes, signal para estado reactivo
import { RouterOutlet } from '@angular/router'; // RouterOutlet para renderizar rutas
import { ReactiveFormsModule } from '@angular/forms'; // Formularios reactivos
import { NavbarComponent } from './components/navbar/navbar'; // Componente Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend'); // Señal reactiva 'title' con valor 'frontend'
}