import React from "react";
import { useInView } from "react-intersection-observer";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasLoader from "./Loader";

const LazyBall = ({ icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "200px 0px", // mount slightly before fully in view
  });

  return (
    <div ref={ref} className="w-28 h-28">
      {inView ? <BallCanvas icon={icon} /> : <div className="w-28 h-28" />}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <LazyBall key={technology.id} icon={technology.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");