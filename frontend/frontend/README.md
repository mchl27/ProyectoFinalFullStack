# 🌐 Proyecto Final Frontend

## 📄 Descripción
Este es el frontend del Sistema de Gestión de Usuarios con autenticación y roles (admin y usuario).
Está construido con Angular Standalone Components y se comunica con el backend mediante HTTP.

Permite:

- Registro y login de usuarios

- Visualización del perfil del usuario

- Listado de todos los usuarios (solo admins)

- Navegación entre páginas usando Angular Router

---

## 🛠️ Tecnologías usadas

- Framework: Angular 17+

- Lenguaje: TypeScript, HTML, CSS

- Módulos principales: ReactiveFormsModule, RouterModule, HttpClientModule

- Gestión de estado: Signals de Angular para reactividad simple

- Servicios: AuthService para comunicación con backend

- Guardias: AuthGuard para proteger rutas

---

## 📂 Estructura del proyecto (src/app)
/app

  /components

    /navbar
      navbar.ts       # Lógica del componente Navbar
      navbar.html     # Template del Navbar
      navbar.css      # Estilos del Navbar
      navbar.spec.ts  # Pruebas unitarias del Navbar

  /guards

    auth-guard.ts     # Guard para proteger rutas
  /pages

    /about

    /home

    /login

      login.ts
      
      login.html

      login.css

    /profile

      profile.ts

      profile.html

      profile.css

    /register

      register.ts

      register.html

      register.css

    /users

      users.ts

      users.html

      users.css

  /services

    auth.ts           # Servicio de autenticación

  app.ts              # Componente raíz

  app.html

  app.css
  
  app.routes.ts       # Definición de rutas

main.ts               # Inicialización de la aplicación

index.html            # HTML principal

---

## ⚙️ Requisitos previos

- Node.js >= 18

- Angular CLI

- Backend funcionando en http://localhost:4000

- npm o yarn

---

🚀 Instrucciones de instalación y ejecución

Clonar el repositorio o copiar la carpeta frontend:
```bash
git clone <[URL_DEL_REPOSITORIO](https://github.com/mchl27/ProyectoFinalFullStack.git)>
cd frontend
```


1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar la aplicación:
```bash
ng serve
```

Angular servirá la aplicación en http://localhost:4200 por defecto.

Abrir el navegador y acceder a esa URL para usar la aplicación.

---

## 🔑 Uso e implementación

Navegación:
- La barra de navegación permite moverse entre las páginas Home, About, Login, Register, Profile y Users.

Autenticación:
- Registro de usuario: /register

Login: /login
- Perfil: /profile (requiere token)

Listado de usuarios: /users (solo admins)

Servicios y token:
- AuthService maneja las peticiones al backend y el almacenamiento del token JWT en localStorage.
- Todos los endpoints protegidos incluyen el token en el header Authorization: Bearer <token>.

Rutas protegidas:
- AuthGuard se puede aplicar a rutas sensibles (/profile, /users) para bloquear acceso a usuarios no autenticados.

---

## 🧩 Personalización

Cambiar apiUrl en services/auth.ts si el backend está en otra URL.

Modificar estilos CSS en cada componente para personalizar apariencia.

Agregar nuevas páginas siguiendo la estructura de pages.

🧑‍💻 Autor

Nombre: Michael Andres Lopez Cardenas
Diplomado Desarrollo Web Full Stack
