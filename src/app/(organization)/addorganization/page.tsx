import React from "react";

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          <div className="bg-blue-400 w-3/6 h-3/5 rounded-sm">
            <div className="w-full h-1/6 bg-secondary flex items-center rounded">
              <div className="flex gap-1 ml-10 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-black font-semibold text-xl ">
                    Logo - Organization Setup
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1>Welcome aboard, User Name!</h1>
                <p>
                  Enter your organization details to get started with Zoho
                  Invoice.
                </p>
              </div>

              <div>
                <input type="text" />
                <input type="text" />
              </div>
              <div> + Add Organization Address</div>

              <div>
                <h3>Note:</h3>
                <p>
                  You can update some of these preferences from Settings
                  anytime.
                </p>
              </div>
              <div>
                <button>Get Started</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
