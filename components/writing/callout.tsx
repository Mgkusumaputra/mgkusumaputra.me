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
  icon: string;
  children: React.ReactNode;
};

const backgroundColor: Record<Exclude<Props["color"], undefined>, string> = {
  default: "bg-transparent border-2 border-foreground",
  gray: "bg-notion-gray-surface",
  brown: "bg-notion-brown-surface",
  orange: "bg-notion-orange-surface",
  yellow: "bg-notion-yellow-surface",
  green: "bg-notion-green-surface",
  blue: "bg-notion-blue-surface",
  purple: "bg-notion-purple-surface",
  pink: "bg-notion-pink-surface",
  red: "bg-notion-red-surface",
};

export default function Callout({ color = "default", icon, children }: Props) {
  return (
    <div
      className={cn(
        "my-1 flex items-start pl-3 py-3 pr-5 rounded-md",
        backgroundColor[color]
      )}
    >
      <span className="text-base ">{icon}</span>
      <div className="ml-2 mt-1">{children}</div>
    </div>
  );
}

