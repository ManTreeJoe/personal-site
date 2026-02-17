import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Nathan Bupte. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
