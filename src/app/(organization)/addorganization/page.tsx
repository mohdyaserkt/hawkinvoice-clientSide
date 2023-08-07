import React from "react";

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          <div className="bg-blue-400 w-3/6 h-3/5">
            <div>
              <div>
                <h1>logo</h1>
                <h1>Logo - Organization Setup</h1>
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
                <p>You can update some of these preferences from Settings anytime.</p>

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
