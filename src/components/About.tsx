const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 hover-lift">
                    <p className="text-lg leading-relaxed text-foreground/90">
                        Hey there! I'm a software engineer with a{" "}
                        <span className="text-primary font-semibold">
                            Computer Engineering
                        </span>{" "}
                        degree, a master's in{" "}
                        <span className="text-primary font-semibold">
                            Animation
                        </span>
                        , and a{" "}
                        <span className="text-primary font-semibold">
                            web development
                        </span>{" "}
                        bootcamp background. In 2020, I dove into web
                        development to craft tech that adds some sunshine to
                        life.
                    </p>

                    <p className="text-lg leading-relaxed text-foreground/90">
                        I'm currently at{" "}
                        <span className="text-primary font-semibold">
                            Build.com
                        </span>
                        , cooking up features for the coolest ecommerce store. I
                        specialize in building scalable web applications with
                        React, TypeScript, Node.js, and GraphQL, while leading
                        system design sessions and mentoring team members.
                    </p>

                    <p className="text-lg leading-relaxed text-foreground/90">
                        Beyond code, you'll find me immersed in personal
                        projects, exploring new tech, or balancing life with{" "}
                        <span className="text-primary font-semibold">
                            woodworking
                        </span>
                        , gym sessions, and{" "}
                        <span className="text-primary font-semibold">
                            family
                        </span>{" "}
                        time. Cheers to the dynamic dance between pixels and
                        real-world adventures!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
