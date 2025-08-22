import { bootstrapApplication } from '@angular/platform-browser'; // Función para arrancar la app Angular standalone
import { App } from './app/app'; // Componente raíz
import { provideRouter } from '@angular/router'; // Proveedor de rutas
import { provideHttpClient } from '@angular/common/http'; // Proveedor para HttpClient
import { routes } from './app/app.routes'; // Importamos nuestras rutas definidas

// Inicializamos la aplicación Angular
bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // Proveemos el router con las rutas de la app
    provideHttpClient() // Proveemos HttpClient para peticiones HTTP
  ]
}).catch(err => console.error(err)); // Capturamos y mostramos errores al arrancar la app