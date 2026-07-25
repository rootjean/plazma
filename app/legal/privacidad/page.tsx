import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Plazma Ideas recopila, usa y protege los datos personales de sus usuarios y clientes.",
};

export default function PrivacidadPage() {
  return (
    <article
      className="
        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight
        [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold
        [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed
        [&_p]:text-zinc-600 dark:[&_p]:text-zinc-400
        [&_a]:text-brand-dark dark:[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2
        [&_.lead]:mt-4 [&_.lead]:text-base
      "
    >
      <h1>Política de privacidad</h1>
      <p className="lead">
        En Plazma Ideas valoramos y protegemos la privacidad de nuestros
        usuarios y clientes. Esta política explica qué datos recopilamos, con
        qué finalidad y cuáles son tus derechos, en cumplimiento de la Ley N.º
        29733, Ley de Protección de Datos Personales del Perú, y su reglamento.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales es Plazma Ideas
        (en adelante, «la Empresa»), con domicilio en Huancayo, Perú. Para
        cualquier consulta puedes escribirnos a{" "}
        <a href="mailto:contacto@plazmaideas.com">contacto@plazmaideas.com</a>.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <p>
        Recopilamos los datos que nos proporcionas voluntariamente al solicitar
        una demo, contactarnos o utilizar nuestras plataformas: nombre, empresa,
        correo electrónico, número de teléfono y la información que decidas
        compartir en tus mensajes. También podemos recopilar datos técnicos de
        navegación con fines estadísticos.
      </p>

      <h2>3. Finalidad del tratamiento</h2>
      <p>
        Usamos tus datos para atender tus solicitudes, coordinar demostraciones,
        brindarte soporte, mejorar nuestros productos y, si nos das tu
        consentimiento, enviarte información comercial relevante. No vendemos ni
        cedemos tus datos a terceros con fines publicitarios.
      </p>

      <h2>4. Conservación</h2>
      <p>
        Conservamos tus datos únicamente durante el tiempo necesario para
        cumplir las finalidades descritas y las obligaciones legales aplicables.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, cancelación y
        oposición (derechos ARCO) escribiéndonos a{" "}
        <a href="mailto:contacto@plazmaideas.com">contacto@plazmaideas.com</a>.
        Atenderemos tu solicitud en los plazos que establece la normativa
        vigente.
      </p>

      <h2>6. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus
        datos frente a accesos no autorizados, pérdida o alteración.
      </p>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios legales o
        operativos. Publicaremos siempre la versión vigente en esta página.
      </p>

      <p className="mt-8 text-xs">Última actualización: julio de 2026.</p>
    </article>
  );
}
