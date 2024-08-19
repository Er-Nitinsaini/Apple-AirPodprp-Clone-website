import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CloneBy = () => {

  useEffect(() => {
    const handelTextAnimation = () => {
      const h1 = document.querySelector("#page10 h1");
      const htmlText = h1.textContent;
      const spliteedText = htmlText.split("");
      const halfValue = Math.floor(spliteedText.length / 2);
      let cluter = "";

      spliteedText.forEach((e, idx) => {
        if (idx < halfValue) {
          cluter += `<span class="a">${e}</span>`;
        } else {
          cluter += `<span class="b">${e}</span>`;
        }
      });

      h1.innerHTML = cluter;
    };

    handelTextAnimation();

    gsap.from("#page10 h1 .a", {
      y: 150,
      duration: 0.6,
      delay: 0.5,
      opacity: 0,
      stagger: 0.1,
      scrub: 5,
      scrollTrigger: {
        trigger: "#page10 h1 .a",
      }
    });

    gsap.from("#page10 h1 .b", {
      y: 150,
      duration: 0.6,
      delay: 0.5,
      opacity: 0,
      stagger: -0.1,
      scrub: 5,
      scrollTrigger: {
        trigger: "#page10 h1 .a",
      }
    });

  }, []);

  return (
    <div id="page10" className="bg-black text-white h-screen w-full mt-[70%] flex justify-center items-center">
      <h1 className="text-[100px]">Clone by Nitin Saini</h1>
    </div>
  );
};

export default CloneBy;
