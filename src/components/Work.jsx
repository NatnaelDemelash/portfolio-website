import omnifood from "../assets/omnifood.png";
import aurora from "../assets/aurora_aiesel.png";
import pizzeria from "../assets/pizzeria.png";
import movieApp from "../assets/rottenApple.png";
import { BsGithub } from "react-icons/bs";

const Work = () => {
  return (
    <div
      name="work"
      id="work"
      className="w-full md:h-full py-8 mb:pb-16 bg-[#0a192f] sm:bg-[#273746] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center sm:items-start pt-32 sm:pt-0 w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-[#0097B2]">
            Portfolios
          </p>
          <p className="py-4">👇🏻Checkout my recent works</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card */}
          <div className=" bg-[#0097B2] shadow-sm shadow-[#040c16] text-white rounded-md mx-auto flex flex-col overflow-hidden items-center content-div">
            <div>
              <img src={omnifood} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">OMNIFOOD</h3>
              <p className="text-sm pb-4">
                An AI based tech company which majorly focuses on consumer
                well-being through a healthy diet.
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://loquacious-haupia-108385.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/OmniFood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-4 rounded-md hover:scale-110 duration-300">
                    <BsGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project -2 */}
          <div
            className="bg-[#0097B2] shadow-sm shadow-[#040c16] text-white rounded-md mx-auto flex flex-col 
          overflow-hidden items-center content-div"
          >
            <div>
              <img src={aurora} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">
                Aurora Aisel- Shopping Mart
              </h3>
              <p className="text-sm pb-4">
                An Ecommerce app built with React.js using react context -(
                FakeStore API) for data fetching/backend
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://aurora-aisel-shop.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/aurora_aisel_shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#222f3d] py-2 px-4 rounded-md hover:scale-110 duration-300">
                    <BsGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project -3 */}
          <div className="bg-[#0097B2] shadow-sm shadow-[#040c16] text-white rounded-md mx-auto flex flex-col overflow-hidden items-center content-div">
            <div>
              <img src={pizzeria} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">Pizzeria Pizza</h3>
              <p className="text-sm pb-4">
                Pizza ordering website .Users can browse through a variety of
                pizza options, select their preferred menu
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://pizzeria101.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/pizzeria_pizza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-4 rounded-md hover:scale-110 duration-300">
                    <BsGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project -4 */}
          <div className="bg-[#0097B2] shadow-sm shadow-[#040c16] text-white rounded-md mx-auto flex flex-col overflow-hidden items-center content-div">
            <div>
              <img src={movieApp} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">Rotten Apple</h3>
              <p className="text-sm pb-4">
                A simple React and TypeScript app to search popular movies and
                TvShows with additional user custom rating feature.
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://rottenapple.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/rottenApple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-4 rounded-md hover:scale-110 duration-300">
                    <BsGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
