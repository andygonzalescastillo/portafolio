import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function SectionHeader({ icon: Icon, title, children, className }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? "mb-8"}`}>
      <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
        <Icon className="size-5 text-indigo-500" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-foreground section-heading-line">{title}</h2>
      {children}
    </div>
  );
}
