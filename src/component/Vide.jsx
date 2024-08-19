import { React } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Video() {
  useGSAP(() => {
    gsap.to("#vid1", {
      scrollTrigger: {
        trigger: "video",
        start: "top top",
        end: "+=400%", // This controls how long the video remains pinned
        pin: true,
        scrub: true,
      },
    });

    gsap.to("#text-1", {
      y: -200,
      opacity: 3,
      scrollTrigger: {
        trigger: "#text-1",
        start: "top 90%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.to("#text-2", {
      y: -200,
      opacity: 3,
      scrollTrigger: {
        trigger: "#text-2",
        start: "top 90%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.to("#text-3", {
      y: -200,
      opacity: 3,
      scrollTrigger: {
        trigger: "#text-3",
        start: "top 90%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.to("#text-4", {
      y: -200,
      opacity: 3,
      scrollTrigger: {
        trigger: "#text-4",
        start: "top 90%",
        end: "bottom 40%",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <section id="vid1" className="relative h-screen w-full">
        <video
          className="object-cover w-full h-full z-0"
          src="https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/supercut/medium_2x.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </section>

      <div
        id="text-1"
        className="relative h-screen w-full  text-center text-7xl text-white  font-sf opacity-0"
      >
        High-fidelity audio
      </div>
      <div
        id="text-2"
        className="relative h-screen w-full  text-center text-7xl text-white  font-sf  opacity-0"
      >
        Active Noise Cancellation <br /> with Transparency mode.
      </div>
      <div
        id="text-3"
        className="relative h-screen w-full  text-center text-7xl text-white  font-sf  opacity-0"
      >
        Personalised Spatial Audio <br /> fortheatre-like sound that <br />{" "}
        surrounds you.
      </div>
      <div
        id="text-4"
        className="relative h-screen w-full  text-center text-7xl text-white  font-sf  opacity-0"
      >
        Stunning design with an <br /> exceptional fit.
      </div>
    </>
  );
}

export default Video;
