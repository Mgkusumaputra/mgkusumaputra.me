import { cn } from "@/lib/utils";

type Props = {
  color?:
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red";
  children: React.ReactNode;
};

const backgroundColor: Record<Exclude<Props["color"], undefined>, string> = {
  default: "bg-transparent",
  gray: "bg-notion-gray-surface border-primary",
  brown: "bg-notion-brown-surface border-primary",
  orange: "bg-notion-orange-surface border-primary",
  yellow: "bg-notion-yellow-surface border-primary",
  green: "bg-notion-green-surface border-primary",
  blue: "bg-notion-blue-surface border-primary",
  purple: "bg-notion-purple-surface border-primary",
  pink: "bg-notion-pink-surface border-primary",
  red: "bg-notion-red-surface border-primary",
};

export default function Quote({ color = "default", children }: Props) {
  const isPreset = color in backgroundColor;

  return (
    <blockquote
      className={cn(
        "border-l-4 border-foreground",
        isPreset && backgroundColor[color as keyof typeof backgroundColor]
      )}
    >
      <div className="px-3.5">{children}</div>
    </blockquote>
  );
}

