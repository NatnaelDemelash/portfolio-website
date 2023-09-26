import waving from "../assets/waving.png";
import pp from "../assets/pp.jpg";
// import profile from "../assets/Black.jpg";

const Hero = () => {
  return (
    <div name="hero" className="bg-[#1C2833] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col-reverse pb-18 justify-center md:pb-0 md:flex-row gap-6 items-center  px-8 h-full">
        <div>
          <h1 className="text-4xl leading-tight max-w-[500px] sm:text-6xl text-[#ccd6f6]">
            FrontEnd Web Developer{" "}
            <img
              src={waving}
              className="w-[50px] sm:w-[60px] inline-block"
              alt="waving emoji"
            />
          </h1>

          <p className="text-[#8892b0] leading-tight py-6 max-w-[480px] sm:text-lg">
            Hi, I&apos;m{" "}
            <span className="text-amber-100">Natnael Demelash</span>. Passionate
            Frontend Web Developer based in Addis Ababa, dedicated to crafting
            engaging and user-centric digital experiences
          </p>
          <div className="max-w-[9rem] text-center py-3 cursor-pointer text-[#ccd6f6] font-bold  border-2 rounded border-[#0097B2] hover:bg-[#0097B2] duration-500">
            <a href="#work">View Work &rarr;</a>
          </div>
        </div>

        {/* <div className="max-w-[200px] md:max-w-[280px] shadow-xl">
          <img src={profile} alt="" style={{ borderRadius: "11px" }} />
        </div> */}

        <div className=" max-w-240px sm:max-w-[280px]">
          <img
            src={pp}
            style={{ borderRadius: "50%", border: "5px solid #0097B2" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
