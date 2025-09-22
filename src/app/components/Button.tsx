"use client";

import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-[20px] bg-primary text-text hover:text-backgroundEdge hover:bg-lightAccent transition shadow-[0_0_10px_rgba(248,76,161,0.3)] hover:shadow-[0_0_20px_rgba(255,168,211,0.5)] text-sm font-medium";

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
}
