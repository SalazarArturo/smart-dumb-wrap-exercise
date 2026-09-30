import { Injectable } from '@angular/core';

export type TaskState = 'completada' | 'pendiente';

export interface TaskStructure {
  id: number;
  name: string;
  description: string;
  status: TaskState;
}

@Injectable()
export class TaskService {
  private tasks: TaskStructure[] = [
    {
      id: 1,
      name: 'Configurar entorno de desarrollo',
      description: 'Instalar Node.js, Git y el editor de código en la nueva máquina.',
      status: 'completada'
    },
    {
      id: 2,
      name: 'Diseñar la base de datos',
      description: 'Crear el diagrama entidad-relación para el módulo de usuarios y autenticación.',
      status: 'completada'
    },
    {
      id: 3,
      name: 'Implementar autenticación JWT',
      description: 'Añadir rutas de login y registro con generación y validación de tokens.',
      status: 'pendiente'
    },
    {
      id: 4,
      name: 'Crear componente de Navbar',
      description: 'Desarrollar la barra de navegación responsive usando Tailwind CSS.',
      status: 'pendiente'
    },
    {
      id: 5,
      name: 'Escribir pruebas unitarias',
      description: 'Cubrir los servicios principales con Jest y alcanzar un 80% de cobertura.',
      status: 'pendiente'
    },
    {
      id: 6,
      name: 'Configurar Docker',
      description: 'Crear el archivo Dockerfile y docker-compose para el entorno local.',
      status: 'pendiente'
    },
    {
      id: 7,
      name: 'Optimizar consultas SQL',
      description: 'Revisar las consultas lentas en el reporte de ventas y añadir índices.',
      status: 'pendiente'
    },
    {
      id: 8,
      name: 'Actualizar dependencias',
      description: 'Subir las versiones de las librerías de React y dependencias de seguridad.',
      status: 'completada'
    },
    {
      id: 9,
      name: 'Diseñar interfaz de perfil',
      description: 'Crear wireframes en Figma para la vista de configuración de usuario.',
      status: 'completada'
    },
    {
      id: 10,
      name: 'Implementar modo oscuro',
      description: 'Añadir soporte para temas claro y oscuro utilizando variables CSS.',
      status: 'pendiente'
    },
    {
      id: 11,
      name: 'Configurar CI/CD',
      description: 'Crear pipeline en GitHub Actions para despliegue automático a staging.',
      status: 'pendiente'
    },
    {
      id: 12,
      name: 'Documentar API con Swagger',
      description: 'Añadir anotaciones y descripciones a los endpoints del servidor.',
      status: 'pendiente'
    },
    {
      id: 13,
      name: 'Auditoría de seguridad',
      description: 'Revisar vulnerabilidades con npm audit y corregir paquetes afectados.',
      status: 'completada'
    },
    {
      id: 14,
      name: 'Crear pasarela de pagos',
      description: 'Integrar la API de Stripe para procesar suscripciones mensuales.',
      status: 'pendiente'
    },
    {
      id: 15,
      name: 'Optimizar imágenes',
      description: 'Comprimir y convertir los recursos gráficos estáticos al formato WebP.',
      status: 'pendiente'
    },
    {
      id: 16,
      name: 'Configurar dominio y SSL',
      description: 'Apuntar el dominio del cliente al servidor y generar certificados Let\'s Encrypt.',
      status: 'completada'
    },
    {
      id: 17,
      name: 'Desarrollar footer',
      description: 'Construir el pie de página con enlaces a redes sociales y políticas de privacidad.',
      status: 'pendiente'
    },
    {
      id: 18,
      name: 'Pruebas de estrés',
      description: 'Simular tráfico pesado usando Artillery para medir la resistencia del servidor.',
      status: 'pendiente'
    },
    {
      id: 19,
      name: 'Limpiar código obsoleto',
      description: 'Eliminar funciones y archivos temporales que ya no se utilizan en producción.',
      status: 'completada'
    },
    {
      id: 20,
      name: 'Implementar paginación',
      description: 'Añadir paginación en el listado de productos del panel de administración.',
      status: 'pendiente'
    },
    {
      id: 21,
      name: 'Crear formulario de contacto',
      description: 'Añadir validaciones con Formik y Yup para el envío de correos.',
      status: 'pendiente'
    },
    {
      id: 22,
      name: 'Configurar servidor de correo',
      description: 'Conectar SendGrid para el envío de notificaciones automáticas.',
      status: 'completada'
    },
    {
      id: 23,
      name: 'Diseñar landing page',
      description: 'Maquetar la página de presentación para el lanzamiento del nuevo producto.',
      status: 'completada'
    },
    {
      id: 24,
      name: 'Implementar búsqueda avanzada',
      description: 'Añadir filtros por categoría, precio y fecha en el catálogo.',
      status: 'pendiente'
    },
    {
      id: 25,
      name: 'Revisar logs de errores',
      description: 'Analizar los registros de Sentry para identificar fallos reportados por usuarios.',
      status: 'pendiente'
    },
    {
      id: 26,
      name: 'Migrar base de datos',
      description: 'Pasar los datos de desarrollo a la instancia principal en AWS RDS.',
      status: 'pendiente'
    },
    {
      id: 27,
      name: 'Crear componente de Modal',
      description: 'Desarrollar una ventana emergente reutilizable y accesible con ARIA.',
      status: 'completada'
    },
    {
      id: 28,
      name: 'Redactar políticas de uso',
      description: 'Escribir los términos y condiciones junto con el aviso de privacidad.',
      status: 'pendiente'
    },
    {
      id: 29,
      name: 'Configurar Webhooks',
      description: 'Escuchar eventos externos para sincronizar estados de pedidos.',
      status: 'pendiente'
    },
    {
      id: 30,
      name: 'Mejorar accesibilidad (a11y)',
      description: 'Revisar contrastes de color y etiquetas en formularios para lectores de pantalla.',
      status: 'pendiente'
    },
    {
      id: 31,
      name: 'Crear sistema de roles',
      description: 'Definir permisos por niveles (Admin, Editor, Usuario final).',
      status: 'completada'
    },
    {
      id: 32,
      name: 'Implementar caché con Redis',
      description: 'Almacenar las consultas frecuentes para reducir la carga en la base de datos.',
      status: 'pendiente'
    },
    {
      id: 33,
      name: 'Diseñar iconos personalizados',
      description: 'Crear un set de iconos vectoriales coherentes con la identidad visual.',
      status: 'completada'
    },
    {
      id: 34,
      name: 'Configurar Sentry',
      description: 'Instalar el SDK de monitoreo de errores en frontend y backend.',
      status: 'completada'
    },
    {
      id: 35,
      name: 'Realizar pruebas E2E',
      description: 'Automatizar flujos críticos de usuario utilizando Cypress.',
      status: 'pendiente'
    },
    {
      id: 36,
      name: 'Optimizar SEO técnico',
      description: 'Añadir metaetiquetas OpenGraph y sitemap.xml para motores de búsqueda.',
      status: 'pendiente'
    },
    {
      id: 37,
      name: 'Crear reporte de métricas',
      description: 'Desarrollar un panel interno para visualizar estadísticas de uso diario.',
      status: 'pendiente'
    },
    {
      id: 38,
      name: 'Actualizar manual de usuario',
      description: 'Redactar la guía paso a paso para los nuevos administradores del sistema.',
      status: 'pendiente'
    },
    {
      id: 39,
      name: 'Configurar CORS',
      description: 'Restringir el acceso a la API únicamente desde los dominios autorizados.',
      status: 'completada'
    },
    {
      id: 40,
      name: 'Implementar exportación a PDF',
      description: 'Permitir a los usuarios descargar sus facturas en formato PDF.',
      status: 'pendiente'
    },
    {
      id: 41,
      name: 'Revisar cobertura de código',
      description: 'Identificar funciones críticas sin pruebas automatizadas.',
      status: 'pendiente'
    },
    {
      id: 42,
      name: 'Configurar notificaciones Push',
      description: 'Añadir soporte para avisos en tiempo real mediante Firebase Cloud Messaging.',
      status: 'pendiente'
    },
    {
      id: 43,
      name: 'Diseñar sistema de alertas',
      description: 'Crear notificaciones visuales tipo toast para errores y confirmaciones.',
      status: 'completada'
    },
    {
      id: 44,
      name: 'Optimizar bundle size',
      description: 'Analizar el peso de los paquetes con Webpack Bundle Analyzer y reducir tamaño.',
      status: 'pendiente'
    },
    {
      id: 45,
      name: 'Configurar backups automáticos',
      description: 'Programar copias de seguridad diarias de la base de datos principal.',
      status: 'completada'
    },
    {
      id: 46,
      name: 'Implementar recuperación de contraseña',
      description: 'Crear flujo de envío de enlace por correo para restablecer claves.',
      status: 'completada'
    },
    {
      id: 47,
      name: 'Crear componente de tabla',
      description: 'Desarrollar una tabla con ordenamiento de columnas y selección múltiple.',
      status: 'pendiente'
    },
    {
      id: 48,
      name: 'Revisar compatibilidad de navegadores',
      description: 'Probar la aplicación en Safari, Firefox, Chrome y Edge.',
      status: 'pendiente'
    },
    {
      id: 49,
      name: 'Establecer guía de estilos',
      description: 'Documentar reglas de formato de código con Prettier y ESLint.',
      status: 'completada'
    },
    {
      id: 50,
      name: 'Revisión final de proyecto',
      description: 'Realizar una última ronda de pruebas generales antes de la entrega final.',
      status: 'pendiente'
    }
  ];

  getAllTasks(): TaskStructure[] {
    return this.tasks;
  }
}