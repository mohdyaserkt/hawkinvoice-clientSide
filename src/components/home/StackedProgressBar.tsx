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
    <div className="bg-gray-300 h-4 w-full rounded-full">
      {progressData.map((item, index) => (
        <div
          key={index}
          className={`bg-${item.color}-500 h-full w-${(item.value / total) * 100}% rounded-full`}
        ></div>
      ))}
    </div>
  );
};

export default StackedProgressBar;
