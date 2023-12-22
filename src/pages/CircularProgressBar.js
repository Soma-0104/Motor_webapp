import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/CircularProgressBar.css'
import Sidebar from './Sidebar';


const CircularProgressBar = ({
  actualVoltage,
  ratedVoltage,
  actualCurrent,
  ratedCurrent,
  actualRPM,
  ratedRPM,
  actualTorque,
  ratedTorque,
  actualPower,
  ratedPower,
  actualTemperature,
  humidity,
  type,
  manufacturer,
}) => {
  
  const progressData = [
    { name: 'Voltage', currentPercentage: actualVoltage, totalPercentage: ratedVoltage },
    { name: 'Current', currentPercentage: actualCurrent, totalPercentage: ratedCurrent },
    { name: 'RPM', currentPercentage: actualRPM, totalPercentage: ratedRPM },
    { name: 'Torque', currentPercentage: actualTorque, totalPercentage: ratedTorque },
    { name: 'Power', currentPercentage: actualPower, totalPercentage: ratedPower },
    { name: 'Temperature', currentPercentage: actualTemperature },
    { name: 'Humidity', currentPercentage: humidity },
  ];

  const [progressDetails, setProgressDetails] = useState(progressData.map(() => ({ currentPercentage: 0 })));


  useEffect(() => {
    const interval = setInterval(() => {
      setProgressDetails((prevProgressDetails) =>
        prevProgressDetails.map((progress, index) => {
          const newPercentage =
            progress.currentPercentage < progressData[index].currentPercentage
              ? progress.currentPercentage + 1
              : progress.currentPercentage;

          return { ...progress, currentPercentage: newPercentage };
        })
      );
    }, 5);
    
    return () => clearInterval(interval);
  }, [progressData]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="progress-bars-container">
      <div className="my-1 pr-1 w-full p-6 bg-green-200 border-green-200 rounded-3xl">
        <img
      width="42px"
      height="42px"
      src="https://svgshare.com/i/10e7.svg"
        />
          <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{type}</p>
          <p className="mt-1 font-normal text-gray-500">Manufactured by {manufacturer}</p>
          <p className="font-normal text-gray-500">Rated Voltage: {ratedVoltage}</p>
          <p className="font-normal text-gray-500">Rated Current: {ratedCurrent}</p>
          <p className="font-normal text-gray-500">Rated RPM: {ratedRPM}</p>
          <p className="font-normal text-gray-500">Status: No maintenance required</p>
        </div>
        <br></br>
        <div className="progress-bars">
          {progressDetails.map((progress, index) => (
            <div key={index} className="card other-card">
              <div className="card-content">
                <div className="task-name">{progressData[index].name}</div>
                <div className="percentage-info">
                  {progressData[index].name === 'Temperature' ? (
                    <CircularProgressbar
                      value={progress.currentPercentage}
                      text={`${progressData[index].currentPercentage}°C`}
                      styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#4CAF50',
                        textSize: '12px', // Adjust the size of the text
                      })}
                    />
                  ) : progressData[index].name === 'Humidity' ? (
                    <CircularProgressbar
                      value={progress.currentPercentage}
                      text={`${progress.currentPercentage}%`}
                      styles={buildStyles({
                        textColor: '#000',
                        pathColor: '#4CAF50',
                        textSize: '12px', 
                      })}
                    />
                  ) : (
                    <CircularProgressbar
                      value={(progress.currentPercentage / progressData[index].totalPercentage) * 100}
                      text={`${progressData[index].currentPercentage}/${progressData[index].totalPercentage}`}
                      styles={buildStyles({
                        textColor: '#000',  
                        pathColor: '#4CAF50',
                        textSize: '12px', 
                      })}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
