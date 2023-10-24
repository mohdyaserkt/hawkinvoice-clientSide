import React from 'react';
import Link from 'next/link';
import { IoIosWarning } from 'react-icons/io';

interface MyComponentProps {
  href: string;
  warningWord: string;
}

const EmptyDataReport= () => {
  return (
    <div className="flex w-3/5 border-[1px] border-white border-dashed rounded-lg p-6 mt-10">
      <div className="w-full justify-center flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <IoIosWarning className="text-yellow-400 w-10 h-10" />
          <h1 className="text-base text-blue-500 text-center">
            Attention: Currently, there are no any Data under This Category
          </h1>
          <IoIosWarning className="text-yellow-400 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default EmptyDataReport;
