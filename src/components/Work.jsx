import omnifood from "../assets/omnifood.png";
import ethioAxel from "../assets/ethioAxel.png";
import qrCode from "../assets/qrCode.png";
import githubFinder from "../assets/githubFinder.png";
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
          <div className="bg-[#0097B2] shadow-sm shadow-[#040c16] text-white rounded-md mx-auto flex flex-col overflow-hidden items-center content-div">
            <div>
              <img src={ethioAxel} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">EthioAxel DA</h3>
              <p className="text-sm pb-4">
                A Landing page for a Data analytics company that is based in
                Ethiopia
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://ethioaxel.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/EthioAxel"
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
              <img src={qrCode} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">QR Code Generator</h3>
              <p className="text-sm pb-4">
                A simple QR Code generator app with JavaScript, QRcode.js and
                Tailwind CSS
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://create-qrcode1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/QR-Code-Generator"
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
              <img src={githubFinder} alt="proj image" />
            </div>
            <div className="max-w-[400px] mx-auto text-center py-6">
              <h3 className="text-2xl font-bold pb-2">GitHub Finder</h3>
              <p className="text-sm pb-4">
                A simple React and Tailwind CSS app to search Github users
                account and display their info.
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://githubacc-finder.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#0a192f] py-2 px-16 rounded-md hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NatnaelDemelash/github-finder"
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
