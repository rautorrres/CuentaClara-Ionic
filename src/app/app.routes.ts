import { Routes } from '@angular/router';

/**
 * Mapa de navegación de CuentaClara (Unidad 2, 00_mapa_navegacion):
 *  01 Bienvenida -> 02 Crear o unirse -> Menú inferior (03 Inicio, 05 Nuevo gasto, 06 Historial, 09 Perfil)
 *  Desde Inicio: 04 Selector de grupos (hoja inferior), 07 Notificaciones, 08 Saldar deuda.
 * Todas las pantallas se cargan de forma diferida (lazy loading).
 */
export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', loadComponent: () => import('./pages/bienvenida/bienvenida.page').then((m) => m.BienvenidaPage) },
  { path: 'crear-o-unirse', loadComponent: () => import('./pages/crear-o-unirse/crear-o-unirse.page').then((m) => m.CrearOUnirsePage) },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage) },
      { path: 'nuevo', loadComponent: () => import('./pages/nuevo/nuevo.page').then((m) => m.NuevoPage) },
      { path: 'historial', loadComponent: () => import('./pages/historial/historial.page').then((m) => m.HistorialPage) },
      { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.page').then((m) => m.PerfilPage) },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
  { path: 'saldar-deuda', loadComponent: () => import('./pages/saldar-deuda/saldar-deuda.page').then((m) => m.SaldarDeudaPage) },
  { path: 'notificaciones', loadComponent: () => import('./pages/notificaciones/notificaciones.page').then((m) => m.NotificacionesPage) },
  { path: '**', redirectTo: 'bienvenida' },
];
