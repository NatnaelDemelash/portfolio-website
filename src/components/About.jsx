import desk2 from "../assets/desk-2.png";
import working from "../assets/working-emoji.png";
import rotatingPic from "../assets/rotatingPic.svg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[800px] pt-8 pb-20 bg-[#222f3d] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] grid grid-cols-2 gap-8"></div>
        <div className="sm:textright pb-8 pl-4">
          <p className="text-4xl inline border-b-4 border-[#0097B2]">About</p>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 justify-center items-center gap-8 md:gap-8 px-4">
          <div className=" max-w-280px sm:max-w-[380px] shadow-lg shadow-[#040c16] sm:ml-10 img-side">
            <img src={working} alt="" className="work-emoji" />
            <img src={desk2} alt="" className="rounded" />
            <span>
              <img src={rotatingPic} alt="" />
            </span>
          </div>
          <div>
            <p>
              👨‍💻 As a Frontend Web Developer, I thrive on transforming creative
              ideas into functional and visually captivating websites. With a
              strong foundation in HTML, CSS, and JavaScript, I am committed to
              delivering seamless user experiences and responsive designs. I am
              committed to creating intuitive and visually appealing websites
              that leave a lasting impression. Constantly seeking opportunities
              to grow and evolve, I am driven by my passion for innovation and
              my love for the ever-evolving world of web development. Let&apos;s
              collaborate and bring your digital vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
