# Jeneri

Tienda online / web app de comida china contemporánea. React + TypeScript + Vite.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS, Framer Motion
- Three.js (@react-three/fiber, @react-three/drei) — fondo del hero
- react-i18next — 6 idiomas: Español, English, Français, 한국어, 中文, Österreichisch

## GitHub Pages

1. Crea un repositorio en GitHub llamado **Jeneri** (sin README, sin .gitignore).
2. Añade el remote y sube el código:

```bash
git remote add origin https://github.com/TU_USUARIO/Jeneri.git
git branch -M main
git push -u origin main
```

3. En el repo: **Settings → Pages → Source**: elige **GitHub Actions**.
4. En cada push a `main` el workflow desplegará la web. La URL será:  
   `https://TU_USUARIO.github.io/Jeneri/`
