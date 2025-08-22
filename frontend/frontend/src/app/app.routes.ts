import { Routes } from '@angular/router'; // Importamos tipo Routes para definir rutas
import { HomeComponent } from './pages/home/home'; // Página principal
import { AboutComponent } from './pages/about/about'; // Página "Acerca de"
import { RegisterComponent } from './pages/register/register'; // Página de registro
import { LoginComponent } from './pages/login/login'; // Página de login
import { ProfileComponent } from './pages/profile/profile'; // Página de perfil
import { UsersComponent } from './pages/users/users'; // Página de listado de usuarios
import { AuthGuard } from './guards/auth-guard'; // Guard para proteger rutas

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz → Home
  { path: 'about', component: AboutComponent }, // Ruta "/about" → AboutComponent
  { path: 'register', component: RegisterComponent }, // Ruta "/register"
  { path: 'login', component: LoginComponent }, // Ruta "/login"
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige ruta vacía a "/login"
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Ruta "/profile"
  { path: 'users', component: UsersComponent }, // Ruta "/users"
];