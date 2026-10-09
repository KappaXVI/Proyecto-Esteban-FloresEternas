# CHANGELOG - Proyecto Esteban Flores Eternas

## [0.1.0] - 2026-10-09 - Initial Setup

### Configuración Inicial
- **Vite + React** - Framework de build y biblioteca UI
- **HeroUI** - Biblioteca de componentes accesibles y estilosos
- **Framer Motion** - Animaciones para HeroUI
- **JavaScript puro** (sin TypeScript)

### Estructura de Directorios Creada
```
src/
├── components/     # Componentes reutilizables (Button, Card, Modal, etc.)
├── pages/          # Páginas/vistas principales (Home, Productos, Contacto, etc.)
├── data/           # Datos hardcodeados (precios, descripciones, catálogo, etc.)
├── hooks/          # Custom hooks (useProducts, useCart, etc.)
└── utils/          # Utilidades (formateo, validaciones, helpers)
```

### Archivos Modificados
- **src/main.jsx** - Configuración de `HeroUIProvider` con tema por defecto

### Próximos Pasos
- [ ] Crear componentes base (Layout, Header, Footer)
- [ ] Definir datos iniciales en `src/data/`
- [ ] Crear páginas principales
- [ ] Configurar ESLint + Prettier (opcional)

---

## [0.2.0] - 2026-10-09 - React Router + Home Page

### Agregado
- **react-router-dom** - Navegación SPA (Single Page Application)
  - Directorio: `node_modules/react-router-dom` (dependencia)
- **src/pages/Home.jsx** - Página principal con Hero section
  - HeroUI: `Button`, `Heading`, `Paragraph` (Hero y Text no existen en v3)
  - Fondo degradado + pattern SVG
  - CTA buttons: "Ver Catálogo" y "Contactar"
  - Directorio: `src/pages/`
- **public/bg-pattern.svg** - Pattern de fondo para Hero
  - Directorio: `public/`

### Modificado
- **src/App.jsx** - Configuración de rutas con `BrowserRouter`, `Routes`, `Route`
  - Ruta `/` → `Home`
  - Eliminado código boilerplate de Vite
  - Directorio: `src/`
- **src/main.jsx** - Fix import CSS HeroUI v3 (`styles` entry point) + **Eliminado `HeroUIProvider`** (ya no existe en v3)
  - Directorio: `src/`

---

## [0.3.0] - 2026-10-09 - Tailwind CSS 4 Setup

### Agregado
- **tailwindcss@4** - Framework CSS utility-first (requerido por HeroUI v3)
- **@tailwindcss/vite** - Plugin Vite oficial para Tailwind 4
  - Directorio: `node_modules/`

### Modificado
- **vite.config.js** - Plugin `tailwindcss()` añadido
  - Directorio: raíz
- **src/index.css** - Reemplazado boilerplate por `@import "tailwindcss";`
  - Directorio: `src/`

### Comandos
```bash
npm install -D tailwindcss@4 @tailwindcss/vite
npm run dev
```

### Estructura Actualizada
```
src/
├── pages/
│   └── Home.jsx          # Página principal
├── App.jsx               # Router configurado
└── main.jsx              # Entry point (sin HeroUIProvider)
public/
└── bg-pattern.svg        # Pattern para fondo Hero
```

### Comandos
```bash
npm install react-router-dom
npm run dev
```

---

## [0.4.0] - 2026-10-09 - Design System Setup (Fase 0)

### Agregado
- **tailwind.config.js** - Configuración completa con paleta AGENTS.md:
  - Colores: crema (#FFFCF6), blanco, rosa-suave (#FFDADE), ciruela (#5E0048), cafe-medio (#83572E), cafe-oscuro (#572A00), gris-claro (#E5E5E5), vino (#6E0107 - extraído del logo)
  - Fuentes: Radley (títulos), Poppins (UI), Lora (precios), Jost (logo)
  - Border radius: xl (20px) a 5xl (40px)
  - Sombras cálidas (warm, warm-lg, warm-xl)
  - Animaciones: fade-in-up, fade-in
  - Directorio: raíz
- **Google Fonts** en `index.html`: Radley, Poppins, Lora, Jost
  - Directorio: raíz
- **src/index.css** - Diseño system completo con @theme, utilidades base, botones, secciones
  - Directorio: `src/`
- **Color vino extraído** programáticamente del logo: `#6E0107`
  - Script: `scripts/extract-color.mjs`

### Modificado
- **vite.config.js** - Ya configurado con `@tailwindcss/vite`
  - Directorio: raíz
- **index.html** - lang="es", meta tags, Google Fonts, title SEO
  - Directorio: raíz

### Assets en public/images/
- Fondo.png (Hero background)
- Logotipo Flores Eternas con Monograma LP.png (Navbar logo)
- Mesa1.png (Laptop Hero)
- Superficie de mesa de madera pulida.png (Wood surface Hero)
- MesaInferior.png (Devices section)
- Panel de gestión floral elegante.png (Admin panels)
- general.png (Referencia)

---

## [0.5.0] - 2026-10-09 - Componentes Base (Fase 1)

### Agregado - Componentes UI Reutilizables (`src/components/`)
- **ButtonPrimary.jsx** - Botón principal vino con iconos opcionales (play, flecha), `forwardRef`
- **ButtonSecondary.jsx** - Botón secundario blanco/bordeado con iconos opcionales, `forwardRef`
- **ButtonGhost.jsx** - Botón fantasma (default, white, rosa), `forwardRef`
- **Navbar.jsx** - Navbar transparente fija (`fixed top-0 z-50`):
  - 3 zonas: izquierda (Inicio, Funciones, Precios), centro (logo LP), derecha (Testimonios, Preguntas)
  - Subrayado vino en link activo, Poppins, responsive hamburguesa mobile
  - Backdrop blur + shadow al scroll
  - Directorio: `src/components/`
- **Section.jsx** - Wrapper de secciones con variantes (default, hero, cta, admin, devices), `forwardRef`
- **Container.jsx** - Contenedor responsive (main, narrow, wide, full), `forwardRef`
- **Heading.jsx** - Títulos Radley con soporte italic inline (para "más fácil.", "sin complicaciones."), niveles 1-6
- **Body.jsx** - Párrafos Poppins con tamaños (sm, base, lg, xl), colores, alineación
- **Price.jsx** - Precios Lora tabular-nums con símbolo $, decimales opcionales
- **Badge.jsx** - Píldoras de estado (en-preparacion, en-camino, entregado, disponible, stock-bajo, pendiente, cancelado) con punto de color
- **index.js** - Barrel export de todos los componentes
  - Directorio: `src/components/`

---

## Registro de Cambios Futuros

### Formato para nuevas entradas:
```
## [versión] - YYYY-MM-DD - Título breve

### Agregado
- Qué se añadió y para qué sirve
- Directorio: src/...

### Modificado
- Qué cambió y por qué
- Directorio: src/...

### Eliminado
- Qué se quitó y por qué
- Directorio: src/...
```