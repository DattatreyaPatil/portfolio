"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Command Center" },
    { href: "/projects", label: "The Agent Lab" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-center">
      <div className="glass px-6 py-3 rounded-full flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-3 py-1 text-sm font-medium transition-colors"
          >
            <span
              className={`relative z-10 ${
                pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </span>
            {pathname === link.href && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-white/10 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
