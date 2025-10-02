const Footer = () => {
    return (
        <footer className="border-t border-border py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ammar Nassri. All rights
                        reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed in <span className="text-primary">Figma</span>.
                        Built with <span className="text-primary">React</span>{" "}
                        and <span className="text-primary">Tailwind CSS</span>,
                        deployed with{" "}
                        <span className="text-primary">Netlify</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
