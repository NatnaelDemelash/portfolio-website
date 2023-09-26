import { images } from "../components/constants";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full pt-24 sm:pt-18 py-20 bg-[#1C2833] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-[#0097B2]">Skills</p>
          <p className="py-4">
            👇🏻These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="max-w-[740px]  md:pl-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6">
          <div className="py-6 shadow-md hover:scale-110 duration-300">
            <img src={images.Html} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">HTML</p>
          </div>
          <div className="py-6 shadow-md hover:scale-110 duration-300">
            <img src={images.Css} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">CSS</p>
          </div>
          <div className="py-6 shadow-md hover:scale-110 duration-300">
            <img src={images.Git} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">GITHUB</p>
          </div>
          <div className="py-10 shadow-md hover:scale-110 duration-300">
            <img
              src={images.Tailwind}
              alt="icon"
              className="w-[4rem] mx-auto"
            />
            <p className="my-4 font-bold">TAILWIND CSS</p>
          </div>
          <div className="py-6 shadow-md  hover:scale-110 duration-300">
            <img
              src={images.JavaScript}
              alt="icon"
              className="w-[4rem] mx-auto"
            />
            <p className="my-4 font-bold">JAVASCRIPT</p>
          </div>
          <div className="py-6 shadow-md  hover:scale-110 duration-300">
            <img src={images.React} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">REACT</p>
          </div>
          <div className="py-6 shadow-md  hover:scale-110 duration-300">
            <img src={images.Flutter} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">FLUTTER</p>
          </div>
          <div className="py-6 shadow-md  hover:scale-110 duration-300">
            <img src={images.Sass} alt="icon" className="w-[4rem] mx-auto" />
            <p className="my-4 font-bold">SASS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
