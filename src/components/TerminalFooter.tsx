"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, X, MessageSquare } from "lucide-react";

type Message = { role: "user" | "system"; content: string };

const systemResponses: Record<string, string> = {
  "help": "Available queries: 'experience', 'projects', 'rag', 'langgraph', 'stack', 'clear'",
  "experience": "AI Automation Engineer with 6+ years of software development experience, specializing in n8n workflow automation, agentic AI systems, RAG pipelines, and multi-model LLM orchestration.",
  "projects": "Key projects: DressCue (AI Wardrobe Planner), RAG Documentation Chatbot (proAlpha), Autonomous Unit Test Generation Agent, n8n Automation Workflows.",
  "rag": "Built a production RAG chatbot for Reporting Studio (proAlpha). Reduced API integration, library configuration, and support queries by 30-40%. Stack: Claude Sonnet, Amazon Nova Lite, Pinecone.",
  "langgraph": "Designed a LangGraph agent that autonomously generates unit tests, saving 3-7 hours of manual effort per feature cycle. Loops up to 3 cycles until tests pass.",
  "stack": "Primary Stack: n8n, LangGraph, RAG, TypeScript, C#, Python, React Native, Azure, Pinecone. LLMs: Claude, OpenAI, Gemini.",
};

export default function TerminalFooter() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "Agentic Shell v1.0. Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.trim().toLowerCase();
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    if (userQuery === "clear") {
      setMessages([{ role: "system", content: "Terminal cleared." }]);
      return;
    }

    setTimeout(() => {
      const response =
        Object.entries(systemResponses).find(([key]) => userQuery.includes(key))?.[1] ||
        "Command not recognized. Type 'help' for available queries.";
      
      setMessages((prev) => [...prev, { role: "system", content: response }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-80 h-[400px] mb-4 bg-[#0D1117]/95 backdrop-blur-md border border-n8n/30 rounded-xl shadow-[0_0_20px_rgba(255,108,55,0.15)] flex flex-col font-mono text-sm overflow-hidden">
          {/* Header */}
          <div className="h-12 bg-n8n/10 px-4 flex items-center justify-between border-b border-n8n/20">
            <div className="flex items-center space-x-2 text-n8n">
              <Terminal size={16} />
              <span className="font-semibold tracking-wider">mcp_server</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-hidden flex flex-col p-4">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-thin scrollbar-thumb-n8n/20">
              {messages.map((msg, idx) => (
                <div key={idx} className={`${msg.role === "user" ? "text-white" : "text-azure"}`}>
                  <span className="opacity-50 mr-2 select-none">{msg.role === "user" ? ">" : "$"}</span>
                  <span className="break-words">{msg.content}</span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-t border-white/10 pt-3 mt-auto">
              <span className="text-n8n select-none">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-600 min-w-0"
                placeholder="Query experience..."
                autoFocus
              />
              <button type="submit" className="text-n8n hover:text-white transition-colors flex-shrink-0">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-[#0D1117] border border-n8n/50 shadow-[0_0_15px_rgba(255,108,55,0.3)] flex items-center justify-center text-n8n hover:bg-n8n/10 hover:scale-105 transition-all duration-300 ${isOpen ? "hidden" : "flex"}`}
        aria-label="Toggle terminal"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
