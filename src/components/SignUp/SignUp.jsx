const SignUp = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className=" border border-blue-gray-50  p-4 shadow-lg   transition hover:drop-shadow-2xl py-24 bg-[#837070c4]">
        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
           

            <div className="relative">
            <label htmlFor="email" className="font-bold text-[#2e2c2c]">Email </label>
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
           

            <div className="relative">
                <label htmlFor="password" className="font-bold text-[#2e2c2c]">Password </label>
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 outline-none p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg hover:bg-blue-500 px-14 mb-2 py-3 bg-[#0000ff69] text-base font-medium text-white"
            >
              Sign in
            </button>
            <p className="text-sm text-[#2e2c2c] font-bold cursor-pointer">Reset Password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
