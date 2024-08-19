import React from "react";

function Mulimg() {
  return (
    <>
      <section className=" h-auto w-screen font-sf font-extrabold ">
        <div className="flex gap-10 relative h-auto right-20 left-14 top-40  ">
          <div style={{ width: "55rem" }}>
            <img
              src="https://www.apple.com/v/airpods-max/f/images/overview/design_comfort__f5gwnm9e6ci2_xlarge.jpg"
              alt=""
            />
          </div>
          <div style={{ width: "32rem", position: "absolute", right: "7rem" }}>
            <img
              src="https://www.apple.com/v/airpods-max/f/images/overview/design_mesh__cleb6oo85bo2_xlarge.jpg"
              alt=""
              style={{ height: "40rem" }}
            />
            <p className="text-2xl text-gray-400 relative top-5 ">
              A <b className="text-black">custom-designed mesh textile</b> wraps
              the ear cushions to provide pillow-like softness while listening.
            </p>
            <img
              src="https://www.apple.com/v/airpods-max/f/images/overview/design_foam__gndv3rgud4ya_xlarge.jpg"
              alt=""
              style={{ height: "40rem", position: "relative", top: "10rem" }}
            />
            <p className="text-2xl text-gray-500 relative top-52">
              Crafted with acoustically engineered memory foam, the{" "}
              <b className="text-black">ear cushions</b> gently create an
              immersive seal that is the foundation of incredible sound.
            </p>
          </div>
        </div>
        <div>
          <div className="relative h-auto w-auto flex justify-center flex-col mt-3">
            <video
              className="relative h-full"
              style={{
                top: "800px",
                width: "94rem",
                zIndex: "0",
                paddingLeft: "2rem",
              }}
              src="https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/crown/small_2x.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <img
              src="https://www.apple.com/v/airpods-max/f/images/overview/design_crown_body__dnzmz5cex9ua_xlarge.png"
              alt=""
              className="w-full h-full"
              style={{
                zIndex: "1",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            />
            <p
              id="paraa"
              className="absolute z-40 text-white text-center  "
              style={{
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "35%",
                zIndex: "2",
                fontSize: "24px",
                color: "rgb(193, 220, 251)",
                lineHeight: "90%",
              }}
            >
              Press the <b className="text-white">Digital Crown</b> to play and
              pause music or mute and unmute yourself on calls, and press twice
              to skip between tracks or end calls. Turn it to precisely control
              volume.
            </p>
          </div>
        </div>
      </section>
      <div className="text-white relative h-screen bg-black ">
        <h1 className="text-2xl relative top-24 left-48  ">Audio quality</h1>
        <h1 className="text-9xl relative top-24 left-48 " style={{lineHeight:"90%"}}>Sounds like an epiphany.</h1>

        <h1 style={{ display:"flex",  justifyContent:"flex-end", alignItems:"center", marginTop:"150px",fontSize:"27px"}}>
          AirPods Max combine high-fidelity audio with industry-leading Active <br />
          Noise Cancellation to deliver an unparalleled listening experience. <br />
          Each part of their custom-built driver works to produce sound with <br />
          ultra-low distortion across the audible range. From deep, rich bass to <br />
          accurate mids and crisp, clean highs, you’ll hear every note with a <br />
          new sense of clarity.
        </h1>
      </div>
    </>
  );
}

export default Mulimg;
