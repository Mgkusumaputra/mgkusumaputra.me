export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-md border bg-zinc-50 p-4 text-sm text-zinc-600">
      {children}
    </aside>
  );
}

