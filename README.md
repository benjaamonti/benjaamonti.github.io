# Mi CV Personal

Web personal con currículum vitae y sección de contacto, construida con React, TypeScript y Tailwind CSS.

![Vista previa](./preview.png)

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Modo oscuro/claro
- ✅ Secciones: Inicio, Experiencia, Educación, Habilidades, Contacto
- ✅ Links a redes sociales (Instagram, WhatsApp, LinkedIn)
- ✅ Formulario de contacto
- ✅ Animaciones suaves y transiciones
- ✅ Optimizado para SEO

## 🛠️ Tecnologías

- **React** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

## 📦 Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mi-cv.git

# Entrar al directorio
cd mi-cv

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🚀 Despliegue en GitHub Pages

### 1. Configurar vite.config.ts

Asegúrate de que tu `vite.config.ts` tenga la base correcta:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repo/', // ← Cambia esto por el nombre de tu repositorio
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 2. Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Sube el código:

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit"

# Agregar remote (cambia 'tu-usuario' y 'nombre-repo')
git remote add origin https://github.com/tu-usuario/nombre-repo.git

# Subir código
git push -u origin main
```

### 3. Configurar GitHub Actions

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Activar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. Guarda los cambios

### 5. Desplegar

Cada vez que hagas push a la rama `main`, GitHub Actions desplegará automáticamente tu web.

Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repo/`

## 📝 Personalización

### Cambiar información personal

Edita los archivos en `src/sections/`:

- **Hero.tsx** - Nombre, título, ubicación, email, teléfono
- **Experience.tsx** - Experiencia laboral
- **Education.tsx** - Educación y certificaciones
- **Skills.tsx** - Habilidades técnicas
- **Contact.tsx** - Links a redes sociales (Instagram, WhatsApp, LinkedIn)

### Cambiar foto de perfil

En `Hero.tsx`, reemplaza la URL del avatar:

```tsx
<AvatarImage src="URL_DE_TU_FOTO" alt="Tu Nombre" />
```

### Cambiar colores

Edita `src/index.css` y modifica las variables CSS:

```css
:root {
  --primary: 221 83% 53%; /* Cambia el color principal */
}
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

Hecho con ❤️ y React
