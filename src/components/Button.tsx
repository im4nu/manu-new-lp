import Link from "next/link";

interface LinkProps {
  linkRef: string;
  children: React.ReactNode;
}

export default function LinkDemo({ children, linkRef }: LinkProps) {
  return (
    <a
      href={linkRef}
      className="flex flex-row items-center justify-center gap-3 rounded-lg link-gradient text-shadow max-w-xs py-3 w-4/5"
    >
      {children}
    </a>
  );
}
