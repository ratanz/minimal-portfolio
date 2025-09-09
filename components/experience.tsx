interface ExperienceItem {
    company: string
    role: string
    date: string
    description: string[]
  }
  
  const experiences: ExperienceItem[] = [
    {
      company: "Accenture North America",
      role: "Coding Simulation Participant",
      date: "January 2024",
      description: [
        "Completed a job simulation supporting a client with development team growth challenges",
        "Wrote Java classes using Spring Boot framework for enterprise application development",
        "Set up automated Jenkins builds for code validation and continuous integration",
        "Managed Agile sprint planning with user story preparation and task estimation",
      ],
    },
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineering Virtual Experience",
      date: "February 2024",
      description: [
        "Completed engineering simulation focused on credit-card rewards system development",
        "Built new classes to restore system functionality and improve performance",
        "Developed comprehensive test suites to ensure code reliability and performance",
        "Collaborated on debugging and troubleshooting complex system issues",
      ],
    },
  ]
  
  export default function Experience() {
    return (
      <section className="w-full px- py-12">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-1">
            Experiences <span className="text-muted-foreground font-normal">#</span>
          </h2>
        </div>
  
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-base font-medium text-foreground">{experience.company}</h3>
                <span className="text-muted-foreground">•</span>
                <p className="text-sm text-muted-foreground">{experience.role}</p>
              </div>
  
              <ul className="space-y-2 max-w-3xl">
                {experience.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-muted-foreground mt-1.5 text-xs">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  