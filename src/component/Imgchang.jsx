import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Imgchang() {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgtri",
        start: "top -150%",
        pin: true,
        scrub: 1,
      },
    });

    tl.to("#imgtri #image1", {
      opacity: 0,
    });
    tl.to("#imgtri #image3", {
      opacity: 0,
    });
  });
  return (
  
      <div id="imgtri" className=" relative bg-black" style={{ height: "150rem" }}>
        <img
          id="image1"
          style={{
            translate: "-500px 200px 0",
            zIndex: "8",
            position: "absolute",
          }}
          src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_xray_cushion__bug6vw8mdsuq_xlarge_2x.jpg"
          alt=""
        />

        <img
          id="image2"
          style={{
            translate: "-500px 200px 0",
            zIndex: "5",
            position: "absolute",
          }}
          src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_xray_cushion_transparent__fo7v7epgrsa6_xlarge_2x.jpg"
          alt=""
        />

        <img
          id="image3"
          style={{
            translate: "-500px 200px 0",
            zIndex: "7",
            position: "absolute",
          }}
          src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_xray_driver__szw4kqj8kp66_xlarge_2x.png"
          alt=""
        />
        <img
          id="image4"
          style={{
            translate: "-500px 200px 0",
            zIndex: "6",
            position: "absolute",
          }}
          src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_xray_chip__f2bct8r1kdm6_xlarge_2x.png"
          alt=""
        />
      </div>

     
  );
}

export default Imgchang;
