const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-8 p-8 md:p-12 rounded-xl bg-cyan-500 overflow-hidden">
      <div className="flex flex-col gap-8 justify-between text-white">
        <div>
          <h2 className="font-bold text-4xl">Contact Us</h2>
          <p className="mt-2 text-cyan-100 text-sm">Sub text</p>
        </div>
      </div>

      <div className="relative">
        <div className="bg-teal-400 size-40 rounded-full  absolute -top-28 -right-24 z-0"></div>
        <div className="bg-teal-400 size-40 rounded-full  absolute -bottom-24 -left-20 z-0"></div>

        <div className=" p-8 bg-white rounded-xl text-gray-600 shadow-lg md:w-80 relative z-10">
          <form className="flex flex-col gap-4" action="">
            <div>
              <label className="text-base">Your name</label>
              <input
                placeholder="Your Name"
                className="ring-1 ring-gray-300 px-4 py-2 rounded-md outline-none mt-2 w-full
          focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-base">Email Address</label>
              <input
                placeholder="Email Address"
                className="ring-1 ring-gray-300 px-4 py-2 rounded-md outline-none mt-2 w-full
          focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-base">Message</label>
              <textarea
                placeholder="Type your message here"
                rows={4}
                className="ring-1 ring-gray-300  px-4 py-2 rounded-md outline-none mt-2 w-full
          focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button className="bg-cyan-700 text-white rounded-lg px-8 py-2 text-sm uppercase self-end w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
