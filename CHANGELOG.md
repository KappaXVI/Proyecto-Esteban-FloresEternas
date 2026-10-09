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
  - HeroUI: `Hero`, `Button`, `Text`
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
- **src/main.jsx** - Fix import CSS HeroUI v3 (`styles.css` vs `index.css`)
  - Directorio: `src/`

### Estructura Actualizada
```
src/
├── pages/
│   └── Home.jsx          # Página principal
├── App.jsx               # Router configurado
└── main.jsx              # HeroUIProvider
public/
└── bg-pattern.svg        # Pattern para fondo Hero
```

### Comandos
```bash
npm install react-router-dom
npm run dev
```

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