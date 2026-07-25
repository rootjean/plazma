import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de los servicios y plataformas SaaS de Plazma Ideas.",
};

export default function TerminosPage() {
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
      <h1>Términos y condiciones</h1>
      <p className="lead">
        Los presentes términos y condiciones regulan el acceso y uso del sitio
        web y de las plataformas SaaS ofrecidas por Plazma Ideas. Al utilizar
        nuestros servicios aceptas estos términos en su totalidad.
      </p>

      <h2>1. Objeto</h2>
      <p>
        Plazma Ideas ofrece aplicaciones de software como servicio (SaaS)
        dirigidas a empresas, profesionales e instituciones. El alcance
        específico de cada servicio se define en el acuerdo comercial
        correspondiente.
      </p>

      <h2>2. Uso adecuado</h2>
      <p>
        El usuario se compromete a utilizar las plataformas conforme a la ley,
        la moral y el orden público, y a no emplearlas para fines ilícitos o que
        puedan dañar a terceros o a la Empresa.
      </p>

      <h2>3. Cuentas y accesos</h2>
      <p>
        El cliente es responsable de mantener la confidencialidad de sus
        credenciales de acceso y de toda actividad realizada desde su cuenta.
      </p>

      <h2>4. Planes y pagos</h2>
      <p>
        Las condiciones económicas, la periodicidad de facturación y la duración
        del servicio se establecen en la propuesta o contrato aceptado por el
        cliente. El incumplimiento de pago puede derivar en la suspensión del
        servicio.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        El software, la marca, los diseños y demás contenidos son propiedad de
        Plazma Ideas o de sus licenciantes. El servicio se otorga bajo licencia
        de uso y no implica cesión de derechos de propiedad intelectual.
      </p>

      <h2>6. Disponibilidad y responsabilidad</h2>
      <p>
        Trabajamos para ofrecer un servicio continuo y confiable, pero no
        garantizamos disponibilidad ininterrumpida. Plazma Ideas no será
        responsable por daños indirectos derivados del uso o la imposibilidad de
        uso de las plataformas, dentro de los límites que permite la ley.
      </p>

      <h2>7. Protección de datos</h2>
      <p>
        El tratamiento de datos personales se rige por nuestra{" "}
        <a href="/legal/privacidad">Política de privacidad</a>.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Podemos actualizar estos términos en cualquier momento. La versión
        vigente será siempre la publicada en esta página.
      </p>

      <h2>9. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú.
        Cualquier controversia se someterá a los tribunales competentes.
      </p>

      <p className="mt-8 text-xs">Última actualización: julio de 2026.</p>
    </article>
  );
}
