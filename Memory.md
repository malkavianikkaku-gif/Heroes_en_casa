# 🧠 MEMORY.md — Estado Actual del Proyecto: Héroes en Casa (PWA)

## 📌 Contexto General
- **Nombre:** Héroes en Casa (Heroes_en_casa)
- **Propósito:** PWA para desarrollo conductual, co-paternidad, establecimiento de rutinas y refuerzo positivo.
- **Enfoque de Accesibilidad:** 100% Inclusivo y adaptable a la neurodiversidad (autismo/TEA, TDAH) mediante apoyo visual (emojis, fotos), interfaces claras y selector de temas sensoriales.
- **Héroe Principal Configurado:** Ángel 👦 (Color preferido: Morado 💜)
- **Repositorio / Despliegue:** GitHub (`malkavianikkaku-gif/Heroes_en_casa`) desplegado en **Vercel** en producción.

---

## 🛠️ Stack Técnico y Configuración de Infraestructura
- **Framework:** Astro v7 (Engines `>=22.12.0`)
- **Estilos:** Tailwind CSS v4 + Soporte de Temas Dinámicos en CSS / Inline Styles.
- **PWA Integration:** `@vite-pwa/astro` (Service Workers activos).
- **Control de Build:** Archivo `.npmrc` configurado con `legacy-peer-deps=true` para resolver conflictos de dependencias entre Astro v7 y Vite-PWA.
- **Gestión de Estado:** Persistencia local centralizada en `localStorage` con la clave `'family_app_state_v1'`.

---

## 🚀 Estado de Módulos y Funcionalidades Activas

### 1. Portal de Acceso (`/`)
- Selector inicial de perfil (Ángel / Padres).
- Acceso a la vista de Padres protegido con PIN.

### 2. Vista del Niño (`/src/pages/nino/index.astro`)
- **Visuales Épicos:** Header en gradiente Morado (`from-purple-600 to-indigo-700`) elegido por Ángel.
- **Contadores de Fichas en Tiempo Real:** 
  - 🔥 Racha de días.
  - 🔵 Fichas Azules (Recompensas/Premios).
  - 🔴 Fichas Rojas (Ajuste/Atención conductual).
- **Soporte Multimedia Personalizado:**
  - Avatar de héroe dinámico: Permite usar emojis o fotos/dibujos personalizados subidos con `FileReader`.
  - Fondo de pantalla dinámico: Renderiza imágenes de fondo subidas por los padres.
- **Misiones Diarias:** Renderizado dinámico con botón de envío para aprobación de los padres.
- **Selector de Temas Sensoriales:** 💜 Morado Épico, 🌿 Calma (Sensorial) y 🌙 Noche.

### 3. Sala de Trofeos (`/src/pages/nino/logros.astro`)
- Galería de insignias y medallas desbloqueables.
- Aplicación de fondo e imagen de avatar personalizada.

### 4. Tiendita de Recompensas (`/src/pages/tiendita.astro`)
- Catálogo de premios dinámicos en Fichas Azules 🔵.
- Verificación de saldo y envío de solicitudes de canje a los padres.

### 5. Centro de Padres (`/src/pages/padres/dashboard.astro`)
- **Gestión de Perfil:** Ajuste de nombre, emoji, subir Foto de Avatar y Fondo de Pantalla (`base64`).
- **Control Directo de Fichas:**
  - Panel para sumar/restar Fichas Azules 🔵 (`-1`, `+1`, `+5`).
  - Panel para sumar/restar Fichas Rojas 🔴 (`-1`, `+1`) y botón **Limpiar** para reiniciar a 0.
- **Sincronización Co-paternidad / Multidispositivo:**
  - Generador de Código Familiar (`HEROES-ANGEL-2026`).
  - Campo para vincular otros dispositivos.
  - Módulo de **Exportar Datos 📤 / Importar Datos 📥** (copiado rápido JSON vía WhatsApp para igualar progreso entre teléfonos).
- **Super-Logros:** Asignación directa e instantánea de fichas con mensaje especial.
- **Administrador de Misiones y Premios:** Creación y eliminación dinámica de tareas y premios.
- **Centro de Aprobaciones Pendientes:** Validación de canjes y misiones completadas.