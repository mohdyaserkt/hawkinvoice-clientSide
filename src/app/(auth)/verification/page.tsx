import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const verification = () => {
    return (
        <>
            <div className="w-screen h-screen ">
                <nav></nav>
                <div className="flex h-full justify-center items-center ">
                    <div className="bg-white md:w-2/3 lg:w-1/3 lg:h-4/5 sm:w-full rounded sm:p-10  md:rounded-s-[5rem]  md:rounded-t-[5rem]  flex flex-col   items-center justify-center ">
                        <div className="flex flex-col  items-center justify-center">
                            <div className="mb-3">
                                <Image
                                    src="/checkYourInbox.svg"
                                    alt="Logo"
                                    width={184}
                                    height={143}
                                />
                            </div>

                            <div className="text-2xl font-semibold">Check your inbox</div>
                            <br />
                            <button className="mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] flex justify-center items-center">
                                <div className="text-base inline-flex items-center gap-3">
                                    <FcGoogle size={25} />
                                    continue with Google
                                </div>
                            </button>
                        </div>

                        <div></div>

                        <div className="text-xs text-center text-gray-600 my-5">
                            <span>
                                By clicking "Create account" or "Continue with Google",
                                <br /> you agree to the{" "}
                                <span className="text-blue-600  cursor-pointer">
                                    Privacy Policy
                                </span>
                            </span>
                        </div>

                        <div className="text-gray-700">
                            already have an account?{" "}
                            <a className="text-blue-600  cursor-pointer">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default verification;
