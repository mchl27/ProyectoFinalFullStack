import { Component, OnInit } from '@angular/core'; // Component para crear componentes, OnInit para inicialización
import { CommonModule } from '@angular/common'; // Módulos comunes de Angular
import { Router } from '@angular/router';  // Para redirigir al usuario después de logout
import { AuthService } from '../../services/auth'; // Servicio de autenticación

@Component({
  selector: 'app-profile', // Selector HTML
  standalone: true, // Componente independiente
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './profile.html', // Template HTML
  styleUrls: ['./profile.css'] // Estilos CSS
})
export class ProfileComponent implements OnInit {
  user: any; // Objeto donde se guardan los datos del usuario

  constructor(
    private auth: AuthService, // Inyecta servicio AuthService
    private router: Router   // Inyecta Router para redirecciones
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.auth.profile().subscribe({
      next: (res: any) => this.user = res, // Guardamos los datos del usuario
      error: (err: any) => console.log(err) // Mostramos error en consola si falla
    });
  }

  // Método para cerrar sesión
  onLogout() {
    this.auth.logout(); // Eliminamos token del localStorage
    this.router.navigate(['/login']); // Redirigimos al login
  }
}