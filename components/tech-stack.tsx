import type React from "react"
import { Code2, Database, Globe, FileCode, Server, Palette, GitBranch, Cloud, Container, Zap } from "lucide-react"

interface TechItem {
  name: string
  icon: React.ReactNode
}

const techStack: TechItem[] = [
  { name: "JavaScript", icon: <FileCode className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "Java", icon: <FileCode className="w-5 h-5" /> },
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "React.js", icon: <Code2 className="w-5 h-5" /> },
  { name: "Express.js", icon: <Server className="w-5 h-5" /> },
  { name: "Node.js", icon: <Server className="w-5 h-5" /> },
  { name: "Vue.js", icon: <Code2 className="w-5 h-5" /> },
  { name: "TailwindCSS", icon: <Palette className="w-5 h-5" /> },
  { name: "HTML", icon: <Globe className="w-5 h-5" /> },
  { name: "CSS", icon: <Palette className="w-5 h-5" /> },
  { name: "SQL", icon: <Database className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "Docker", icon: <Container className="w-5 h-5" /> },
  { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Framer Motion", icon: <Zap className="w-5 h-5" /> },
  { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
  { name: "Figma", icon: <Palette className="w-5 h-5" /> },
  { name: "GSAP", icon: <Zap className="w-5 h-5" /> },
]

export default function TechStack() {
  return (
    <section className="py-10 mx-auto md:w-full w-screen md:px-0 px-3">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Tech-Stack <span className="text-muted-foreground">#</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-0 px-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer gap-3 p-3 border transition-all duration-200 hover:scale-105 hover:shadow-sm bg-background"
          >
            <div className="text-muted-foreground">{tech.icon}</div>
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
