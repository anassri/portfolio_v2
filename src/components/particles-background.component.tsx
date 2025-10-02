import React, { FunctionComponent, useMemo } from "react";
import Particles from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
export const ParticlesBackground: FunctionComponent = () => {
  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 150,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: false,
            quantity: 0,
            particles: {
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 400,
                  sync: true,
                },
              },

              move: {
                outModes: {
                  default: "destroy",
                },
                speed: 2,
              },
              size: {
                value: {
                  min: 1,
                  max: 5,
                },
                animation: {
                  enable: true,
                  speed: 5,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          remove: {
            quantity: 2,
          },
          slow: {
            factor: 3,
            radius: 200,
          },
        },
      },
      particles: {
        color: {
          value: "#7AE7AD",
        },
        move: {
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "top",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: true,
          size: false,
          speed: 0.5,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: true,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 200,
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.8,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 0.5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        links: {
          blink: false,
          color: {
            value: "random",
          },
          consent: false,
          distance: 100,
          enable: false,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: true,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: false,
      zLayers: 100,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
};
