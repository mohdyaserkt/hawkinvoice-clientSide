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
import { useRouter } from "next/navigation";
import Image from "next/image";
import ChartComponent from "@/components/home/chart";
import PieChart from "@/components/home/pichart";
import ExpensePieChart from "@/components/home/pichart";
import { handleGetAllRecievables } from "@/utils/home/getAllRecievable";
import { handleGetSalesTableData } from "@/utils/home/getSalesTableData";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const username = useAppSelector((state) =>
    state.authReducer.value.email.split("@")
  );
  const orgname = useAppSelector(
    (state) => state.orgReducer.value.businessName
  );
  const [allRecievables, setallRecievables] = useState<any>();
  const [salesTable, setsalesTable] = useState<any>();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    handleGetAllRecievables()
      .then(({ data }: any) => {
        setallRecievables(data.allRecievables);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

    handleGetSalesTableData()
      .then(({ data }: any) => {
        setsalesTable(data.tableData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
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
                <Image
                  width={32}
                  height={32}
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="logo"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex" style={{ height: "calc(100vh - 47px)" }}>
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <div className="flex items-center bg-secondary  h-7 rounded-lg space-x-2">
              <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
              <Link href={"/home"}>
                <p className="text-sm text-white">Home</p>
              </Link>
            </div>
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
              <Link href={"/customers"}>
                <p className="text-sm text-white">Customers</p>
              </Link>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <PiHandbag className="w-4 h-4 ml-2 text-white " />
              <Link href={"/items"}>
                <p className="text-sm text-white">Items</p>
              </Link>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <LiaFileInvoiceSolid className="w-4 h-4 ml-2 text-white" />
              <Link href={"/invoices"}>
                <p className="text-sm text-white">Invoices</p>
              </Link>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <Image
                width={16}
                height={16}
                src="/recievedpayments.svg"
                alt=""
                className="w-4 h-4 ml-2 text-white"
              />
              <Link href={"/home"}>
                <p className="text-sm text-white">Payments Recieved</p>
              </Link>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <TbReceipt className="w-4 h-4 ml-2 text-white" />
              <Link href={"/expenses"}>
                <p className="text-sm text-white">Expenses</p>
              </Link>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <BsFileEarmarkBarGraph className="w-4 h-4 ml-2 text-white" />
              <Link href={"/allreports"}>
                <p className="text-sm text-white">Reports</p>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white flex gap-3">
                <div className="w-12 h-12">
                  <Image
                    width={50}
                    height={50}
                    alt="Logo"
                    className="object-cover rounded-lg"
                    src={
                      "https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                    }
                  />
                </div>
                <div className="items-center">
                  <h2 className="text-lg">
                    Hello, {username[0] || "User Name"}
                  </h2>
                  <h2 className="text-[13px] text-secondary">
                    {orgname || "Organization Name"}
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="pt-7 pl-16 flex flex-col gap-11 overflow-y-auto border-b"
              style={{ maxHeight: "calc(100vh - 136px)" }}
            >
              <div className="h-52 w-[998px] rounded-lg">
                <div className="w-full h-[49px] bg-orange-300rounded-lg border rounded-t-lg bg-secondary py flex  items-center justify-between px-5">
                  <h1 className="text-base text-gray-800">
                    Sales and Expenses
                  </h1>
                  <select
                    name=""
                    id=""
                    className="bg-inherit texts-sm text-gray-800"
                  >
                    <option className="text-gray-800 texts-sm" value="">
                      This Financial Year
                    </option>
                  </select>
                </div>
                <div className="w-full h-[67px]  border-b border-x py-2">
                  <div className="relative pt-1 px-2 flex flex-col gap-1">
                    <p className="text-[10px] text-secondary">
                      Total Receivables ₹
                      {allRecievables?.allrecievables[0]?.totalSum || 0}.00
                    </p>
                    <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-amber-200">
                      <div
                        style={{ width: "10%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                      <div
                        style={{ width: "15%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                      ></div>
                      <div
                        style={{ width: "25%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[92px] rounded-b-lg border-b border-x flex justify-around p-3 items-center">
                  <div className="border-e pr-6">
                    <div className="">
                      <p className="text-xs text-white">CURRENT</p>
                      <h3 className="text-white text-xl">
                        ₹{allRecievables?.allrecievables[0]?.totalSum || 0}.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white">OVERDUE</p>
                    <h3 className="text-white text-xl">
                      ₹{allRecievables?.overdueOneToFifteenDays || 0}.00
                    </h3>
                    <p className="text-secondary text-xs">1-15 Days</p>
                  </div>
                  <div className="">
                    <h3 className="text-white text-xl">
                      ₹{allRecievables?.overdueSixteenToThirtyDays || 0}.00
                    </h3>
                    <p className="text-secondary text-xs">16-30 Days</p>
                  </div>

                  <div>
                    <h3 className="text-white text-xl">
                      ₹{allRecievables?.overdueThirtyOneToFortyFiveDays || 0}.00
                    </h3>
                    <p className="text-secondary text-xs">31-45 days</p>
                  </div>

                  <div>
                    <h3 className="text-white text-xl">
                      ₹{allRecievables?.overdueAboveFortyFiveDays || 0}.00
                    </h3>
                    <p className="text-secondary text-xs">Above 45 days</p>
                  </div>
                </div>
              </div>

              <div className="h-[363px] w-[998px] rounded-lg border">
                <div className="w-full h-[49px] bg-orange-300rounded-lg border-b rounded-t-lg bg-secondary py flex  items-center justify-between px-5">
                  <h1 className="text-base text-gray-800">
                    Sales and Expenses
                  </h1>
                  <select
                    name=""
                    id=""
                    className="bg-inherit texts-sm text-gray-800"
                  >
                    <option className="text-gray-800 texts-sm" value="">
                      This Financial Year
                    </option>
                  </select>
                </div>

                <ChartComponent />
              </div>

              <div className="mb-5 flex gap-5">
                <div className="w-[515px] h-[433px]  rounded-lg border">
                  <div className="w-full h-[49px] bg-orange-300rounded-lg border-b rounded-t-lg bg-secondary py flex  items-center justify-between px-5">
                    <h1 className="text-base text-gray-800">
                      Your Top Expenses
                    </h1>
                    <select
                      name=""
                      id=""
                      className="bg-inherit text-sm text-gray-800"
                    >
                      <option value="">This Month</option>
                    </select>
                  </div>

                  <div className="w-full h-full">
                    <ExpensePieChart />
                  </div>
                </div>

                <div className="w-[515px] h-[433px]  rounded-lg border">
                  <div className="w-full h-[49px] bg-orange-300rounded-lg border-b rounded-t-lg bg-secondary py flex  items-center justify-between px-5">
                    <h1 className="text-base text-gray-800">
                      Sales, Receipts, and Dues
                    </h1>
                  </div>
                  <div className="p-3  flex items-center">
                    <table className="w-full border-separate border-spacing-6">
                      <thead className="text-secondary">
                        <tr>
                          <th></th>
                          <th>SALES</th>
                          <th>RECEIPTS</th>
                          <th>DUE</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#408DFB] text-center ">
                        <tr className="mb-5">
                          <td className="text-start">Today</td>
                          <td>₹{salesTable?.todaysData?.totalSales || 0.0}</td>
                          <td>
                            ₹{salesTable?.todaysData?.totalReceipts || 0.0}
                          </td>
                          <td>₹{salesTable?.todaysData?.totalDues || 0.0}</td>
                        </tr>
                        <tr className="mb-5">
                          <td className="text-start">This Week</td>
                          <td>
                            ₹{salesTable?.thisMonthData?.totalSales || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisMonthData?.totalReceipts || 0.0}
                          </td>
                          <td>₹{salesTable?.thisMonthData?.totalDues || 0.0}</td>
                        </tr>
                        <tr className="mb-5">
                          <td className="text-start">This Month</td>
                          <td>
                            ₹{salesTable?.thisMonthData?.totalSales || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisMonthData?.totalReceipts || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisMonthData?.totalDues || 0.0}
                          </td>
                        </tr>
                        <tr className="mb-5">
                          <td className="text-start">This Quarter</td>
                          <td>
                            ₹{salesTable?.thisQuarterData?.totalSales || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisQuarterData?.totalReceipts || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisQuarterData?.totalDues || 0.0}
                          </td>
                        </tr>
                        <tr className="mb-5">
                          <td className="text-start">This Year</td>
                          <td>
                            ₹{salesTable?.thisYearData?.totalSales || 0.0}
                          </td>
                          <td>
                            ₹{salesTable?.thisYearData?.totalReceipts || 0.0}
                          </td>
                          <td>₹{salesTable?.thisYearData?.totalDues || 0.0}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
