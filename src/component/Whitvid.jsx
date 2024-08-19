import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Whitvid() {
  useGSAP(() => {
    gsap.to("#lh h1", {
      y: -70,
      scrollTrigger: "#lh h1",
      opacity: 2,
      duration: 1,
      delay: 0.5,
      scrub: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    gsap.to("#lp p", {
      y: -50,
      scrollTrigger: "#lp p",
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrub: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    gsap.to("#lastdiv h1", {
      y: -70,
      opacity: 1,
      duration: 1,
      delay: 1,
      scrub: 2,
      stagger: 0.3,
      scrollTrigger: {
      trigger:"#lastdiv h1",
      start:"top top",
      end:"bottom bottom"
      }
    });
  });

  return (
    <>
      <div>
        <div id="had" className="relative font-sf h-screen pt-36">
          <h1 className="text-3xl absulate pl-36 h-0 opacity-0 ">
            Magical experience
          </h1>
          <h1
            style={{
              fontSize: "130px",
              fontWeight: "900",
              paddingLeft: "145px",
              height: "120px",
              opacity: "0",
            }}
          >
            Elaborately
          </h1>
          <h1
            style={{
              fontSize: "130px",
              fontWeight: "900",
              paddingLeft: "145px",
              height: "120px",
              opacity: "0",
            }}
          >
            simple.
          </h1>

          <div id="paraa" className="text-3xl left-1/2 right-36 absolute ">
            <p className="opacity-0">
              AirPods Max inherit all of the wireless,
            </p>
            <p className="opacity-0">effortless magic of the AirPods family.</p>
            <p className="opacity-0">From setup to Siri commands, they make</p>
            <p className="opacity-0">the listening experience completely</p>
            <p className="opacity-0">ofluid — day to day, device to device.</p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full flex justify-center flex-col items-center">
        <div id="lh">
          <h1 className="text-black text-8xl opacity-0 tracking-tighter">
            More magic to play with.
          </h1>
        </div>
        <div
          id="lp"
          className="flex justify-evenly mt-10 text-2xl gap-20 pl-28 pr-28 "
          style={{ color: "rgb(70, 70, 70)" }}
        >
          <p className="opacity-0">
            <b className="text-black">On-head detection</b> <br />
            <br />
            AirPods Max pause audio when you take them off, and resume playback
            when you put them back on. So you never miss a beat.
          </p>
          <p className="opacity-0">
            <b className="text-black">Announce Notifications</b> <br />
            <br />
            With Announce Notifications, Siri can automatically read important
            notifications from Messages, Phone, Calendar, Reminders and more as
            they arrive.4 You can even tell Siri to respond — no hands required.
          </p>
          <p className="opacity-0">
            {" "}
            <b className="text-black">Always-on Siri</b> <br />
            <br />
            Get directions, check the weather, schedule a meeting and more with
            a simple “Hey Siri”. With an expansive set of commands, your
            favourite personal assistant is more helpful than ever.4
          </p>
        </div>
      </div>

      <div id="lastdiv" className="h-screen w-full flex justify-center flex-col items-center mt-[60rem] leading-10">
        <h1 className="text-8xl opacity-0 tracking-tighter">
          A case with staying power.
        </h1>
        <h1
          className="text-2xl pt-11 text-center opacity-0"
          style={{ color: "rgb(70, 70, 70)" }}
        >
          When stored in their soft, slim Smart Case, AirPods Max enter an{" "}
          <br />
          ultra‑low‑power state that preserves charge.
        </h1>
        <img
          className="pt-16"
          src="https://www.apple.com/v/airpods-max/f/images/overview/magic_smart_case__e1xikczc5eoi_xlarge.jpg"
          alt=""
        />
        <h1 className="text-8xl text-center pt-20 tracking-tighter opacity-0">
          A battery that keeps <br /> stayin’ alive.
        </h1>
        <h1 className="text-[700px] pt-96 opacity-0">20</h1>
        <h1 className="text-2xl tracking-tighter text-center pt-96 opacity-0">
          hours of listening, movie watching or talk time — with <br /> Active
          Noise Cancellation and Spatial Audio enabled. <br /> Simply charge via
          Lightning connector. A quick 5-minute <br /> charge delivers 1.5 hours
          of listening.6
        </h1>
      </div>
    </>
  );
}

export default Whitvid;
