import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons/icons.component";

const Contact = () => {
    return (
        <section id="contact" className="section-container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Let's <span className="gradient-text">Connect</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                    I'm always interested in hearing about new opportunities,
                    collaborations, or just having a chat about technology and
                    development. Feel free to reach out!
                </p>

                <div className="glass-card rounded-2xl p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                            onClick={() =>
                                (window.location.href =
                                    "mailto:ar.nassri@gmail.com")
                            }
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Send Email
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/50 hover:bg-primary/10"
                            onClick={() =>
                                window.open(
                                    "https://linkedin.com/in/anassri",
                                    "_blank"
                                )
                            }
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </Button>
                    </div>

                    <div className="flex gap-6 justify-center pt-4 border-t border-border">
                        <a
                            href="https://github.com/anassri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <GithubIcon />
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="https://x.com/ammar_nassri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <XIcon />
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
