# Curso-platzi-Devin-y-app-para-seguimiento-de-tareas

Repositorio del curso de Platzi sobre Devin, donde se desarrolla **ShipLog**: una aplicación para registrar el progreso de proyectos mediante logs con fecha y texto.

## ShipLog

ShipLog permite dejar constancia breve de cada avance en un proyecto para tener un historial claro y consultable ("¿qué hice esta semana?", "¿cuándo se terminó X?").

- **Registro rápido:** escribir un log debe tomar segundos.
- **Historial ordenado** por proyecto y por fecha.
- **Base para crecer:** resúmenes, reportes e integraciones en futuras iteraciones.

## Alcance del MVP

- **Registro rápido** desde la pantalla de inicio.
- **Línea de tiempo semanal** con los logs de todos los proyectos.
- **Proyectos y logs** (crear, editar, archivar/eliminar).
- **Autenticación** con email y contraseña.
- **Exportación** a Markdown y JSON.

## Planificación

Las decisiones del MVP, el modelo de datos, el stack propuesto, los criterios de éxito y la hoja de ruta están en [PLAN.md](PLAN.md).

## Desarrollo local

Requisitos: Node.js 22 y npm.

```bash
npm install            # instala dependencias y genera Prisma Client
cp .env.example .env   # completa DATABASE_URL y DIRECT_URL con los datos de Supabase
npm run dev            # http://localhost:3000
```

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | ESLint |
| `npm run typecheck` | Chequeo de tipos con TypeScript |
| `npm test` | Tests con Vitest |
| `npm run build` | Build de producción |

El CI (`.github/workflows/ci.yml`) corre lint, typecheck, tests y build en cada PR.

### Despliegue en Vercel

1. En [vercel.com/new](https://vercel.com/new), importa este repositorio (Vercel detecta Next.js automáticamente).
2. En *Settings → Environment Variables*, agrega `DATABASE_URL` y `DIRECT_URL`.
3. Cada push a `main` despliega a producción y cada PR obtiene una URL de preview.
