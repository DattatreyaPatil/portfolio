import CanvasBackground from "@/components/CanvasBackground";
import BentoCard from "@/components/BentoCard";
import { Server, BrainCircuit, Smartphone, Database, Code, Cloud, Mic, FileText, BarChart3, Video, Layers } from "lucide-react";

export default function Projects() {
  return (
    <>
      <CanvasBackground />
      
      <div className="pt-24 pb-16 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-n8n to-azure">
            The Agent Lab
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Deep dives into Agentic Orchestration and AI Automation.
          </p>
        </div>

        {/* Deep Dive: DressCue */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center"><Smartphone className="mr-3 text-white" /> DressCue (AI Wardrobe Planner)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard glowColor="azure">
              <div className="flex items-center space-x-4 mb-4">
                <Layers className="text-azure" size={28} />
                <h3 className="text-xl font-semibold">3-Agent Orchestration</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Architected a cross-platform mobile app using computer vision to catalogue wardrobes. Built on a multi-agent layer: 
                <span className="text-white block mt-2">- Wardrobe Cataloguing Agent (Claude Vision API)</span>
                <span className="text-white block">- Outfit Recommendation Agent (OpenWeatherMap + Rules)</span>
                <span className="text-white block">- Shopping Gap Analysis Agent</span>
              </p>
            </BentoCard>
            <BentoCard glowColor="n8n">
              <div className="flex items-center space-x-4 mb-4">
                <BrainCircuit className="text-n8n" size={28} />
                <h3 className="text-xl font-semibold">Multi-Model Strategy</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Utilized Claude Opus for high-level agent planning and orchestration, Claude Sonnet for implementation, and lighter models for retrieval. This approach significantly optimized cost and latency at consumer scale. Integrated with Langfuse for prompt evaluation.
              </p>
            </BentoCard>
          </div>
        </div>

        {/* Deep Dive: proAlpha Internal Tools */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center"><Database className="mr-3 text-white" /> proAlpha AI Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard glowColor="n8n">
              <div className="flex items-center space-x-4 mb-4">
                <Code className="text-n8n" size={28} />
                <h3 className="text-xl font-semibold">Autonomous Test Generation</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Designed a LangGraph agent that autonomously generates unit tests, executes them, analyzes failures, and self-corrects up to 3 cycles.
              </p>
              <div className="bg-white/5 border border-white/10 rounded p-3 font-mono text-sm text-gray-300">
                &gt; Claude Opus 4.6 (Reasoning)<br/>
                &gt; Claude Sonnet + Kimi K2 (Code Gen)<br/>
                &gt; Saves 3-7 hours per feature cycle
              </div>
            </BentoCard>
            <BentoCard glowColor="azure">
              <div className="flex items-center space-x-4 mb-4">
                <BrainCircuit className="text-azure" size={28} />
                <h3 className="text-xl font-semibold">RAG Chatbot for Docs</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Built a production RAG chatbot for Reporting Studio using Claude Sonnet and Pinecone, cutting API integration support queries by 30-40%.
              </p>
            </BentoCard>
          </div>
        </div>

        {/* Independent Projects & Prototypes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 flex items-center"><Server className="mr-3 text-white" /> Independent Projects & Prototypes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* AI Voice Agents */}
            <BentoCard glowColor="n8n" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3 text-n8n">
                  <Mic size={24} />
                  <h3 className="text-lg font-semibold text-white">AI Voice Agents (VAPI)</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Built a modular n8n workflow powering a VAPI AI voice agent. Handles appointment booking, rescheduling, and cancellation directly in Google Calendar via natural language conversation.
                </p>
              </div>
            </BentoCard>

            {/* MCP Server */}
            <BentoCard glowColor="azure" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3 text-azure">
                  <Server size={24} />
                  <h3 className="text-lg font-semibold text-white">MCP Server Prototype</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Model Context Protocol (MCP) server exposing Reporting Studio&apos;s capabilities (report querying, chart generation) to Claude Desktop, enabling natural language interaction with enterprise data.
                </p>
              </div>
            </BentoCard>

            {/* Social Media Analyzer */}
            <BentoCard glowColor="n8n" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3 text-n8n">
                  <Video size={24} />
                  <h3 className="text-lg font-semibold text-white">Social Media Analyser</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Python web app that scrapes Instagram reels, sends video to Gemini 2 Flash for multimodal transcription, and indexes content into a searchable knowledge base via Supabase.
                </p>
              </div>
            </BentoCard>

            {/* n8n Bill Segregator */}
            <BentoCard glowColor="azure" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-3 text-azure">
                  <FileText size={24} />
                  <h3 className="text-lg font-semibold text-white">n8n Bill Segregator</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  End-to-end n8n workflow that ingests, parses, and categorises household bills. Generates monthly Telegram summaries and auto-archives to Google Drive.
                </p>
              </div>
            </BentoCard>

            {/* Handwriting to Chart */}
            <BentoCard glowColor="n8n" className="flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center space-x-3 mb-3 text-n8n">
                  <BarChart3 size={24} />
                  <h3 className="text-lg font-semibold text-white">Handwriting-to-Chart AI</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  OCR and multimodal AI pipeline converting handwritten business data from images to structured CSV, automatically generating charts via the Reporting Studio pipeline.
                </p>
              </div>
            </BentoCard>

          </div>
        </div>

        {/* The Stack Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">The Architecture Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Server, name: "n8n Automation", type: "Orchestration" },
              { icon: BrainCircuit, name: "LangGraph", type: "Agents" },
              { icon: Cloud, name: "Azure DevOps", type: "CI/CD & Cloud" },
              { icon: Code, name: "TypeScript / C#", type: "Languages" },
              { icon: Database, name: "Pinecone / Supabase", type: "Storage" },
              { icon: Server, name: "MCP Protocol", type: "Integration" },
              { icon: Smartphone, name: "React Native", type: "Frontend" },
              { icon: BrainCircuit, name: "Claude / GPT-4o", type: "LLMs" },
            ].map((tool, idx) => (
              <BentoCard key={idx} className="flex flex-col items-center justify-center p-6 text-center hover:-translate-y-1 transition-transform" glowColor={idx % 2 === 0 ? "n8n" : "azure"}>
                <tool.icon size={32} className={`mb-3 ${idx % 2 === 0 ? "text-n8n" : "text-azure"}`} />
                <h4 className="font-bold">{tool.name}</h4>
                <span className="text-xs text-gray-500 font-mono mt-1">{tool.type}</span>
              </BentoCard>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
