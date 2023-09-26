const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex flex-col justify-center bg-[#1C2833] text-gray-300 py-4"
    >
      <div className="max-w-[1000px] mx-auto justify-center items-center p-4 md:mt-14">
        <form
          method="POST"
          action="https://getform.io/f/b646528b-c8d3-464a-b131-4277a870fd5f"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl inline border-b-4 border-[#0097B2]">
              Contact
            </p>
            <p className="pt-4">
              🚀 Submit the form below or shoot me an email -
              <span className="font-bold text-[#0097B2]">
                {" "}
                natnael.dev101@gmail.com / natidemelash074@gmail.com
              </span>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 text-black outline-none rounded"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="bg-[#ccd6f6] p-2 my-4 text-black outline-none rounded"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Message"
            className="bg-[#ccd6f6] p-2 text-black outline-none rounded"
            required
          ></textarea>
          <button className="text-white border-2 border-[#0097B2] my-6 p-2 max-w-[10rem] cursor-pointer hover:bg-[#0097B2]">
            Let&apos;s connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
