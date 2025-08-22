import { Component, OnInit } from '@angular/core'; // Component para crear componentes, OnInit para inicialización
import { AuthService } from '../../services/auth'; // Servicio de autenticación para obtener usuarios
import { CommonModule } from '@angular/common'; // Módulos comunes de Angular

@Component({
  selector: 'app-users', // Selector HTML
  imports: [CommonModule], // Módulos importados para este componente
  templateUrl: './users.html', // Template HTML
  styleUrls: ['./users.css'], // Estilos CSS
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Array para almacenar usuarios obtenidos del backend
  errorMessage = ''; // Mensaje de error si falla la carga

  constructor(private userService: AuthService) {} // Inyectamos servicio AuthService

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data, // Guardamos los usuarios obtenidos
      error: (err) => this.errorMessage = err.error?.message || 'Error al cargar usuarios' 
      // Guardamos mensaje de error si la petición falla
    });
  }
}