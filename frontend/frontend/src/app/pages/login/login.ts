import { Component } from '@angular/core'; // Component para crear componentes de Angular
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms'; 
// FormBuilder para crear formularios reactivos, Validators para validaciones
import { AuthService } from '../../services/auth'; // Servicio de autenticación
import { Router } from '@angular/router'; // Para redirigir al usuario
import { CommonModule } from '@angular/common'; // Módulos comunes de Angular

@Component({
  selector: 'app-login', // Selector HTML
  standalone: true, // Componente independiente
  imports: [ReactiveFormsModule, CommonModule], // Importa módulos necesarios
  templateUrl: './login.html', // Template HTML
  styleUrls: ['./login.css'] // Estilos CSS
})
export class LoginComponent {
  mensaje = ''; // Mensaje de éxito o error
  form: FormGroup; // Formulario reactivo

  constructor(
    private fb: FormBuilder, // Inyecta FormBuilder
    private auth: AuthService, // Inyecta AuthService
    private router: Router // Inyecta Router
  ) {
    // Inicializamos el formulario con validaciones
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email obligatorio y válido
      password: ['', Validators.required] // Contraseña obligatoria
    });
  }

  // Método para iniciar sesión
  login() {
    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token); // Guardamos token en localStorage
        this.mensaje = 'Login exitoso'; // Mensaje de éxito
        this.router.navigate(['/profile']); // Redirigimos a perfil
      },
      error: (err: any) => this.mensaje = err.error.message // Mensaje de error si falla
    });
  }
}