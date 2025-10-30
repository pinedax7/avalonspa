"use client";
import { useState } from "react";
const items = [
  { href: "#hero", label: "Home" },
  { href: "#creator", label: "Creator Program" },
  { href: "#biomes", label: "Biomes" },
  { href: "#ai", label: "Agentic AI" },
  { href: "#avatar", label: "Avatar" },
  { href: "#connect", label: "Stay Connected" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
        <a href="#hero" className="font-semibold">
          AVALON
        </a>
        <button
          className="ml-auto md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-5 ml-auto ${
            open ? "block" : "hidden"
          } md:block`}
        >
          {items.map((i) => (
            <li key={i.href}>
              <a className="text-sm hover:opacity-80" href={i.href}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
