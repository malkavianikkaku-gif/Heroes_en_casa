# 🧠 MEMORY.md — Estado del Proyecto: Héroes en Casa (PWA)

## 📌 Contexto General
- **Nombre:** Héroes en Casa
- **Propósito:** PWA para desarrollo conductual, co-paternidad, establecimiento de rutinas y refuerzo positivo.
- **Enfoque de Accesibilidad:** 100% Inclusivo y adaptable a la neurodiversidad (autismo/TEA, TDAH) mediante apoyo visual (emojis), interfaces claras y selector de temas sensoriales.
- **Héroe Principal Configurado:** Ángel 👦

---

## 🛠️ Stack Técnico y Configuración
- **Framework:** Astro v7
- **Estilos:** Tailwind CSS v4 + Soporte de Temas Dinámicos
- **PWA Integration:** `@vite-pwa/astro` (Verificado y funcionando en móvil y PC)
- **Gestión de Estado:** Centralizado en `localStorage` con la clave `'family_app_state_v1'`

---

## 🧱 Estructura de Componentes Modularizados (`src/components/`)
- `HeroHeader.astro`: Encabezado responsivo con soporte para gradientes personalizados, avatar del héroe y contador de fichas azules (🔵) en tiempo real.
- `MissionCard.astro`: Tarjeta interactiva para la representación visual y dinámicas de misiones.
- `RewardCard.astro`: Tarjeta interactiva para el catálogo de la Tiendita de Recompensas.

---

## 🚀 Estado de Módulos y Funcionalidad

### 1. Portal Familiar (`/`)
- Selector inicial de perfil (Ángel / Padres).
- Acceso protegido con PIN de seguridad para el Centro de Mando.

### 2. Vista del Niño (`/nino`)
- Encabezado dinámico sincronizado con el perfil configurado (Ángel + Avatar).
- Renderizado de misiones diarias filtradas dinámicamente desde `localStorage`.
- Sistema de solicitudes de fichas para revisión del tutor.
- **Selector de Temas Sensoriales:** Ajuste dinámico de paleta de colores (Vibrante, Calma/Sensorial y Noche).

### 3. Sala de Trofeos (`/nino/logros`)
- Galería de insignias y medallas desbloqueables según el progreso del héroe.
- Visualización de estado (Logrado 🌟 / Bloqueado 🔒).

### 4. Tiendita de Recompensas (`/tiendita`)
- Catálogo dinámico configurado por los padres.
- Validación de saldo suficiente antes de generar la solicitud de canje.

### 5. Centro de Padres (`/padres/dashboard`)
- **Gestión de Perfil:** Modificación en tiempo real del nombre ("Ángel") y avatar/emoji del héroe.
- **Super-Logros:** Módulo de otorgamiento directo e instantáneo de fichas azules.
- **Administradores Dinámicos:** Creación y eliminación de Misiones y Premios.
- **Centro de Aprobaciones:** Flujo de validación para aceptar o rechazar solicitudes.
- **Salida Segura:** Botón de cierre de sesión protegido (🔒).

---

## 📋 Próximos Pasos (Opcionales / Futuros)
1. **Despliegue en Cloud/HTTPS:** Publicar en Vercel o Netlify para habilitar el prompt de instalación nativa directa en dispositivos móviles.