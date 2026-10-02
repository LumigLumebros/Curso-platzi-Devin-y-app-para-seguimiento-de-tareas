# ShipLog — Documento de planificación

## 1. Análisis de la idea

**ShipLog** es una aplicación para registrar el progreso de proyectos mediante entradas de bitácora ("logs") con fecha y texto. La idea central: cada vez que avanzas en un proyecto ("shippeas" algo), dejas constancia breve de qué hiciste, de modo que con el tiempo tengas un historial claro y consultable.

**Problema que resuelve**
- El progreso en proyectos personales o de equipo se pierde entre commits, chats y notas dispersas.
- Cuesta responder "¿qué hice esta semana / este mes?" o "¿cuándo se terminó X?".
- Falta un lugar simple y de baja fricción para documentar avances.

**Propuesta de valor**
- Registro rápido: escribir un log debe tomar segundos.
- Historial ordenado por proyecto y por fecha.
- Base para futuras funciones (resúmenes, reportes, integraciones).

**Riesgos / supuestos a validar**
- Que la fricción de registrar sea lo suficientemente baja para crear hábito.
- Que el valor de "ver el historial" justifique el esfuerzo de escribir.
- Alcance: evitar convertirlo en un gestor de tareas completo (no es Jira/Trello).

## 2. Preguntas para definir el MVP

### 2.1 Uso y usuarios
- ¿Quién es el usuario principal: desarrollador individual, freelancer, equipo pequeño, estudiante?
- ¿Es de uso personal (un solo usuario) o colaborativo (varios usuarios por proyecto)?
- ¿Con qué frecuencia se espera registrar logs: diaria, por sesión de trabajo, por entrega?
- ¿Qué pregunta principal debe responder la app? (p. ej. "¿qué hice?", "¿qué se entregó?", "¿cómo va el proyecto?")
- ¿Los logs son privados o se pueden compartir/publicar (p. ej. changelog público)?

### 2.2 Datos
- ¿Qué entidades son imprescindibles? (Usuario, Proyecto, Log)
- ¿Qué campos mínimos tiene un log? (fecha, texto; ¿título?, ¿etiquetas?, ¿estado?, ¿tiempo invertido?)
- ¿El texto admite formato (Markdown) o es texto plano?
- ¿La fecha del log es editable (registrar algo de ayer) o siempre es la de creación?
- ¿Se necesita búsqueda o filtrado (por fecha, proyecto, etiqueta) desde el inicio?
- ¿Requisitos de exportación o respaldo de datos (CSV, Markdown, JSON)?

### 2.3 Integraciones
- ¿Debe conectarse con GitHub/GitLab (commits, PRs, releases) para generar logs automáticamente?
- ¿Notificaciones o recordatorios (email, Slack, Discord)?
- ¿Autenticación con proveedores externos (Google, GitHub OAuth) o solo email/contraseña?
- ¿API pública para crear logs desde scripts/CLI?
- ¿Cuáles de estas son necesarias en el MVP y cuáles pueden esperar?

### 2.4 Forma
- ¿Aplicación web, móvil, de escritorio o CLI?
- ¿Responsive / usable desde el móvil desde el día uno?
- ¿Stack tecnológico preferido (frontend, backend, base de datos)?
- ¿Dónde se despliega (hosting gestionado, servidor propio, local)?
- ¿Nivel de diseño esperado: funcional y simple, o con identidad visual definida?

## 3. Recomendación por defecto de MVP

Si no hay respuestas específicas a las preguntas anteriores, se recomienda el siguiente alcance mínimo:

### 3.1 Autenticación mínima
- Registro e inicio de sesión con email y contraseña.
- Cierre de sesión.
- Cada usuario solo ve y gestiona sus propios datos.

### 3.2 CRUD de proyectos
- Crear, listar, ver, editar y eliminar proyectos.
- Campos: nombre, descripción (opcional), fecha de creación.

### 3.3 CRUD de logs (con fecha y texto)
- Crear, listar, ver, editar y eliminar logs dentro de un proyecto.
- Campos: fecha y texto.
- Listado ordenado por fecha (más reciente primero).

### 3.4 Modelo de datos inicial

| Entidad  | Campos principales                                  |
|----------|-----------------------------------------------------|
| Usuario  | id, email, contraseña (hash), fecha de creación     |
| Proyecto | id, usuario_id, nombre, descripción, fecha de creación |
| Log      | id, proyecto_id, fecha, texto, fecha de creación    |

Relaciones: un Usuario tiene muchos Proyectos; un Proyecto tiene muchos Logs.

### 3.5 Fuera del alcance del MVP
- Colaboración multiusuario y permisos por proyecto.
- Integraciones (GitHub, Slack, etc.) y API pública.
- Etiquetas, búsqueda avanzada, reportes y exportación.
- Aplicación móvil nativa.

## 4. Próximos pasos
1. Responder las preguntas de la sección 2 y ajustar el alcance.
2. Elegir stack tecnológico y estrategia de despliegue.
3. Implementar autenticación mínima.
4. Implementar CRUD de proyectos y CRUD de logs.
5. Probar con usuarios reales y decidir la siguiente iteración.
