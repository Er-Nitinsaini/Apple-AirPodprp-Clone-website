import React from "react";
import { navlist, navlist2 } from "../constant";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  useGSAP(() => {
    gsap.to("#sticky-header", {
      backgroundColor: "rgba(211, 211, 211, 0.7)",
      duration: 0.3,
      ease: "power2.elstic",
      scrollTrigger: {
        trigger: "#sticky-header",
        start: "top top",

        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <header className="w-auto h-auto flex justify-center items-center gap-0 ">
        <nav className="flex w-full max-w-7xl px-4 md:px-8 lg:px-16 xl:px-20 font-sf items-center justify-between max-sm:left-0">
          <img
            className="relative left-16"
            width={14}
            height={20}
            src="https://www.apple.com/ac/globalfooter/8/en_IN/assets/ac-footer/breadcrumbs/apple/icon_large.svg"
            alt=""
          />

          <div className="flex flex-4   justify-evenly max-sm:hidden text-slate-600 ">
            {navlist.map((nav) => (
              <div
                key={nav}
                className="px-5 text-xs font-medium cursor-pointer  hover:text-black transition-all hover:font-semibold"
              >
                {nav}
              </div>
            ))}
          </div>

          <div className="flex  gap-9  relative right-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
            </svg>
          </div>
        </nav>
      </header>

      <div
        id="sticky-header"
        className="flex justify-center sticky top-0  z-10"
      >
        <div className="flex items-center justify-between py-3 w-2/3 pl-3 pr-8 ">
          <h1 className="text-xl font-extrabold">AirPods Max</h1>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            {navlist2.map((nav) => (
              <div
                key={nav}
                className="hover:text-black transition-all cursor-pointer px-2"
              >
                {nav}
              </div>
            ))}
            <button className="border-solid bg-blue-500 rounded-3xl w-10 h-5 text-center text-white font-normal">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-300 sticky z-10 " style={{height:"1px", top:"50px"}}></div>
    </>
  );
};

export default Nav;
