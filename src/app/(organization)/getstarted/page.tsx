import React from "react";

const getStarted = () => {
  return (
    <>
      <div className="h-screen w-screen ">
        <nav></nav>
        <div className="flex h-full justify-center items-center">
          <div className="bg-red-600 w-2/5 h-2/4">
            <div className="text-white text-base">Let’s get started</div>
            <div className="mt-2 mb-4">
              <h1 className="text-white text-3xl">
                Tell us about your business
              </h1>
            </div>
            <div className="mb-9">
              <p className="text-white text-base">
                Every business is unique. We want to hear about yours. If you
                registered your business with IRS, make sure the information you
                submit matches what is on your IRS documents.
              </p>
            </div>

            <div>
              <div className="relative h-16 w-full min-w-[200px]">
                <select className="peer h-full w-full rounded border px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-black bg-secondary">
                  <option className="" value="" hidden selected>
                    What kind of business are you?
                  </option>
                  <option
                    value="brazil"
                    className="rounded bg-white text-black"
                  >
                    Brazil
                  </option>
                  <option
                    value="bucharest"
                    className="rounded bg-white text-black"
                  >
                    Bucharest
                  </option>
                  <option
                    value="london"
                    className="rounded bg-white text-black"
                  >
                    London
                  </option>
                  <option
                    value="washington"
                    className="rounded bg-white text-black"
                  >
                    Washington
                  </option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full h-16 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none placeholder:text-black"
                  placeholder="What is your business name?"
                />
                <h3 className="text-white text-sm mt-1 text-opacity-55">Your business name is how we’ll identify you on emails, receipts, and messages to customers.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
