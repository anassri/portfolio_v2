import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    team: string;
    description: string;
    technologies: string[];
}

const ExperienceItem = ({
    title,
    company,
    period,
    team,
    description,
    technologies,
}: ExperienceItemProps) => {
    return (
        <div className="relative pl-8 pb-12 group">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary to-primary"></div>

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 animate-glow"></div>

            <div className="glass-card rounded-xl p-6 hover-lift">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                            {title}
                        </h3>
                        <p className="text-primary font-semibold">{company}</p>
                        <p className="text-sm text-muted-foreground">{team}</p>
                    </div>
                    <span className="text-sm text-primary font-medium">
                        {period}
                    </span>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: "Senior Software Engineer",
            company: "Build.com",
            period: "2023 - Present",
            team: "Home Omni Tools",
            description:
                "Driving business-impacting feature development, collaborating with PMs, designers, and stakeholders to ensure alignment with goals and user needs. Serving as Tech Lead, achieving 90% on-time delivery and reducing project overruns by 10%. Mentoring junior developers, boosting team productivity by 35% through code reviews, pair programming, and guidance on best practices. Proposing and executing architectural improvements to streamline internal tooling and development cycles.",
            technologies: [
                "JavaScript",
                "TypeScript",
                "React",
                "GraphQL",
                "Express",
                "Node.js",
                "Tachyons",
                "Jest",
                "React Testing Library",
                "Handlebars",
                "Playwright",
                "Java",
            ],
        },
        {
            title: "Software Engineer",
            company: "Build.com",
            period: "2021 - 2023",
            team: "Top of Funnel",
            description:
                "Led system design sessions, optimizing implementation and fostering collaboration. Built efficient GraphQL resolvers using Express.js and Node.js. Achieved 15% downtime reduction through rigorous unit testing and proactive app performance monitoring. Contributed to overall code quality through GitHub reviews and mentorship for team growth.",
            technologies: [
                "JavaScript",
                "TypeScript",
                "React",
                "GraphQL",
                "Express",
                "Node.js",
                "Tachyons",
                "Jest",
                "React Testing Library",
            ],
        },
        {
            title: "Software Engineer",
            company: "Build.com",
            period: "2021",
            team: "Web Platform",
            description:
                "Researched third-party libraries to address performance issues, enhancing web store efficiency. Contributed to CI/CD process by adding GitHub Actions for improved communication and status updates via Slack/GitHub integration. Elevated Storybook usage efficiency through decorators for cleaner code.",
            technologies: [
                "JavaScript",
                "TypeScript",
                "React",
                "GraphQL",
                "Express",
                "Node.js",
                "Tachyons",
                "Jest",
                "GitHub Actions",
                "React Testing Library",
            ],
        },
        {
            title: "Adjunct Instructor",
            company: "Gwinnett Technical College",
            period: "2022 - Present",
            team: "Web Development & Design",
            description:
                "I teach HTML, CSS, JavaScript, and React, preparing students to build responsive, interactive web applications. I designed a React course modeled after real-world engineering workflows, giving students hands-on experience with the same tools, patterns, and challenges they’ll encounter in professional settings. My approach emphasizes project-based learning, where students simulate real-world app development, building the confidence and skills to contribute to production-grade applications right after graduation. Alongside technical instruction, I provide personalized mentorship and feedback, helping students strengthen their problem-solving abilities and prepare for modern web development careers.",
            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "Git",
                "Cybersecurity",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="section-container bg-gradient-to-b from-background to-background/50"
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-12 justify-center">
                    <Briefcase className="w-8 h-8 text-primary" />
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Professional{" "}
                        <span className="gradient-text">Experience</span>
                    </h2>
                </div>

                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
