import React from 'react';

interface ProgressItem {
  color: string;
  value: number;
}

interface StackedProgressBarProps {
  progressData: ProgressItem[];
}

const StackedProgressBar: React.FC<StackedProgressBarProps> = ({ progressData }) => {
  const total = progressData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-gray-300 h-4 w-full rounded-full relative">
      {progressData.map((item, index) => (
        <div
          key={index}
          className={`bg-${item.color}-${Math.round((item.value / total) * 100)} h-full absolute left-0 top-0`}
          style={{ width: `${(item.value / total) * 100}%` }}
        ></div>
      ))}
    </div>
  );
};

export default StackedProgressBar;
