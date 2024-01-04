import React, { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MainContainer } from "./components/main-container/main-container.component";
import { ParticlesBackground } from "./components/background/particles-background.component";

const App = () => {
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
    <div className="w-full min-h-screen lg:relative flex flex-col lg:flex-row">
      <MainContainer />

      {init && <ParticlesBackground />}
    </div>
  );
};

export default App;
