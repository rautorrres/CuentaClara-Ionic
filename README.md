# CuentaClara · cáscara de navegación (Ionic + Angular)

Trabajo de la Unidad 3, Parte B · Taller de Dispositivos Móviles · UNIACC
Alumno: Raúl Torres · Docente: José Luis Pino Cofre

Cáscara (shell) de la aplicación CuentaClara: implementa **solo la navegación** definida en el Mapa de Navegación de la Unidad 2 y las pantallas diseñadas, con contenido de ejemplo estático. Aún no hay lógica de negocio, base de datos ni conexión a un servidor.

## Pantallas y navegación

| Mapa U2 | Ruta | Pantalla |
|---|---|---|
| 01 | `/bienvenida` | Bienvenida (sin registro) |
| 02 | `/crear-o-unirse` | Crear grupo o unirse con código |
| 03 | `/tabs/inicio` | Inicio y saldos (menú inferior) |
| 05 | `/tabs/nuevo` | Nuevo gasto |
| 06 | `/tabs/historial` | Historial |
| 09 | `/tabs/perfil` | Perfil (vinculación opcional de cuenta) |
| 04 | (hoja inferior en Inicio) | Selector de grupos |
| 07 | `/notificaciones` | Avisos: confirmar pago |
| 08 | `/saldar-deuda` | Saldar deuda |

Flujo: Bienvenida → Crear o unirse → menú inferior (Inicio, Nuevo, Historial, Perfil). Desde Inicio se abre el selector de grupos, la campana (avisos) y «Saldar deudas». Los cambios pedidos por el docente en la Unidad 1 (selector de grupos, confirmación del receptor, vinculación voluntaria) están representados en la navegación.

## Tecnología

- Angular 20 (componentes standalone, carga diferida de cada pantalla) y Ionic Framework 8 (`@ionic/angular/standalone`).
- Capacitor 7 (configuración incluida; las plataformas Android e iOS se agregan en la siguiente unidad).
- Paleta y componentes según la guía de estilo de la Unidad 2 (verde azulado `#0E7C7B`).

## Requisitos

- Node.js 20.19 o superior (probado con 22) y npm.

## Instalación y ejecución

```bash
npm install
npm start          # abre http://localhost:4200
npm run build      # genera dist/cuentaclara/browser
```

Para ver la aplicación como en un teléfono, abrir las herramientas del navegador (F12) y activar la vista de dispositivo móvil.

## Estructura

```
src/app/
  app.ts, app.config.ts, app.routes.ts   raíz, proveedores de Ionic y mapa de rutas
  pages/                                  una carpeta por pantalla
  components/selector-grupos/             hoja inferior del selector de grupos
src/styles.scss                           tema (colores y utilidades)
```

## Problemas enfrentados y cómo se resolvieron

1. **La plantilla `ionic start` no se pudo descargar** (error de archivo comprimido corrupto al bajar la plantilla). Se creó el proyecto con Angular CLI y se agregó Ionic manualmente (`@ionic/angular`, `ionicons`, estilos en `angular.json`, `provideIonicAngular()`).
2. **Versión de Angular CLI incompatible con la versión de Node instalada.** Se usó Angular 20, compatible con Node 22.
3. **El selector de grupos aparecía en blanco.** El `ion-content` de la hoja inferior no tenía altura porque el componente no es una página; se resolvió agregando la clase `ion-page` al componente y colocando el modal fuera del contenido de la página.
4. **Advertencia de tamaño del paquete inicial.** El límite por defecto de Angular es 500 kB; se subió a 1 MB, razonable para una aplicación Ionic.
5. **Íconos.** Ionic standalone exige registrar cada ícono con `addIcons`; se registran solo los usados para mantener liviano el paquete.

## Pendiente (siguientes unidades)

Contenido real de cada pantalla, base de datos local (modo sin conexión), cámara, notificaciones y generación de las aplicaciones Android e iOS con Capacitor.
