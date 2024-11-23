const Contactform = () => {
  return (
    <div className="px-4 w-full mb-4">
      <div className="relative flex flex-col px-4 py-6 bg-transparent bg-white  ">
        <h4 className="block text-2xl font-bold ">Drop us A Line</h4>

        <form className="mt-8 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm font-bold">
                Name <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm font-bold">
                Email <span className="text-[red]">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Email"
              />
            </div>

            <div className="">
              <label className="block mb-2 text-sm font-bold">
                Comment or Message
              </label>
              <textarea className="w-full border border-black h-28"></textarea>
              <button className="my-3 py-2 px-3 bg-blue-gray-50 hover:bg-blue-gray-100">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
