"use client";
import React, { useEffect, useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag, PiCopySimple } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useParams, useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { handleCreateNewItem } from "@/utils/items/createNewItem";
import { handleCreateNewExpense } from "@/utils/Expense/createNewExpense";
import { IExpense } from "../../../../types/Expense/createNewExpense";
import Link from "next/link";
import Image from "next/image";

const AddnewExpense = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [errors, setErrors] = useState<{
    field: string;
    errors: string[];
  } | null>({ field: "", errors: [""] });

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let inputObject: { [key: string]: string | Number | object } = {};

    formData.forEach((value, key) => {
      inputObject[key] = String(value);
    });

    let expense = inputObject as unknown as IExpense;
    handleCreateNewExpense({
      expense,
      setError,
    })
      .then((res: any) => {
        if (res) {
          console.log(res);
          router?.push("/expenses");
          alert(res);
        }
      })
      .catch((err: ApiError) => {
        console.log(err.message);
        alert(err);
      });
  };

  const setError = (field: string, errorMessages: string[]) =>
    setErrors({ field, errors: errorMessages });

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
                <Image
                width={32}
                height={32}                  
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex"  style={{ height: "calc(100vh - 47px)" }}>
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <Link href={"/home"}>
              <div className="flex items-center  h-7 rounded-lg space-x-2">
                <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
                <p className="text-sm text-white">Home</p>
              </div>
            </Link>
            <Link href={"/customers"}>
              <div className="flex items-center  h-7 rounded-lg space-x-2">
                <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
                <p className="text-sm text-white">Customers</p>
              </div>
            </Link>
            <Link href="/items">
              <div className="flex items-center h-7 rounded-lg space-x-2">
                <PiHandbag className="w-4 h-4 ml-2 text-white " />
                <p className="text-sm text-white">Items</p>
              </div>
            </Link>
            <Link href={"/invoices"}>
              <div className="flex items-center h-7 rounded-lg space-x-2">
                <LiaFileInvoiceSolid className="w-4 h-4 ml-2 text-white" />
                <p className="text-sm text-white">Invoices</p>
              </div>
            </Link>
            <Link href={"/paymentsrecieved"}>
              <div className="flex items-center h-7 rounded-lg space-x-2">
                <Image
                width={16}
                height={16}
                  src="/recievedpayments.svg"
                  alt=""
                  className="w-4 h-4 ml-2 text-white"
                />
                <p className="text-sm text-white">Payments Recieved</p>
              </div>
            </Link>
            <Link href={"/expenses"}>
              <div className="flex items-center h-7 bg-secondary rounded-lg space-x-2">
                <TbReceipt className="w-4 h-4 ml-2 text-white" />
                <p className="text-sm text-white">Expenses</p>
              </div>
            </Link>
            <Link href={"/allreports"}>
              <div className="flex items-center h-7 rounded-lg space-x-2">
                <BsFileEarmarkBarGraph className="w-4 h-4 ml-2 text-white" />
                <p className="text-sm text-white">Reports</p>
              </div>
            </Link>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white">
                <h2 className="text-xl">New Expense</h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="text-[13px] text-white"
                >
                  <div className="flex flex-col gap-7">
                    <div className="flex space-x-28 items-center">
                      <p>Date</p>

                      <div className="flex items-center">
                        <input
                          name="date"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="date"
                          defaultValue={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-[76px]">
                      <p>
                        Category<span className="text-red-600">*</span>
                      </p>

                      <div className=" flex items-center">
                        <select
                          name="categoryName"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2 bg-white"
                        >
                         <option value="Automobile Expense">
                            Automobile Expense
                          </option>
                          <option value="Consultant Expense">
                            Consultant Expense
                          </option>
                          <option value="Contract Assets">
                            Contract Assets
                          </option>
                          <option value="Credit Card Charges">
                            Credit Card Charges
                          </option>
                          <option value="Depreciation And Amortisation">
                            Depreciation And Amortisation
                          </option>
                          <option value="Depreciation Expense">
                            Depreciation Expense
                          </option>
                          <option value="IT and Internet Expenses">
                            IT and Internet Expenses
                          </option>
                          <option value="Job Costing">Job Costing</option>
                          <option value="Labor">Labor</option>
                          <option value="Materials">Materials</option>
                          <option value="Subcontractor">Subcontractor</option>
                          <option value="Advertising And Marketing">
                            Advertising And Marketing
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-[93px]">
                      <p>Amount</p>
                      <div>
                        <input
                          name="amount"
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* <div>
                    <p>Currency</p>
                    <div>
                      <input type="text" />
                    </div>
                     focus:outline-none              </div> */}

                    <div className="flex items-center gap-[82px]">
                      <p>
                        Invoice#<span className="text-red-600">*</span>
                      </p>
                      <div className="flex items-center">
                        <input
                          name="invoiceNumber"
                          className="focus:outline-none rounded-md w-40 h-8 text-xs text-black p-2"
                          type="text"
                          defaultValue={'INV-00001'}
                        />
                      </div>
                    </div>
                    <div className="flex items-start gap-[108px]">
                      <p>Notes</p>
                      <div className=" flex  w-80 ">
                        <textarea
                          name="notes"
                          placeholder="Notes"
                          className="focus:outline-none rounded-md  text-xs w-64 text-black p-2"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-36">
                      <button
                        className="bg-secondary py-2 px-3 rounded-md text-sm text-black"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className=" rounded-md bg-white py-2 px-3 text-sm text-black"
                        type="reset"
                      >
                        Cancel
                      </button>
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

export default AddnewExpense;
