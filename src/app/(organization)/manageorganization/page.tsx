import Image from "next/image";
import React from "react";

const manageOrganisation = () => {
  return (
    <div className="h-screen">
      <nav></nav>
      <div className="flex h-full justify-center items-center ">
        <div>
          <div>
            <h1>Hi, User Name!</h1>
            <div>
            <div>
              <p>
                You are a part of the following organizations. Go to the
                organization which you wish to access now.
              </p>
            </div>
            <button>+ New Organisation</button>
            </div>
          </div>

          {/* #organization listing */}

          <div>
            <div>
              <div>
                <div>
                <Image
                  src="/checkYourInbox.svg"
                  alt="Logo"
                  width={184}
                  height={143}
                />
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default manageOrganisation;
