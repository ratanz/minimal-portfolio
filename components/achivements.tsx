export default function Achievements() {
    const achievements = [
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
        <section className="py-10 md:w-full w-screen md:px-0 px-4 mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
                Achievements <span className="text-muted-foreground">#</span>
            </h2>

            <div className="space-y-5">
                {achievements.map((achievement, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="md:text-lg text-md font-semibold text-foreground">{achievement.title}</h3>
                        <p className="text-xs leading-relaxed">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
