import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Code2, ExternalLink } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

const ProjectCard = ({
    title,
    description,
    technologies,
    link,
}: ProjectProps) => {
    return (
        <Card className="glass-card border-border hover-lift group">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {title}
                    </CardTitle>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`View ${title} project`}
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
                <CardDescription className="text-foreground/70 text-base leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/30 bg-primary/5 text-foreground hover:bg-secondary/10"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Listimo",
            description:
                "A cross-platform productivity app that combines to-do list management with real-time chat to improve collaboration and organization. Designed a scalable backend with Node.js, Express, Prisma, and MongoDB, integrated AWS S3 via Tigris for secure storage, and deployed globally on Fly.io. Leveraged Redux for responsive state management, Zod for schema validation, and Jest for robust testing—delivering a reliable, high-performance app that runs seamlessly on both iOS and Android.",
            technologies: [
                "React Native",
                "Express",
                "Node.js",
                "Prisma",
                "MongoDB",
                "Redux",
                "Jest",
                "Zod",
                "Fly.io",
                "Tigris",
                "AWS S3",
            ],
            link: "https://listimo.io",
        },

        {
            title: "Judder",
            description:
                "A social media platform for eyewitness videos, enabling users to post, view, and engage with real-time content. Designed a scalable backend with Node.js, Express, GraphQL, and Prisma, and deployed globally on Fly.io with Tigris + AWS S3 for reliable video storage and delivery. Used Redux for state management, Zod for type-safe validation, and Jest for end-to-end testing, ensuring a high-performance, reliable, and engaging user experience.",
            technologies: [
                "React Native",
                "Expo",
                "Redux",
                "GraphQL",
                "Express",
                "Node.js",
                "Prisma",
                "Zod",
                "MongoDB",
                "AWS S3 via Tigris",
                "Fly.io",
                "Jest",
                "NX Monorepo",
            ],
        },
        {
            title: "Deary",
            description:
                "A social network app for close connections modeled after Facebook. Developed dynamic post components with React.js, Redux, and Flask, enabling seamless interaction with friends’ content. Integrated secure authentication with CSRF protection for safe logins and session management, and implemented image uploads via Amazon S3, allowing users to efficiently manage profile and post media while minimizing server load.",
            technologies: [
                "JavaScript",
                "Python",
                "React",
                "Flask",
                "AWS",
                "PostgreSQL",
            ],
            link: "https://github.com/anassri/deary",
        },
    ];

    return (
        <section id="projects" className="section-container">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-12 justify-center">
                    <Code2 className="w-8 h-8 text-primary" />
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
