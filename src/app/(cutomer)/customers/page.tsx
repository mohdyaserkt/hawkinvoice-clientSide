"use client";
import React, { useState } from "react";
import { LiaFileInvoiceDollarSolid,LiaFileInvoiceSolid } from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag } from "react-icons/pi";
import { BsPlusSquareFill } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { AiOutlineSetting, AiOutlineHome,AiOutlineUser,AiOutlineSearch } from "react-icons/ai";
import "./page.module.css";

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-52  ">
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
              <AiOutlineSetting className=" text-white" />
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
        <div>
          <div>
            <div>
              <AiOutlineHome />
              <p>Home</p>
            </div>
            <div>
              <AiOutlineUser />
              <p>Customers</p>
            </div>
            <div>
              <PiHandbag />
              <p>Items</p>
            </div>
            <div>
              <LiaFileInvoiceSolid />
              <p>Invoices</p>
            </div>
            <div>
              <img src="/recievedpayments.svg" alt="" />
              <p>Payments Recieved</p>
            </div>
            <div>
              <TbReceipt />
              <p>Expenses</p>
            </div>
            <div>
              <AiOutlineHome />
              <p>Reports</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
