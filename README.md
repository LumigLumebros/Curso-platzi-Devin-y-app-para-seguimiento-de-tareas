# Curso-platzi-Devin-y-app-para-seguimiento-de-tareas

Repositorio del curso de Platzi sobre Devin, donde se desarrolla **ShipLog**: una aplicación para registrar el progreso de proyectos mediante logs con fecha y texto.

## ShipLog

ShipLog permite dejar constancia breve de cada avance en un proyecto para tener un historial claro y consultable ("¿qué hice esta semana?", "¿cuándo se terminó X?").

- **Registro rápido:** escribir un log debe tomar segundos.
- **Historial ordenado** por proyecto y por fecha.
- **Base para crecer:** resúmenes, reportes e integraciones en futuras iteraciones.

## Alcance del MVP

1. **Autenticación mínima:** registro, inicio y cierre de sesión con email y contraseña; cada usuario solo ve sus datos.
2. **CRUD de proyectos:** nombre, descripción (opcional) y fecha de creación.
3. **CRUD de logs:** fecha y texto, dentro de un proyecto, ordenados del más reciente al más antiguo.

### Modelo de datos inicial

| Entidad  | Campos principales                                     |
|----------|--------------------------------------------------------|
| Usuario  | id, email, contraseña (hash), fecha de creación        |
| Proyecto | id, usuario_id, nombre, descripción, fecha de creación |
| Log      | id, proyecto_id, fecha, texto, fecha de creación       |

**Fuera del MVP:** colaboración multiusuario, integraciones (GitHub, Slack, etc.), API pública, etiquetas, búsqueda avanzada, reportes, exportación y app móvil nativa.

## Planificación

El análisis completo de la idea, las preguntas para definir el MVP (uso y usuarios, datos, integraciones, forma) y los próximos pasos están en [PLAN.md](PLAN.md).
