import { React } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      "#img",
      { scale: 0.9, y: 0 }, // Initial state
      {
        scale: 1.3, // Final scale
        y: -80, // Final position
        scrollTrigger: {
          trigger: "#img",
          scroller: "body",
          start: "top 20%", // Animation starts when the top of the image hits the top of the viewport
          end: "bottom 50%", // Animation ends when the bottom of the image hits the top of the viewport
          scrub: 2,
          // Makes the animation linked to the scroll position
        },
        duration: 1,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#headline",
      { scale: 1, zIndex: -1 }, // Initial state
      {
        scale: 0.8, // Final scale
        y: -60,

        scrollTrigger: {
          trigger: "#headline",
          scroller: "body",
          start: "top 50%",
          end: "bottom 40%",
          scrub: 2,
        },
        ease: "power2.in",
      }
    );
    gsap.from("#para p", {
      y: 100,
      scrollTrigger: "#para p",
      opacity: 0,
      duration:1,
      delay:0.5,
      scrub:1
    });
  });

  return (
    <section className="h-auto w-auto">
      <div className="relative">
        <div
          id="img"
          className="flex justify-center items-center h-screen relative"
        >
          <img
            className="absolute top-0 left-0 right-0 mx-auto z-0"
            src="https://www.apple.com/v/airpods-max/f/images/overview/hero__gnfk5g59t0qe_small_2x.png"
            alt=""
          />
          <h1
            id="headline"
            className="text-[12rem] font-semibold "
            style={{ fontFamily: "SF Pro Text Semibold" }}
          >
            AirPodPro Max
          </h1>
        </div>
      </div>
      <div
        id="para"
        className="flex justify-center items-center py-48 text-3xl flex-col font-extrabold text-black "
      >
        <p>Introducing AirPods Max — a perfect balance of exhilarating</p>
        <p>high-fidelity audio and the effortless magic of AirPods.</p>
        <p>The ultimate personal listening experience is here.</p>
      </div>
    </section>
  );
}

export default Hero;
