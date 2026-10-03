# ShipLog — Documento de planificación

## 1. Visión

**ShipLog** es una aplicación web para registrar el progreso de proyectos mediante entradas de bitácora ("logs") con fecha y texto. Cada vez que avanzas en un proyecto ("shippeas" algo), dejas constancia breve de qué hiciste para tener, con el tiempo, un historial claro y consultable.

**Problema**
- El progreso se pierde entre commits, chats y notas dispersas.
- Cuesta responder "¿qué hice esta semana?" o "¿cuándo se terminó X?".
- Falta un lugar simple y de baja fricción para documentar avances.

**Pregunta principal que responde la app:** *"¿Qué hice esta semana?"*

**Qué no es:** un gestor de tareas (no es Jira/Trello). No hay estados, asignaciones ni tableros.

## 2. Decisiones del MVP

| Tema | Decisión | Motivo |
|------|----------|--------|
| Usuario | Uso personal: un usuario, sus propios proyectos | Mínimo alcance; la colaboración se valida después |
| Forma | App web responsive (usable desde el móvil) | Un solo código para escritorio y móvil |
| Texto del log | Markdown (texto plano también funciona) | Permite listas y enlaces sin coste extra |
| Fecha del log | Editable; por defecto, hoy | Registrar algo que se hizo ayer es habitual |
| Privacidad | Logs privados | Compartir/publicar queda fuera del MVP |
| Autenticación | Email y contraseña mediante un servicio gestionado | Evita implementar y mantener auth propia |
| Exportación | Exportar todo a Markdown y JSON | Poco esfuerzo; evita que los datos queden atrapados |

### 2.1 Preguntas abiertas
- ¿Stack definitivo? (ver sección 6)
- ¿Hosting: gestionado o servidor propio?
- ¿Nivel de diseño: funcional y simple o con identidad visual?

## 3. Alcance del MVP

### 3.1 Registro rápido (pantalla de inicio)
- Campo de texto siempre visible en la pantalla de inicio para crear un log.
- Proyecto preseleccionado: el último usado.
- Guardar con `Ctrl+Enter` / `Cmd+Enter`.
- Objetivo: registrar un log en menos de 10 segundos.

### 3.2 Línea de tiempo semanal
- Vista principal con los logs de **todos** los proyectos, del más reciente al más antiguo.
- Agrupados por semana, con el nombre del proyecto en cada log.
- Navegación a semanas anteriores.

### 3.3 Proyectos
- Crear, listar, ver, editar y archivar proyectos.
- Campos: nombre, descripción (opcional).
- Un proyecto archivado no aparece en el selector del registro rápido, pero sus logs siguen en el historial.
- Eliminar un proyecto elimina sus logs (con confirmación explícita).

### 3.4 Logs
- Crear, listar, ver, editar y eliminar logs dentro de un proyecto.
- Campos: fecha y texto.
- Listado por proyecto ordenado por fecha (más reciente primero).

### 3.5 Autenticación
- Registro, inicio y cierre de sesión con email y contraseña.
- Cada usuario solo ve y gestiona sus propios datos.

### 3.6 Exportación
- Descargar todos los proyectos y logs en Markdown o JSON.

## 4. Modelo de datos

| Entidad  | Campos |
|----------|--------|
| Usuario  | id, email, contraseña (hash, gestionada por el servicio de auth), fecha_creacion, fecha_actualizacion |
| Proyecto | id, usuario_id, nombre, descripcion (opcional), archivado (bool), fecha_creacion, fecha_actualizacion |
| Log      | id, proyecto_id, fecha (solo día), texto, fecha_creacion, fecha_actualizacion |

- Un Usuario tiene muchos Proyectos; un Proyecto tiene muchos Logs.
- `Log.fecha` es el día en que se hizo el trabajo; `fecha_creacion` es cuándo se escribió el log.
- Borrar un Proyecto borra sus Logs en cascada.

## 5. Fuera del MVP
- Colaboración multiusuario y permisos por proyecto.
- Integraciones (GitHub, Slack, etc.) y API pública.
- Etiquetas, búsqueda avanzada y reportes.
- Logs públicos / changelog compartible.
- Aplicación móvil nativa.

## 6. Stack propuesto (pendiente de confirmar)
- **Frontend y backend:** Next.js (TypeScript).
- **Base de datos:** PostgreSQL en Supabase, con Prisma como ORM.
- **Autenticación:** Supabase Auth (alternativas: Clerk, Auth.js).
- **Despliegue:** Vercel.
- **Calidad:** ESLint, tests con Vitest y CI en GitHub Actions.

## 7. Criterios de éxito
- Registrar un log toma menos de 10 segundos desde la pantalla de inicio.
- Uso al menos 4 días por semana durante 2 semanas seguidas.
- La línea de tiempo responde "¿qué hice esta semana?" sin tener que entrar a cada proyecto.

**Riesgos a validar**
- Que la fricción sea lo bastante baja para crear el hábito.
- Que ver el historial compense el esfuerzo de escribir.

## 8. Hoja de ruta
1. Confirmar el stack y crear el esqueleto del proyecto (repo, CI, despliegue).
2. Modelo de datos y CRUD de proyectos y logs.
3. Registro rápido y línea de tiempo semanal.
4. Autenticación con el servicio gestionado.
5. Exportación a Markdown y JSON.
6. Usarlo 2 semanas, medir los criterios de éxito y decidir la siguiente iteración.
