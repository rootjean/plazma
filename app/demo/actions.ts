"use server";

export type DemoFormState = {
  success: boolean;
  message: string;
};

export async function registrarDemo(
  _prevState: DemoFormState,
  formData: FormData
): Promise<DemoFormState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const empresa = String(formData.get("empresa") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const solucion = String(formData.get("solucion") ?? "").trim();

  if (!nombre || !empresa || !email || !solucion) {
    return {
      success: false,
      message: "Por favor completa todos los campos obligatorios.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Ingresa un correo válido." };
  }

  // TODO: guardar en base de datos o enviar por correo cuando haya backend.
  console.log("Nueva solicitud de demo:", {
    nombre,
    empresa,
    email,
    telefono: formData.get("telefono"),
    solucion,
    mensaje: formData.get("mensaje"),
    fecha: new Date().toISOString(),
  });

  return {
    success: true,
    message: `¡Gracias, ${nombre}! Recibimos tu solicitud y te contactaremos pronto para coordinar la demo.`,
  };
}
