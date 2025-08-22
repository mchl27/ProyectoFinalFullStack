import { Injectable } from '@angular/core'; // Para marcar la clase como inyectable
import { Observable } from 'rxjs'; // Para manejar respuestas asíncronas
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Para hacer peticiones HTTP

// Interfaz para definir la estructura de un usuario
export interface Usuario {
  _id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'usuario';
}

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/auth'; // URL base del backend

  constructor(private http: HttpClient) {} // Inyectamos HttpClient para las peticiones

  // Registro de usuario
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data); // POST a /register
  }

  // Login de usuario
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data); // POST a /login
  }

  // Obtener perfil del usuario autenticado
  profile(): Observable<any> {
    const token = localStorage.getItem('token'); // Tomamos el token guardado
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Agregamos token al header
    return this.http.get(`${this.apiUrl}/profile`, { headers }); // GET a /profile
  }
  
  // Obtener lista de usuarios (solo admin)
  getUsers(): Observable<any> {
    const token = localStorage.getItem('token'); // Tomamos token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Header con token
    return this.http.get(`${this.apiUrl}/users`, { headers }); // GET a /users
  }

  // Guardar token en localStorage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Obtener token de localStorage
  getToken() {
    return localStorage.getItem('token');
  }

  // Cerrar sesión eliminando token
  logout() {
    localStorage.removeItem('token');
  }
}