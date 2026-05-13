import CanvasBackground from "@/components/CanvasBackground";
import BentoCard from "@/components/BentoCard";
import { ArrowRight, Bot, Cpu, Network, Zap, User, Mail, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CanvasBackground />
      
      <div className="pt-24 pb-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Dattatreya <span className="text-transparent bg-clip-text bg-gradient-to-r from-n8n to-azure">Patil</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            AI Automation Engineer · Agentic Architect
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Building professional-grade multi-agent systems, RAG pipelines, and automated workflows. 
            Transforming complex business logic into scalable AI solutions.
          </p>
          <div className="pt-4 flex justify-center space-x-4">
            <Link href="mailto:datts.ptl01@gmail.com" className="bg-n8n text-black font-semibold px-6 py-2 rounded-full hover:bg-white transition-colors">
              Hire Me
            </Link>
            <Link href="/projects" className="bg-white/10 text-white font-semibold px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              View Projects
            </Link>
          </div>
        </div>

        {/* Bento Grid: Core & About */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* About Me */}
          <BentoCard className="md:col-span-2 flex flex-col justify-between" glowColor="azure">
            <div className="text-azure mb-4 flex items-center space-x-3">
              <User size={28} />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I am a Software Engineer with 6+ years of experience, specializing in agentic AI systems, RAG pipelines, AI voice agents, and n8n workflow automation. I have a track record of building end-to-end AI solutions independently—from architecture to production. Strong foundation in C#, TypeScript, and Python combined with hands-on experience across the full LLM toolchain.
              <br/><br/>
              German Citizen, open to remote and relocation opportunities.
            </p>
          </BentoCard>

          {/* Contact Me */}
          <BentoCard className="md:col-span-1 flex flex-col justify-between" glowColor="n8n">
            <div className="text-n8n mb-4 flex items-center space-x-3">
              <Mail size={28} />
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:datts.ptl01@gmail.com" className="hover:text-white transition-colors flex items-center">
                  <span className="text-n8n mr-2">›</span> Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/dattatreya-patil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                  <span className="text-n8n mr-2">›</span> LinkedIn
                </a>
              </li>
              <li className="pt-2 text-sm">
                <span className="text-gray-500">Location:</span> Bonn, Germany 🇩🇪
              </li>
            </ul>
          </BentoCard>

          {/* Main KPI 1 */}
          <BentoCard className="md:col-span-2 flex flex-col justify-between" glowColor="n8n">
            <div className="text-n8n mb-4">
              <Bot size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">30-40% Support Reduction</h2>
              <p className="text-gray-400">
                Architected and deployed a production RAG chatbot for Reporting Studio (proAlpha). 
                Significantly cut onboarding time and API integration queries across 7+ OEM teams.
              </p>
            </div>
          </BentoCard>

          {/* Main KPI 2 */}
          <BentoCard className="md:col-span-1 flex flex-col justify-between" glowColor="azure">
            <div className="text-azure mb-4">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">7-Hour Savings</h2>
              <p className="text-gray-400 text-sm">
                Per feature cycle via an Autonomous Unit Test Generation Agent using LangGraph.
              </p>
            </div>
          </BentoCard>

          {/* Call to Action to Projects */}
          <BentoCard className="md:col-span-3 relative overflow-hidden group cursor-pointer" glowColor="n8n">
            <Link href="/projects" className="absolute inset-0 z-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-n8n/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col justify-between h-full relative z-20">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white">
                  <Cpu size={32} />
                </div>
                <div className="bg-n8n/20 text-n8n px-3 py-1 rounded-full text-xs font-mono border border-n8n/30">
                  Enter The Agent Lab
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold flex items-center group-hover:text-n8n transition-colors">
                  View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-400 mt-1">
                  Explore DressCue, Voice Agents, RAG Chatbots, and MCP Server implementations.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Experience & Education Timeline */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-azure to-white">
            Experience & Education
          </h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            {/* Experience Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0D1117] text-azure group-[.is-active]:text-n8n group-[.is-active]:border-n8n shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">Software Developer</h3>
                  <span className="text-sm font-mono text-n8n">Nov 2021 - Present</span>
                </div>
                <div className="text-sm text-azure mb-3">Corporate-Planning GmbH (proAlpha Group) · Bonn</div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Built RAG chatbot, OCR-to-chart AI prototype, MCP server, and autonomous unit test generation agent.</li>
                  <li>Implemented intelligent data recognition algorithms for automated visualization suggestions.</li>
                  <li>Integrated Reporting Studio with Power BI, Qlik Sense, and Corporate Planner.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0D1117] text-azure shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">Software Developer</h3>
                  <span className="text-sm font-mono text-gray-500">Oct 2020 - Oct 2021</span>
                </div>
                <div className="text-sm text-azure mb-3">EULA IT GmbH · Fürth</div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Developed License Crawler Tool for automated OS software compliance tracking.</li>
                  <li>Implemented Azure DevOps CI/CD pipelines.</li>
                  <li>Built web UI and backend services with full unit test coverage.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0D1117] text-azure shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">Master Thesis Researcher</h3>
                  <span className="text-sm font-mono text-gray-500">Mar 2020 - Sep 2020</span>
                </div>
                <div className="text-sm text-azure mb-3">Saint-Gobain Research · Aachen</div>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Developed IoT software for smart glasses (Industry 4.0) using MQTT.</li>
                  <li>Enabled live product tracking and dynamic sensor updates.</li>
                </ul>
              </div>
            </div>

            {/* Education Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0D1117] text-azure shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">M.Eng. Electrical Engineering & IT</h3>
                  <span className="text-sm font-mono text-gray-500">2017 - 2020</span>
                </div>
                <div className="text-sm text-azure mb-3">Darmstadt University of Applied Sciences</div>
                <p className="text-gray-400 text-sm">Advanced Robotics · Autonomous Systems · Distributed Systems · Android Development</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
