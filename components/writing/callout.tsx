type Props = {
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: "border-blue-500 bg-blue-50",
  warning: "border-yellow-500 bg-yellow-50",
  success: "border-green-500 bg-green-50",
  error: "border-red-500 bg-red-50",
};

export default function Callout({ type = "info", title, children }: Props) {
  return (
    <div className={`border-l-4 p-4 rounded-md ${styles[type]}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  );
}

