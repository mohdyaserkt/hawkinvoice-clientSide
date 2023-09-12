import React, { useState } from "react";

const Createinvoice = ({ item ,handleInputChange,index }: any) => {
  const [isopened, setisopened] = useState(false);
  return (
    <tr className="border h-16">
      <td className="text-start pl-1">
        <textarea
          onFocus={() => setisopened(!isopened)}
          onBlur={() => setisopened(!isopened)}
          placeholder=" Type or click to select an item."
          className="border-none bg-transparent rounded-md text-xs w-64 p-2 focus:outline-none placeholder:text-white"
        ></textarea>

        <div
          className={`${
            isopened ? "flex" : "hidden"
          } absolute bg-primary text-black rounded-md w-80 p-5 border   flex-col gap-3 ml-[-6px] mt-4  `}
        >
          <div className="text-secondary border rounded-md hover:text-blue-500">
            <h1 className="font-bold p-3 ">New Item</h1>
          </div>
          <div className="text-secondary border rounded-md hover:text-blue-500">
            <h1 className="font-bold p-3">New Item</h1>
          </div>
          <div className="text-secondary border rounded-md hover:text-blue-500">
            <h1 className="font-bold p-3">New Item</h1>
          </div>
        </div>
      </td>
      <td className="text-center">
        <input
          type="text"
          name="quantity"
          defaultValue={`${item.quantity}.00`}
           onChange={(e) => handleInputChange(e, index)}
          className="bg-transparent focus:outline-none rounded-md text-center text-xs"
        />
      </td>
      <td className="text-center">
        <input
          type="text"
          name="rate"
            onChange={(e) => handleInputChange(e, index)}
          defaultValue={`${item.rate}.00`}
          className="bg-transparent focus:outline-none rounded-md text-center text-xs"
        />
      </td>
      <td className="text-center">{item.quantity * item.rate}.00</td>
    </tr>
  );
};

export default Createinvoice;
