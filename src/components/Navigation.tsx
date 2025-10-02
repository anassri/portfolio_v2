import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import resume from "../ANassri_Resume.pdf";
import { LogoIcon } from "./icons/icons.component";
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
        { label: "Resume", href: resume, target: "_blank" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? "glass-card border-b border-border py-4"
                        : "py-6"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <a
                        href="#"
                        className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <LogoIcon />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target={link.target}
                                onClick={(e) => {
                                    if (link.href.startsWith("#")) {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }
                                }}
                                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute top-24 left-0 right-0 glass-card border-b border-border mx-4 rounded-xl p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="block text-lg text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
