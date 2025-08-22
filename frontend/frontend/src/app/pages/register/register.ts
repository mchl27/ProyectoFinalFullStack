import { Component } from '@angular/core'; // Component para crear componentes de Angular
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; 
// FormBuilder para construir formularios reactivos, Validators para validación
import { AuthService } from '../../services/auth'; // Servicio de autenticación

@Component({
  selector: 'app-register', // Selector HTML
  standalone: true, // Componente independiente
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule para usar formularios reactivos
  templateUrl: './register.html', // Template HTML
  styleUrls: ['./register.css'] // Estilos CSS
})
export class RegisterComponent {
  mensaje = ''; // Mensaje de éxito o error al registrar
  form: any; // Formulario reactivo

  constructor(private fb: FormBuilder, private auth: AuthService) {
    // Construimos el formulario con validaciones
    this.form = this.fb.group({
      nombre: ['', Validators.required], // Campo nombre obligatorio
      email: ['', [Validators.required, Validators.email]], // Email obligatorio y válido
      password: ['', Validators.required], // Contraseña obligatoria
      rol: ['', Validators.required] // Rol obligatorio
    });
  }

  // Método para registrar un usuario
  registrar() {
    this.auth.register(this.form.value).subscribe({
      next: (res: any) => this.mensaje = res.message, // Mostrar mensaje de éxito
      error: (err: any) => this.mensaje = err.error.message // Mostrar mensaje de error
    });
  }
}