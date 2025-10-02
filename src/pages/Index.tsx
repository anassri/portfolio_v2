import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { ParticlesBackground } from "@/components/particles-background.component";
import Projects from "@/components/Projects";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const Index = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (
        <div>
            <Navigation />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            {init && <ParticlesBackground />}
        </div>
    );
};

export default Index;
