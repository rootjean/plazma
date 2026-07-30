export type Highlight = {
  title: string;
  desc: string;
};

export type Product = {
  id: string;
  title: string;
  /** Frase corta de posicionamiento. */
  tagline: string;
  /** A quién está dirigido. */
  audience: string;
  /** Texto corto para la card del slider. */
  desc: string;
  /** Texto largo introductorio en la landing. */
  landing: string;
  /** Bloques de características (sin viñetas). */
  highlights: Highlight[];
  /** Beneficios resumidos en chips. */
  features: string[];
  /** URL de acceso/login para usuarios (opcional). */
  loginUrl?: string;
};

export const products: Product[] = [
  {
    id: "alia",
    title: "Alia",
    tagline: "Tu agente de inteligencia artificial que responde por ti",
    audience: "Para negocios y profesionales de cualquier rubro",
    desc: "Agentes de IA que atienden a tus leads por WhatsApp las 24 horas, con flujos automáticos, ficha de cliente y agenda de citas.",
    landing:
      "Alia le da a cualquier persona, de cualquier rubro, su propio agente de inteligencia artificial que responde por ella cuando está ocupada. Configuras el contexto de tu negocio, conectas WhatsApp y tu agente atiende a cada lead al instante, todo el día, con tu tono y tu información.",
    highlights: [
      {
        title: "Agente de IA a tu medida",
        desc: "Configuras manualmente el contexto de tu negocio y tu agente responde por ti con tu forma de hablar, sin que muevas un dedo.",
      },
      {
        title: "Control lead por lead",
        desc: "Actívalo para todos tus contactos o desactívalo en conversaciones puntuales cuando prefieras responder tú mismo.",
      },
      {
        title: "WhatsApp Business API oficial",
        desc: "Conecta números oficiales verificados y atiende desde el canal donde ya están tus clientes, sin riesgos de bloqueo.",
      },
      {
        title: "Flujos con nodos, estilo n8n",
        desc: "Arma respuestas automáticas arrastrando nodos y botones interactivos. Diseñas tus conversaciones sin escribir una línea de código.",
      },
      {
        title: "Ficha de cliente centralizada",
        desc: "Toda la información de cada contacto ordenada en un solo lugar para dar seguimiento sin perder el hilo.",
      },
      {
        title: "Agenda de citas integrada",
        desc: "Programa y gestiona las citas de tus clientes dentro de la misma conversación, sin salir de la plataforma.",
      },
    ],
    features: [
      "Respuesta automática 24/7",
      "Agente configurable con tu contexto",
      "WhatsApp Business API",
      "Flujos visuales con botones",
      "CRM con ficha de cliente",
      "Agendamiento de citas",
    ],
    loginUrl: "https://alia.plazmaideas.com/login",
  },
  {
    id: "inschool",
    title: "INSCHOOL",
    tagline: "El colegio conectado con las familias",
    audience: "Para colegios e instituciones educativas",
    desc: "Gestión escolar con carnet QR, control de ingreso y salida, y aviso automático a los padres por WhatsApp.",
    landing:
      "INSCHOOL es la plataforma que conecta al colegio con las familias. Registra a cada estudiante, genera su carnet con código QR y mantiene informados a los padres en tiempo real, mientras los docentes gestionan todo el trabajo académico desde un solo lugar.",
    highlights: [
      {
        title: "Registro de estudiantes",
        desc: "Toda la comunidad escolar organizada y siempre actualizada dentro de un mismo sistema.",
      },
      {
        title: "Carnet con código QR",
        desc: "Cada alumno recibe un carnet con un QR único que lo identifica dentro de la institución.",
      },
      {
        title: "Control de ingreso y salida",
        desc: "El portero escanea el QR y queda registrada la hora exacta de entrada y salida de cada estudiante.",
      },
      {
        title: "Aviso automático a los padres",
        desc: "Cada ingreso o salida notifica al apoderado por WhatsApp al instante, para que sepan que su hijo está a salvo.",
      },
      {
        title: "Portal para docentes",
        desc: "Los profesores tienen el control total del estudiante: registran notas, gestionan sus cursos y mucho más.",
      },
      {
        title: "Comunicados a las familias",
        desc: "Envía circulares y mensajes a los padres directamente desde la plataforma, sin cuadernos ni cadenas de mensajes.",
      },
    ],
    features: [
      "Registro de estudiantes",
      "Carnet digital con QR",
      "Control de ingreso y salida",
      "Notificación a padres por WhatsApp",
      "Portal docente con notas",
      "Comunicados a las familias",
    ],
  },
];
