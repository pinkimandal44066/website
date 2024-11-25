// import React from 'react';
// // import ProgressBar from './ProgressBar';
// import ProgressBar from './Progressbar';
// // import './App.css';

// const App = () => {
//   const skills = [
//     { label: 'CRM', percentage: 80 },
//     { label: 'E-COMMERCE', percentage: 85 },
//     { label: 'WORDPRESS, JOOMLA, PHP', percentage: 75 },
//     { label: 'PSD, HTML, CSS, JS', percentage: 70 },
//   ];

//   return (
//     <div className="App container mx-auto mt-10 p-5">
//       {skills.map((skill, index) => (
//         <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
//       ))}
//     </div>
//   );
// };

// export default App;












import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-800">{label}</span>
        <span className="text-lg font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-gray-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsProgress = () => {
  const skills = [
    { label: 'CRM', percentage: 80 },
    { label: 'E-COMMERCE', percentage: 85 },
    { label: 'WORDPRESS, JOOMLA, PHP', percentage: 75 },
    { label: 'PSD, HTML, CSS, JS', percentage: 70 },
  ];

  return (
    <div className="px-6 py-8">
      {skills.map((skill, index) => (
        <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default SkillsProgress;
