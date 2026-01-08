export const PROJECTS = [
  {
    id: 1,
    title: "Horse Walking Mechanism (Theo Jansen Mechanism)",
    description:
      "A SolidWorks project exploring the Theo Jansen mechanism, focused on achieving a natural walking motion.",
    fullDescription: [
      `The Theo Jansen mechanism is a mechanical linkage system designed to convert simple rotary motion into a smooth, walking-like movement. Made up of a specific arrangement of rigid links, it produces a surprisingly natural gait using geometry alone. A carefully chosen proportions working together.`,
      "I first came across the Theo Jansen mechanism through a random YouTube short. It was only a few seconds long, but watching a bunch of rigid links walk like a living creature felt unreal.",
      "Modeling the parts in SolidWorks was the easy part. The real challenge was figuring out the right dimensions. Small changes in link lengths completely changed the motion—some versions dragged their feet, some looked like they were slipping, and a few just gave up on walking altogether",
      "After many rounds of trial and error, adjusting one link at a time and running motion studies again and again, the movement slowly started to make sense. As the mechanism became more stable, I also refined the design by introducing curves into the links, not just for aesthetics, but to make the overall form feel lighter and more intentional.",
      "In the end, a single rotating input produced a smooth, coordinated walking cycle. A carefully tuned linkage doing what it’s meant to do.",
    ],
    images: [
      "/Horse_walking.png",
      "/Horse_walking_animation.gif",
      "/jansens mechanism.jpeg",
    ],
    tech: ["SolidWorks", "CAD Modeling"],
  },
  {
    id: 2,
    title: "Mechanical Lock Box",
    description:
      "The Mechanical lock box works on a Gear-Driven Iris mechanism.",
    fullDescription: [
      "A gear-driven iris mechanism is commonly used to create circular openings that expand and contract smoothly, similar to a camera aperture. In this project, that principle is applied to a mechanical lock box, where rotating gears control the opening and closing of the iris without electronics.",
      "The entire lock box was modeled and assembled in SolidWorks, with the iris and gear system. The goal was to create a purely mechanical opening system that feels intuitive and satisfying, without relying on electronics.",
      "Since the design was intended for MDF fabrication in the future, material thickness and part geometry were considered during modeling, even though the build remains at the CAD stage.",
    ],
    images: ["/lockbox_design_2.png", "/lockbox.gif"],
    tech: ["SolidWorks", "CAD Modeling"],
  },
  {
    id: 3,
    title: "Engine Piston Keychain for Car Enthusiasts",
    description: "Interactive MDF keychain with a motor-inspired design",
    fullDescription: [
      "Designed in SolidWorks, this miniature piston keychain takes inspiration from a real engine component and scales it down into something you can carry around every day.",
      "When the gears are turned, the piston mimics the motion of a real engine, making it a unique piece for automotive enthusiasts. Perfect for those who love cars and mechanical engineering",
    ],
    images: ["/keychain_design_2.png", "/keychain.gif"],
    tech: ["SolidWorks", "CAD Modeling"],
  },
  {
    id: 4,
    title: "Zoetrope Walking Animation Model",
    description:
      "A Geneva wheel–driven zoetrope, designed in SolidWorks and laser cut in MDF, creating visible animation through pure mechanical motion.",
    fullDescription: [
      "A zoetrope is a mechanical animation device that creates the illusion of motion through a sequence of still frames. In this project, that illusion is driven entirely by a Geneva wheel mechanism, which converts continuous rotation into precise, step-by-step movement.",
      "The Geneva wheel allows the zoetrope to rotate in discrete steps, advancing the animation one frame at a time. This intermittent motion is key—it slows the rotation just enough for each frame to be clearly visible, allowing the walking animation to be perceived by the naked eye.",
      "The complete model was first designed and assembled in SolidWorks. Once finalized, the parts were laser cut from MDF and physically assembled. This step introduced real-world constraints, where small inaccuracies could affect motion, making tolerances and fit especially important.",
    ],
    images: ["/zoetrope_real.jpg", "/zoetrope_design_2.png"],
    tech: ["SolidWorks", "CAD Modeling", "Laser Cutting"],
  },
  
] as const;