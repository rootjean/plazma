export type Product = {
  id: string;
  title: string;
  desc: string;
  /** Texto largo mostrado en la landing de la card. */
  landing: string;
  /** Beneficios destacados en la landing. */
  features: string[];
};

export const products: Product[] = [
  {
    id: "gestion-empresarial",
    title: "Gestión empresarial",
    desc: "ERP en la nube: ventas, inventario y facturación en un solo panel.",
    landing:
      "Centraliza toda la operación de tu empresa en una sola plataforma en la nube. Controla ventas, compras, inventario y facturación electrónica en tiempo real, desde cualquier dispositivo.",
    features: [
      "Facturación electrónica integrada",
      "Control de inventario en tiempo real",
      "Reportes de ventas y compras",
      "Multi-sucursal y multi-usuario",
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización de procesos",
    desc: "Flujos digitales que eliminan tareas manuales y reducen errores.",
    landing:
      "Digitaliza los procesos repetitivos de tu negocio: aprobaciones, notificaciones, registros y seguimientos que hoy se hacen a mano pasan a ejecutarse solos, sin errores y con trazabilidad completa.",
    features: [
      "Flujos de aprobación digitales",
      "Notificaciones automáticas",
      "Integración entre tus sistemas",
      "Trazabilidad de cada proceso",
    ],
  },
  {
    id: "analitica",
    title: "Analítica de datos",
    desc: "Dashboards e indicadores en tiempo real para decidir con datos.",
    landing:
      "Convierte los datos dispersos de tu empresa en dashboards claros y accionables. Indicadores en vivo, alertas inteligentes y reportes automáticos para decidir con información confiable.",
    features: [
      "Dashboards personalizados",
      "Indicadores (KPIs) en tiempo real",
      "Alertas inteligentes",
      "Reportes automáticos programados",
    ],
  },
  {
    id: "crm",
    title: "CRM y ventas",
    desc: "Clientes, embudos de venta y campañas en una sola plataforma.",
    landing:
      "Organiza tu fuerza de ventas: registra cada cliente, haz seguimiento de oportunidades en embudos visuales y lanza campañas que convierten. Nunca más pierdas una venta por falta de seguimiento.",
    features: [
      "Embudos de venta visuales",
      "Historial completo por cliente",
      "Campañas y seguimiento automático",
      "Métricas de conversión",
    ],
  },
  {
    id: "talento",
    title: "Gestión de talento",
    desc: "Asistencia, planillas y desempeño de tu equipo, sin hojas de cálculo.",
    landing:
      "Administra a tu equipo sin hojas de cálculo: control de asistencia, cálculo de planillas y evaluaciones de desempeño en una sola aplicación pensada para el día a día de RR. HH.",
    features: [
      "Control de asistencia digital",
      "Cálculo de planillas",
      "Evaluaciones de desempeño",
      "Portal del colaborador",
    ],
  },
];
