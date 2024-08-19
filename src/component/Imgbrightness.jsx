import React from "react";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Imgbrightness() {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#maindiv",
        start: "top 20%",
        // markers: true,
        scrub: 2,
      },
    });

    tl.to("#maindiv #i1", {
      opacity: 1,
    });
    tl.to("#maindiv #i2", {
      opacity: 1,
    });
    tl.to("#maindiv #i3", {
      opacity: 1,
    });
  });

  return (
    <div
      id="maindiv"
      className="relative flex justify-center w-full   bg-black"
      style={{ height: "75rem" }}
    >
      <img
        id="i1"
        className="absolute z-0 opacity-20"
        src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_spatial_figure__clxltt2m0z2a_xlarge.jpg"
        alt=""
      />
      <img
        id="i2"
        className="absolute z-30 opacity-20"
        src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_spatial_rings_back__dit9t4h8r2c2_xlarge.png"
        alt=""
      />
      <img
        id="i3"
        className="absolute z-30 opacity-20 top-96"
        src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_spatial_rings_front__gfrdafohuzyq_xlarge.png"
        alt=""
      />
      <h1 className="absolute z-50   w-1/3 bottom-52 text-xl left-32 " style={{color:"rgb(70, 70, 70)"}}>
        <b className="text-white">Personalised Spatial Audio with dynamic head tracking</b> gives you a
        theatre‑like experience for movies and shows, with sound that surrounds
        you.1 Using built-in gyroscopes and accelerometers, AirPods Max and your
        iPhone, iPad, Mac or Apple TV track the subtle motion of your head,
        anchoring sounds to your device. <br /> <br /> And with Apple Music, Personalised
        Spatial Audio with dynamic head tracking places sound all around you to
        create a three-dimensional listening experience.1
      </h1>
    </div>
  );
}

export default Imgbrightness;
