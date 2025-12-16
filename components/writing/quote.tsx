type Props = {
  author?: string;
  children: React.ReactNode;
};

export default function Quote({ author, children }: Props) {
  return (
    <blockquote className="border-l-4 pl-4 italic text-zinc-700">
      <p>{children}</p>
      {author && (
        <footer className="mt-2 text-sm font-medium">— {author}</footer>
      )}
    </blockquote>
  );
}

