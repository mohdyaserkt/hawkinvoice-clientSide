import { formatDate } from '@/utils/Invoice/getInvoices';
import React from 'react';

const InvoiceComponent = ({ mainInvoice, orgname }:any) => {
  

  return (
    <div id="report" className="bg-white rounded-xl w-[1035px] text-gray-900 p-8">
        <p onClick={()=>window.print()}>print</p>
      <div className="flex justify-between border-b">
        <div className="mb-6">
          <div className="flex items-center">
            <img
              className="rounded-xl"
              width={80}
              height={80}
              src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg"
              alt="logo"
            />
            <h2 className="text-2xl">{orgname}</h2>
          </div>
          <div className="text-[15px]">
            <p>my address</p>
            <p>helo, City, state,676306</p>
            <p>+91 875432198, +91 875432198</p>
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <h1 className="font-semibold text-[22px]">
            Invoice #{mainInvoice?.invoiceNumber}
          </h1>
          <div className="flex flex-col text-[15px]">
            <p>
              Date Issued:
              {formatDate(
                mainInvoice?.invoiceDate
                  ? mainInvoice.invoiceDate
                  : new Date()
              )}
            </p>
            <p>
              Date Due:{" "}
              {formatDate(
                mainInvoice?.dueDate
                  ? mainInvoice.dueDate
                  : new Date()
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-60 my-8">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[15px]">Invoice To:</h1>
          </div>
          <div className="text-sm flex flex-col gap-1">
            <p>{mainInvoice?.customerName}</p>
            <p>street 1, street 2</p>
            <p>city, state 0HF</p>
            <p>+91 718-986-6062</p>
            <p>{mainInvoice?.customerEmail}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[15px]">Bill To:</h1>
          </div>
          <div className="text-sm flex gap-5">
            <div className="flex flex-col gap-1">
              <p>Total Due:</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>
                ₹
                {mainInvoice?.status === "paid"
                  ? 0
                  : mainInvoice?.Total}
                .00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="min-w-full">
          <thead className="text-xs">
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ITEM
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                COST
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                QTY
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                PRICE
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-[15px]">
            {mainInvoice?.itemDetails.map((item:any, index:Number) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.itemName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ₹{item.rate}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ₹{item.quantity * item.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-8">
        <div className="text-[15px] flex flex-col gap-2">
          <div className="flex gap-1">
            <p>Salesperson:</p>
            <p>{mainInvoice?.salesPerson}</p>
          </div>
          <div>
            <p>{mainInvoice?.customerNotes}</p>
          </div>
        </div>
        <div className="flex items-center gap-10 mr-[51px]">
          <div className="flex flex-col gap-2 text-sm">
            <p>Subtotal:</p>
            <p>Discount:</p>
            <p>Total:</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p> ₹{mainInvoice?.subTotal}</p>
            <p>₹{mainInvoice?.discount}</p>
            <p>₹{mainInvoice?.Total}</p>
          </div>
        </div>
      </div>

      <div className="border-t items-center">
        <div className="flex gap-1 items-center mt-8">
          <p className="text-base">Note:</p>
          <p className="text-[14px]">
            ₹{mainInvoice?.termsAndConditions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
