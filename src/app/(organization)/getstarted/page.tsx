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

              <br />
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-white border-t-white bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="equal-gradient before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-white peer-placeholder-shown:after:border-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:white-pink-500 peer-disabled:text-transparent peer-disabled:before:border-white peer-disabled:after:border-white peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Required
                </label>
              </div>

            </div>
            
         


          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
