import React from 'react';
// import ProgressBar from './ProgressBar';
import ProgressBar from './Progressbar';
// import './App.css';

const App = () => {
  const skills = [
    { label: 'CRM', percentage: 80 },
    { label: 'E-COMMERCE', percentage: 85 },
    { label: 'WORDPRESS, JOOMLA, PHP', percentage: 75 },
    { label: 'PSD, HTML, CSS, JS', percentage: 70 },
  ];

  return (
    <div className="App container mx-auto mt-10 p-5">
      {skills.map((skill, index) => (
        <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default App;