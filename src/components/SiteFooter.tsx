import { Mail } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 mt-20 bg-[#0D1117]/80 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p className="text-white font-medium">Designed & built by Dattatreya Patil · 2025</p>
          <p className="text-gray-400 text-sm mt-1">Made with love in Bonn 🇩🇪</p>
        </div>

        <div className="flex items-center space-x-6 text-sm font-mono">
          <Link href="mailto:datts.ptl01@gmail.com" className="text-gray-400 hover:text-n8n transition-colors flex items-center">
            <Mail size={18} className="mr-2" /> Email
          </Link>
          <Link href="https://linkedin.com/in/dattatreya-patil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-azure transition-colors">
            LinkedIn
          </Link>
        </div>

      </div>
    </footer>
  );
}
