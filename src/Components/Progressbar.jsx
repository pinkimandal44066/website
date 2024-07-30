





import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-black h-6 rounded-full"
          style={{ width: `${percentage}%` }}  // Corrected syntax: `${percentage}%`
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
