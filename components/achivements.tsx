export default function Achievements() {
    const achievements = [
      {
        title: "Debugging - Atria Institute of Technology, Bangalore",
        description: "Won 1st place, awarded by the Chairman of ISRO, in code debugging competition.",
      },
      {
        title: "24-Hour Hackathon - Srinivas Institute, Mangalore",
        description: "Secured 2nd place out of 200 teams in a 24-hour hackathon.",
      },
      {
        title: "Code Quest - Canara Engineering College, Mangalore",
        description: "Achieved 1st place out of 50 teams in a coding competition.",
      },
      {
        title: "Code Debug - Sridevi Institute of Technology, Bangalore",
        description: "Secured 2nd place in a code debugging competition.",
      },
      {
        title: "Accenture's virtual Coding, Development & Advanced Engineering in Java",
        description: "Completed comprehensive Java development simulation on Forage platform.",
      },
      {
        title: "Data Structure and Algorithm",
        description: "Successfully completed advanced DSA course on Coursera platform.",
      },
      {
        title: "JavaScript Essentials",
        description: "Earned JavaScript fundamentals certification from Cisco Networking Academy.",
      },
      {
        title: "JPMorgan Chase & Co.'s Software Engineering Simulation",
        description: "Completed software engineering virtual experience program on Forage platform.",
      },
      {
        title: "Meta Front-end Developer Course",
        description: "Completed comprehensive front-end development program by Meta.",
      },
      {
        title: "Generative AI Productivity Skills",
        description: "Earned AI productivity certification from Microsoft Learn platform.",
      },
    ]
  
    return (
      <section className="py-16 px-1 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Achievements <span className="text-muted-foreground">#</span>
        </h2>
  
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  