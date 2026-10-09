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