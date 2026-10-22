# 🦸‍♂️ Héroes en Casa

**Héroes en Casa** es una Progressive Web App (PWA) diseñada para el **desarrollo conductual, la co-paternidad, el establecimiento de rutinas y el refuerzo positivo** en el hogar.

Diseñada con un enfoque **100% inclusivo y adaptado a la neurodiversidad** (Autismo/TEA, TDAH), la aplicación transforma las tareas cotidianas y el autocuidado en una aventura visual e interactiva mediante gamificación, economía de fichas y apoyos visuales.

---

## 🌟 Características Principales

### 👧👦 Vista del Niño (Modo Héroe)
- **Gamificación RPG:** Panel personalizado con contadores de racha (🔥), Fichas Azules (🔵 Recompensas) y Fichas Rojas (🔴 Control conductual).
- **Misiones Diarias:** Listado dinámico de tareas (higiene, orden, estudio) con botones de solicitud de fichas.
- **Personalización Completa:**
  - Carga de imágenes personalizadas para el avatar del héroe.
  - Fondos de pantalla adaptables.
  - Selector de **Temas Sensoriales** (Morado Épico, Calma Sensorial y Modo Noche).
- **Tiendita de Recompensas:** Catálogo interactivo donde el niño puede canjear sus Fichas Azules acumuladas.
- **Sala de Trofeos:** Galería de logros y medallas desbloqueables por buen comportamiento y consistencia.

### 👨‍👩‍👧‍👦 Centro de Padres (Panel de Control)
- **Acceso Protegido:** Entrada restringida con PIN de seguridad.
- **Gestión de Fichas en Tiempo Real:** Suma y resta de Fichas Azules 🔵 y Fichas Rojas 🔴 con un clic.
- **Administrador Dinámico:** Creación, edición y eliminación de misiones y premios personalizados.
- **Centro de Aprobaciones:** Panel para revisar, aprobar o rechazar misiones completadas o canjes solicitados por el niño.
- **Super-Logros:** Otorgamiento directo de fichas con mensajes motivacionales personalizados.
- **Co-Paternidad y Multidispositivo:**
  - Código de Vinculación Familiar.
  - Módulo de **Exportación e Importación de datos (JSON)** para sincronizar fácilmente el progreso entre los teléfonos de mamá, papá o tutores vía WhatsApp o mensajería.

---

## 🛠️ Tecnología

- **Framework:** [Astro v7](https://astro.build/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **PWA Integration:** [@vite-pwa/astro](https://github.com/vite-pwa/astro) (Service Worker para soporte offline)
- **Persistencia:** LocalStorage (`family_app_state_v1`) de alta velocidad y cero dependencia inicial de servidores externos.

---

## 🚀 Inicio Rápido (Desarrollo Local)

### Prerrequisitos
- Node.js (versión 22.12.0 o superior recomendada)
- npm

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/malkavianikkaku-gif/Heroes_en_casa.git
   cd Heroes_en_casa
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:4321`.

---

## 📱 Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila la aplicación PWA para producción en `./dist/` |
| `npm run preview` | Previsualiza la versión compilada localmente |

---

## 📲 Uso como PWA (En Dispositivos Móviles)

1. Despliega el proyecto en un servidor HTTPS (ej. Vercel o Netlify).
2. Abre el enlace en el navegador de tu celular (Chrome o Safari).
3. Selecciona **"Añadir a la pantalla de inicio"** o **"Instalar aplicación"**.
4. ¡Listo! La app se ejecutará a pantalla completa como una aplicación nativa.

---

## 💜 Filosofía del Proyecto

Este proyecto nació con el objetivo de brindar a los niños una herramienta predictiva, visual y altamente motivadora que fomente su autonomía sin abrumarlos, al tiempo que le da a los padres una plataforma ágil para coordinarse y celebrar cada pequeño triunfo diario.