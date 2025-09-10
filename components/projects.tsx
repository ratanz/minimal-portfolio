import { ExternalLink, Github } from "lucide-react"

interface ProjectItem {
  title: string
  date: string
  description: string
  features: string[]
  techStack: string[]
  liveUrl?: string
  codeUrl?: string
}

const projects: ProjectItem[] = [
  {
    title: "Phoenix Fits",
    date: "November 2024",
    description: "A cutting-edge fashion platform where premium streetwear meets interactive design.",
    features: [
      "Built a clothing store using Next.js 14 and TypeScript, featuring server-side rendering, and dynamic store management",
      "Integrated AWS S3 for product images and implemented lazy-loading, improving image fetch efficiency +15% and supporting 10,000+ product listings",
      "Implemented secure user authentication system with NextAuth.js, supporting multiple providers and JWT token management for secure data access",
      "Designed UI animations using GSAP + Framer Motion that lowered user drop-off by 40% on key flows",
      "Built secure auth with NextAuth.js + JWT, and an admin dashboard that cut product update time by 20% through optimized CRUD flows",
      "Reduced page load time by 70% through implementation of image optimization and lazy loading",
    ],
    techStack: ["Next.js", "TypeScript", "NextAuth", "TailwindCSS", "MongoDB", "Framer Motion", "GSAP", "AWS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "LiveDocs",
    date: "August 2024",
    description: "Real-time collaborative document editing platform",
    features: [
      "Developed a cutting-edge, real-time synchronous document editing system, facilitating seamless collaboration",
      "Orchestrated real-time synchronization system using websocket, enabling seamless concurrent modifications across multiple users",
      "Advanced rich-text capabilities implemented with Lexical Editor, delivering an intuitive writing experience",
      "Implemented WebSocket-based real-time sync enabling concurrent editing for 10+ users with presence indicators",
      "Integrated Lexical editor for rich-text features and Clerk for authentication, improving collaboration task completion speed by ~90%",
    ],
    techStack: ["Next.js", "TypeScript", "ShadCN", "TailwindCSS", "Clerk", "Lexical Editor", "WebSocket"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "StudioSize",
    date: "July 2024",
    description:
      "A dynamic, animation-rich showcase platform for creative agencies with modern design principles",
    features: [
      "Made a website for creative agencies, showcasing various kinds of services and work, in an interactive and modern way",
      "Leveraged GSAP for complex, performance-optimized animations and transitions",
      "Implemented responsive design supporting all device sizes with zero UI breaks",
      "Added smooth scrolling and interactive animations using Lenis and Framer Motion, enhancing user engagement",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Lenis", "SwiperJS"],
    liveUrl: "#",
    codeUrl: "#",
  },
]

export default function Projects() {
  return (
    <section className=" py-12 w-full mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Projects <span className="text-muted-foreground font-normal"># (sorted by most recent)</span>
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black/20 p-4 hover:border-border botransition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm border border-zinc-600/40 hover:bg-black hover:text-white font-semibold transition-all duration-200 ease-out"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-zinc-600/40 bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200 ease-out"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-3 leading-8">{project.description}</p>

            <ul className="space-y-3 mb-4">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/60 mt-1 text-xs">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 text-xs bg-muted/60 text-muted-foreground border border-zinc-500/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
