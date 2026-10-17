# 🌱 Root — Gestión de Bienestar Universitario

## 📌 Descripción

**Root** es una aplicación web orientada a la comunidad universitaria, especialmente estudiantes y personal de bienestar, cuyo propósito es **centralizar, automatizar y optimizar la gestión de citas, el seguimiento de atenciones y el acceso a los programas institucionales de bienestar**.

La plataforma busca facilitar el acceso a los servicios de bienestar de manera rápida, organizada y sencilla, reduciendo las demoras, cruces de horarios, pérdida de información y dificultades en el seguimiento de las atenciones.

---

## 🎯 Objetivo general

Implementar una aplicación web para la comunidad universitaria que permita la **centralización, automatización y optimización de la gestión de citas, el seguimiento de atenciones y el acceso a los programas institucionales**.

### Objetivos específicos

- Permitir el registro y autenticación de estudiantes y personal de bienestar.
- Automatizar el agendamiento, reprogramación y cancelación de citas.
- Registrar y consultar el historial y seguimiento de las atenciones realizadas.
- Facilitar el acceso e inscripción a los programas institucionales de bienestar.

---

## 🚀 Alcance del sistema

Root permitirá:

- 🔐 Inicio de sesión según el rol del usuario.
- 📅 Agendamiento, reprogramación y cancelación de citas.
- 🕐 Consulta de disponibilidad de fechas y horarios.
- 📝 Registro y seguimiento de las atenciones realizadas.
- 📚 Consulta e inscripción a programas institucionales.
- 🔔 Envío de notificaciones y recordatorios.

---

## 👥 Roles del sistema

La plataforma contempla diferentes perfiles de usuario:

### 🎓 Estudiante

Puede:

- Iniciar sesión.
- Consultar profesionales y disponibilidad.
- Agendar citas.
- Reprogramar o cancelar citas.
- Consultar sus próximas citas.
- Consultar su historial de atenciones.
- Consultar e inscribirse en programas y talleres de bienestar.
- Recibir notificaciones y recordatorios.

### 🧑‍💼 Personal de Bienestar

Puede:

- Gestionar su disponibilidad.
- Consultar las citas asignadas.
- Registrar las atenciones realizadas.
- Consultar el historial de atención de los estudiantes.
- Registrar observaciones y recomendaciones.
- Gestionar programas y talleres institucionales.

### 👨‍💻 Administrador

Puede:

- Gestionar usuarios y perfiles.
- Administrar el acceso según roles.
- Gestionar información institucional.
- Administrar programas y servicios de bienestar.

---

## 🧩 Módulos principales

El sistema está compuesto por cinco módulos operativos:

### 1. 🔐 Autenticación y Gestión de Usuarios

Control de acceso mediante roles:

- Estudiante
- Personal de Bienestar
- Administrador

Incluye gestión de credenciales y perfiles.

### 2. 📅 Gestión y Agendamiento de Citas

Permite:

- Consultar disponibilidad.
- Seleccionar área de atención.
- Seleccionar profesional.
- Seleccionar fecha y horario.
- Agendar citas.
- Reprogramar citas.
- Cancelar citas.

Las áreas contempladas incluyen **Psicología, Medicina y Trabajo Social**.

### 3. 📋 Seguimiento e Historial de Atenciones

Permite al personal de bienestar registrar y consultar las atenciones realizadas, incluyendo observaciones y recomendaciones de seguimiento.

### 4. 📚 Programas Institucionales

Permite administrar y consultar programas, talleres y actividades de bienestar, incluyendo:

- Salud
- Deportes
- Cultura
- Desarrollo Humano

Los estudiantes pueden consultar los cupos disponibles y realizar su inscripción.

### 5. 🔔 Notificaciones y Avisos

Gestiona:

- Confirmaciones de citas.
- Recordatorios.
- Cambios de citas.
- Cancelaciones.
- Avisos institucionales.

---

## ⚙️ Requisitos funcionales

| ID | Requisito | Descripción |
|---|---|---|
| **RF01** | Gestión de usuarios y autenticación | Registro, consulta y actualización de perfiles y control de acceso mediante roles. |
| **RF02** | Gestión y agendamiento de citas | Programación, consulta de disponibilidad, reprogramación y cancelación de citas. |
| **RF03** | Seguimiento e historial | Registro y consulta cronológica de las atenciones realizadas. |
| **RF04** | Gestión de programas | Creación, actualización y administración de programas, talleres, horarios y cupos. |
| **RF05** | Notificaciones y avisos | Generación de recordatorios, alertas y notificaciones relacionadas con las citas y actividades. |



---

## 🛡️ Requisitos no funcionales

- **RNF01 — Usabilidad:** interfaz limpia, intuitiva y fácil de utilizar.
- **RNF02 — Accesibilidad y diseño responsivo:** adaptación a dispositivos móviles y computadores.
- **RNF03 — Seguridad y confidencialidad:** protección de información personal, citas y registros de atención mediante permisos por roles.
- **RNF04 — Disponibilidad:** plataforma disponible en línea para facilitar la consulta y gestión de citas.

---

## 🖥️ Interfaz del sistema

El prototipo de Root está orientado al **Diseño Centrado en el Usuario (DCU)** y contempla lineamientos de accesibilidad web **WCAG 2.1**, buscando una interfaz clara, responsiva y sencilla de utilizar.

### Pantallas principales

#### 🔑 1. Portal institucional e inicio de sesión

Permite el acceso al sistema mediante autenticación y selección del rol correspondiente.

#### 🏠 2. Dashboard del estudiante

Muestra:

- Próximas citas.
- Información del profesional.
- Modalidad de atención.
- Acceso rápido para agendar citas.
- Talleres inscritos.
- Avisos institucionales.

#### 📅 3. Agendamiento de citas

El proceso de agendamiento se organiza mediante un flujo de cuatro etapas:

1. Selección del área de atención.
2. Selección del profesional.
3. Selección de fecha y horario.
4. Registro del motivo de consulta y confirmación.

#### 📝 4. Registro de atención y seguimiento

Vista destinada al personal de bienestar para registrar la información correspondiente a las atenciones realizadas y establecer recomendaciones de seguimiento.

#### 📚 5. Programas y talleres

Catálogo de actividades institucionales donde los estudiantes pueden:

- Filtrar programas por categoría.
- Consultar fechas y horarios.
- Ver cupos disponibles.
- Realizar inscripciones.

---

## 🗂️ Modelo de datos

El sistema contempla entidades relacionadas con:

- Usuario
- Estudiante
- Personal de Bienestar
- Disponibilidad
- Cita
- Atención / Historial
- Programas Institucionales
- Inscripciones
- Notificaciones

Estas entidades conforman la estructura de datos necesaria para soportar los procesos de bienestar universitario.

---

## 👨‍💻 Equipo de desarrollo

| Rol | Integrante |
|---|---|
| **Project Manager** | Wilson Ramírez |
| **Desarrollador Full Stack** | Juan Diego Millan Cano |
| **Diseñador UI/UX** | Alejandro Mercado Quiroz |
| **QA Tester** | Cristian Alejandro Correa Montoya |
| **Analista** | Juan Diego Millan Cano |
| **Analista** | Alejandro Mercado Quiroz |
| **Analista** | Cristian Alejandro Correa Montoya |



---

## 📌 Estado del proyecto

**En desarrollo 🚧**

Root se encuentra en proceso de desarrollo como solución web para la gestión integral de los servicios de bienestar universitario.

---

## 🌱 Propósito

Root busca transformar la gestión tradicional de bienestar universitario mediante una plataforma digital que permita **centralizar los servicios, facilitar el agendamiento de citas, mejorar el seguimiento de las atenciones y acercar los programas institucionales a la comunidad universitaria**.

---

## 📄 Documentación

La documentación del proyecto incluye:

- Requisitos funcionales.
- Requisitos no funcionales.
- Modelo Entidad-Relación (MER).
- Diagrama de clases.
- Prototipo de interfaz.
- Definición de módulos.
- Descripción de las pantallas del sistema.

---

**Root — Gestión de Bienestar Universitario** 🌱  
*Centralizando el bienestar, conectando a la comunidad universitaria.*
