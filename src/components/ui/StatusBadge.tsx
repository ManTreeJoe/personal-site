export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent">
        Currently Working On
      </span>
    </div>
  );
}
