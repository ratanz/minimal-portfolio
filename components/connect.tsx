import { ExternalLink, Mail, Phone, Github, Linkedin, Globe } from "lucide-react"

const connectData = [
  {
    platform: "Email",
    value: "ratanrathod7@outlook.com",
    href: "mailto:ratanrathod7@outlook.com",
    icon: Mail,
  },
  {
    platform: "Phone",
    value: "7775024732",
    href: "tel:+917775024732",
    icon: Phone,
  },
  {
    platform: "Github",
    value: "ratanz",
    href: "https://github.com/ratanz",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    value: "ratanrathod7",
    href: "https://www.linkedin.com/in/ratanrathod7",
    icon: Linkedin,
  },
  {
    platform: "Portfolio",
    value: "ratanzcodes.vercel.app",
    href: "https://ratanzcodes.vercel.app/",
    icon: Globe,
  },
]

export default function Connect() {
  return (
    <section className="py-12 mx-auto md:w-full w-screen md:px-0 px-4">
      <h2 className="text-2xl font-bold mb-8 text-foreground">
        Connect <span className="text-muted-foreground">#</span>
      </h2>

      <div className="space-y-2 md:px-0 px-2">
        {connectData.map((item, index) => {
          const IconComponent = item.icon

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 pr-2 border-r-2 border-transparent group transition-all duration-200 ease-out hover:border-gray-900 hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
                <span className="text-foreground font-medium">{item.platform}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  {item.value}
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-150" />
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
