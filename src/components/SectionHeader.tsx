type Props = { eyebrow: string; title: string; description?: string };

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14 reveal">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </div>
  );
}
