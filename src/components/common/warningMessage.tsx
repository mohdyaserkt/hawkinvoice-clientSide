import React from 'react';
import Link from 'next/link';
import { IoIosWarning } from 'react-icons/io';

interface MyComponentProps {
  href: string;
  warningWord: string;
}

const WarningMessage: React.FC<MyComponentProps> = ({ href, warningWord }) => {
  return (
    <div className="flex w-3/5 border-[1px] border-white border-dashed rounded-lg p-6 mt-10">
      <div className="w-full justify-center flex flex-col gap-5">
        <div className="w-full flex items-center justify-center">
          <IoIosWarning className="text-yellow-400 w-10 h-10" />
          <h1 className="text-base text-blue-500 text-center">
            Attention: Currently, there are no {warningWord}s under your organization. Please create a new {warningWord} to proceed.
          </h1>
          <IoIosWarning className="text-yellow-400 w-10 h-10" />
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href={href}>
            <button className="bg-secondary rounded w-36 h-10 px-3 text-sm">
              + New {warningWord}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarningMessage;
