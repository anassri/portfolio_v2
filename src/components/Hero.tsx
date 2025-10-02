import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, MailCheck } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons/icons.component";

const Hero = () => {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight: "85vh" }}
        >
            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                            <span className="block">Hi, I'm</span>
                            <span className="gradient-text">Ammar Nassri</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                            Software Engineer
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Crafting exceptional digital experiences with a unique
                        blend of
                        <span className="text-primary font-medium">
                            {" "}
                            Computer Engineering
                        </span>
                        ,
                        <span className="text-primary font-medium">
                            {" "}
                            Animation
                        </span>
                        , and
                        <span className="text-primary font-medium">
                            {" "}
                            Web Development
                        </span>
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                            onClick={() =>
                                document
                                    .getElementById("experience")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/50 hover:bg-primary/10"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Get In Touch
                        </Button>
                    </div>

                    <div className="flex gap-6 items-center justify-center pt-8">
                        <a
                            href="https://github.com/anassri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href="https://linkedin.com/in/anassri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://x.com/ammar_nassri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <XIcon />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
