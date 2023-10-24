"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { FiUsers, FiUpload } from "react-icons/fi";

import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { handleGetOrganizationsAddress } from "@/utils/Organization/getOrganizationAddress";

const GetStarted = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const { businessName, typeOfBusiness, profile,id } = useAppSelector(
    (state) => state.orgReducer.value
  );
const [orgAddress, setorgAddress] = useState<OrganizationAddress>()
  useEffect(() => {
    handleGetOrganizationsAddress()
      .then(({ data }: any) => {
        setorgAddress(data.organizationAddress);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  console.log(orgAddress);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  console.log(selectedFile,"myllllvalllll");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };
  

  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-52  mr-1">
            <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
            <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div className="flex justify-between items-center border border-white w-full">
            <div className=" flex items-center">
              <MdRefresh className="text-white w-5 h-5 m-3" />
              <div className="flex items-center  bg-secondary p-1 px-2 m-1 rounded-lg border-secondary border lg:h-8">
                <AiOutlineSearch className="text-black w-5 h-5" />
                <span className="text-gray-900 text-lg mx-2">|</span>
                <div className="mr-[10px]">
                  <input
                    type="text"
                    placeholder="Search in Customers(/)"
                    className="bg-transparent text-black border-none focus:outline-none placeholder-black text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <BsPlusSquareFill className="bg-black text-secondary" />
              <span className=" text-lg text-white ">|</span>
              <Link href={"/orgprofile"}>
                <AiOutlineSetting className=" text-white" />
              </Link>
              <span className=" text-lg text-white ">|</span>
              <select className="">
                <option>Organization</option>
                <option>Organization 2</option>
                <option>Organization 3</option>
              </select>
              <div className="pr-2">
                <img
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex" style={{ height: "calc(100vh - 47px)" }}>
          <div
            style={{ height: "calc(100vh - 47px)" }}
            className=" w-56    flex flex-col gap-3 py-3 px-2 border "
          >
            <div className="flex items-center p-2">
              <h1 className="text-white text-[23px]">Settings</h1>
            </div>
            <div className="flex items-center bg-secondary  h-7 rounded-lg space-x-2">
              <GoOrganization className="w-4 h-4 ml-2 text-gray-800" />
              <p className="text-sm text-gray-800">Organization Profile</p>
            </div>
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <FiUsers className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Users & Roles</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <IoColorPaletteOutline className="w-4 h-4 ml-2 text-white " />
              <p className="text-sm text-white">Templates</p>
            </div>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white">
                <h2 className="text-xl flex items-center">
                  Organization Profile |{" "}
                  <span className="text-[15px] ml-2"> ID: {id}</span>
                </h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-[220px]">
                      <div>
                        <p className="text-white text-sm">Your Logo</p>
                      </div>
                      <div
                        onClick={() => imageRef.current?.click()}
                        className="bg-white w-[250px] h-20 flex justify-center items-center rounded cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <FiUpload />

                          <p className="text-xs">Upload lour logo</p>
                        </div>
                        <input
                          ref={imageRef}
                          className="hidden"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          // onChange={this.handleFileUpload}
                        />
                      </div>
                    </div>
                    <div className="flex gap-[142px] items-center">
                      <div>
                        <p className="text-white text-sm">
                          Organization Name{" "}
                          <span className="text-red-800">*</span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                          defaultValue={businessName}
                        />
                      </div>
                    </div>
                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">Industry</p>
                      </div>
                      <div className="flex items-center">
                        <select className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2">
                          <option value="agriculture">Agriculture</option>
                          <option value="construction">Construction</option>
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="education">Education</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="transportation">Transportation</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-[191px] items-center">
                      <div>
                        <p className="text-white text-sm">Business Type</p>
                      </div>
                      <div className="flex items-center">
                        <select className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2">
                          <option value="Freelancing">Freelancing</option>
                          <option value="For-profit Business">
                            For-profit Business
                          </option>
                          <option value="NGO">NGO</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-[164px] items-center">
                      <div>
                        <p className="text-white text-sm">Business Location</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                          defaultValue={"INDIA"}
                        />
                      </div>
                    </div>
                    <div className="flex gap-[164px] ">
                      <div>
                        <p className="text-white text-sm">Business Address</p>
                      </div>
                      <div className="flex flex-col gap-4 w-1/3 ">
                        <div>
                          <textarea
                            className="w-full  bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-xs text-blue-gray-700 outline-none placeholder:text-black"
                            placeholder="Address"
                            name="address"
                            id="address"
                            defaultValue={orgAddress?.organizationAddress?.address}
                          />
                        </div>
                        <div>
                          <textarea
                            className="w-full bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-xs text-blue-gray-700 outline-none "
                            placeholder="Apt, suite, etc. (Optional)"
                            name="apt"
                            id="apt"
                            defaultValue={orgAddress?.organizationAddress?.apt}
                            // value={organizationState.apt}
                            // onChange={setorganizationState}
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="w-full h-8 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-xs text-blue-gray-700 outline-none placeholder:text-black"
                            placeholder="City"
                            name="city"
                            id="state"
                            defaultValue={orgAddress?.organizationAddress?.city}
                            // value={organizationState.city}
                            // onChange={setorganizationState}
                          />
                        </div>
                        <div className="w-full flex justify-between gap-4">
                          <div className="w-6/12 h-16">
                            <input
                              type="text"
                              className="w-full h-8 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-xs text-blue-gray-700 outline-none placeholder:text-black"
                              placeholder="State"
                              name="state"
                              id="state"
                            defaultValue={orgAddress?.organizationAddress?.state}

                              // value={organizationState.state}
                              // onChange={setorganizationState}
                            />
                          </div>
                          <div className="w-6/12 h-16">
                            <input
                              type="text"
                              name="zipCode"
                              id="zipCode"
                              className="w-full h-8 bg-white border border-gray-300 border-opacity-25 rounded-md px-3 py-2.5 font-sans text-xs text-blue-gray-700 outline-none placeholder:text-black"
                              placeholder="Zip code"
                            defaultValue={orgAddress?.organizationAddress?.zipCode}

                              // value={organizationState.zipCode}
                              // onChange={setorganizationState}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
