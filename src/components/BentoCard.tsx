import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "n8n" | "azure";
}

export default function BentoCard({ children, className = "", glowColor = "azure" }: BentoCardProps) {
  const glowClass = glowColor === "n8n" 
    ? "hover:border-n8n/50 shadow-[0_0_15px_rgba(255,108,55,0)] hover:shadow-[0_0_20px_rgba(255,108,55,0.15)]" 
    : "hover:border-azure/50 shadow-[0_0_15px_rgba(0,163,255,0)] hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]";

  return (
    <div className={`glass rounded-2xl p-6 transition-all duration-300 ${glowClass} ${className}`}>
      {children}
    </div>
  );
}
