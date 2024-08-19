import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
  const canvasRef = useRef(null);
  const frameCount = 46;

  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/small_2x/small_2x_${index
      .toString()
      .padStart(4, "0")}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 800;

    const img = new Image();
    img.src = currentFrame(1);

    const drawImageScaled = (img, ctx) => {
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    img.onload = () => {
      drawImageScaled(img, context);
    };

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      img.onload = () => {
        drawImageScaled(img, context);
      };
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "canvas",
        scrub: 1,
        pin: true,
        start: "top 10%",
        end: "bottom 70px",

        onUpdate: (self) => {
          const frameIndex = Math.floor(self.progress * (frameCount - 1)) + 1;
          updateImage(frameIndex);
        },
        onLeave: () => {
          // When the scroll animation is complete
          gsap.to(canvas, { opacity: 0, duration: 0 });
        },
        onEnterBack: () => gsap.to(canvas, { opacity: 1, duration: 0 }),
      },
    });

    // Only change opacity near the end of the timeline
      tl.to(canvas,{})
      
    preloadImages();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [frameCount]);

  useEffect(() => {
    gsap.to("#img1", {
      opacity: 1,
      
      scrollTrigger: {
        trigger: "#img1",
        // markers:true,
        // pin:true,
        start: "top 80px",
        end: "bottom 50%",
        
        onEnter: () => gsap.to("#img1", { opacity: 1, duration: 0 }),
        onLeave: () => gsap.to("#img1", { opacity: 1, duration: 0 }),
        onEnterBack: () => gsap.to("#img1", { opacity: 1, duration: 0 }),
        onLeaveBack: () => gsap.to("#img1", { opacity: 0, duration: 0 }),
      },
      
    });
  });
  useEffect(() => {
    
    gsap.to("#img2", {
       opacity: 1,
       
       scrollTrigger: {
        trigger: "#img2",
        // marker:true,
        pin:true,
        start: "top 80px",
        end: "bottom 90%",

        onEnter: () => gsap.to("#img2", { opacity: 1, duration: 0 }),
        onLeave: () => gsap.to("#img2", { opacity: 1, duration: 0 }),
        onEnterBack: () => gsap.to("#img2", { opacity: 1, duration: 0 }),
        onLeaveBack: () => gsap.to("#img2", { opacity: 0, duration: 0 }),
      },
    });
  });

  useGSAP(()=>{
    gsap.to("#had h1",{
      y: -50,
      scrollTrigger: "#had h1",
      opacity: 2,
      duration:1,
      delay:0.5,
      scrub:1,
    stagger:0.2
    })
  })
  useGSAP(()=>{
    gsap.to("#paraa p",{
      y: -40,
      scrollTrigger: "#paraa p",
      opacity: 1,
      duration:1,
      delay:0.5,
      scrub:1,
      stagger:0.2
    
    })
  })
  useGSAP(()=>{
    gsap.to("#textimg p",{
      y: -60,
      opacity: 1,
      duration:0.7,
      delay:0.5,
      stagger:1,
      scrollTrigger:{
        trigger:"#textimg p",
        scrub:1,
        stagger:0.2
      }
    
    })
  })

  
  return (
    <>
      <div id="had" className="relative font-sf h-screen pt-36">
        <h1 className="text-3xl absulate pl-36 h-0 opacity-0 ">Design</h1>
        <h1 
          style={{
            fontSize: "130px",
            fontWeight: "900",
            paddingLeft: "145px",
            height: "120px",
            opacity:"0"
          }}
        >
          A radically.
        </h1>
        <h1
          style={{
            fontSize: "130px",
            fontWeight: "900",
            paddingLeft: "145px",
            height: "120px",
            opacity:"0"
          }}
        >
          original
        </h1>
        <h1
          style={{ fontSize: "130px", fontWeight: "900", paddingLeft: "145px",opacity:"0" }}
        >
          composition
        </h1>
        <div id="paraa" className="text-3xl left-1/2 right-36 absolute ">
          <p className="opacity-0">The over-ear headphone has been</p>
          <p className="opacity-0" >completely reimagined. From cushion to</p>
          <p className="opacity-0" >canopy, AirPods Max are designed for an</p>
          <p className="opacity-0" >uncompromising fit that creates the</p>
          <p className="opacity-0" >optimal acoustic seal for many different</p>
          <p className="opacity-0" >head shapes — fully immersing you in every sound.</p>
        </div>
      </div>
      <div className="h-screen mt-28 flex justify-center relative">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full z-0 opacity-100"
        ></canvas>
      </div>

      <div  className="h-screen w-full relative  ">
        <div id="textimg" className="h-screen   text-xl text-slate-600">
          <p className="w-64 relative left-56 top-16 opacity-0">The <b className="text-black">canopy</b> spanning the headband is made from a breathable knit mesh, distributing weight to reduce on-head pressure.</p>
          <p className="w-64 relative top-32 left-56 opacity-0">The <b className="text-black">stainless steel frame</b> is wrapped with a soft-to-
          the-touch material for a remarkable combination of strength, flexibility and comfort.</p>
          <p className="w-64 relative top-16 left-3/4 opacity-0"><b className="text-black font-extrabold">Telescoping arms</b> smoothly extend and stay where you set them, for a consistent fit and seal.</p>
        </div>
        <img
          id="img1"
          src="https://www.apple.com/v/airpods-max/f/images/overview/design_hero_frame__bgrqzq8wlzde_large_2x.png"
          alt=""
          className="absolute top-0 left-0 right-0 bottom-0 m-auto  opacity-0 w-full "
          style={{ width: "600px", zIndex: 5 }}
        />
        <img
          id="img2"
          src="https://www.apple.com/v/airpods-max/f/images/overview/design_hero_cups__ddp0h9jo76gm_large.png"
          alt=""
          className="absolute  left-0 right-0 bottom-0 m-auto  opacity-0  w-full "
          style={{ width: "600px",   zIndex: 4,  }}
        />
      </div>
       <div className="relative h-auto w-full mt-96 pt-7  ">
        <p className="w-1/4 absolute text-center left-0 right-0 bottom-0 m-auto text-xl text-slate-600">The <b className="text-black ">beautifully anodised aluminium</b> cups feature a revolutionary mechanism that allows each cup to rotate independently and balance pressure.</p>
       </div>
    </>
  );
};

export default Canvas;
