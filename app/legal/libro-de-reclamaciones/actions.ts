"use server";

export type ReclamoState = {
  success: boolean;
  message: string;
  codigo?: string;
};

export async function registrarReclamo(
  _prevState: ReclamoState,
  formData: FormData
): Promise<ReclamoState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const documento = String(formData.get("documento") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const tipo = String(formData.get("tipo") ?? "").trim();
  const detalle = String(formData.get("detalle") ?? "").trim();

  if (!nombre || !documento || !email || !tipo || !detalle) {
    return {
      success: false,
      message: "Por favor completa todos los campos obligatorios.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Ingresa un correo válido." };
  }

  // Código de seguimiento (determinista: fecha en el server action).
  const codigo = `LR-${new Date().getFullYear()}-${String(
    Math.abs(hash(nombre + email + detalle)) % 100000
  ).padStart(5, "0")}`;

  // TODO: persistir en base de datos y notificar por correo cuando haya backend.
  console.log("Nuevo registro en Libro de Reclamaciones:", {
    codigo,
    nombre,
    documento,
    email,
    telefono: formData.get("telefono"),
    tipo,
    producto: formData.get("producto"),
    detalle,
    pedido: formData.get("pedido"),
    fecha: new Date().toISOString(),
  });

  return {
    success: true,
    codigo,
    message: `Tu ${tipo === "queja" ? "queja" : "reclamo"} fue registrado. Te responderemos al correo indicado dentro del plazo de ley (15 días hábiles).`,
  };
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}
