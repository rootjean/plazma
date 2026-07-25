import Reveal from "../components/reveal";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <Reveal>{children}</Reveal>
    </div>
  );
}
