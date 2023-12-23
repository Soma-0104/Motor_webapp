// CircularProgressBar.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/CircularProgressBar.css';
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
  maintenance,
}) => {
  const progressData = useMemo(
    () => [
      { name: 'Voltage', currentPercentage: actualVoltage, totalPercentage: ratedVoltage },
      { name: 'Current', currentPercentage: actualCurrent, totalPercentage: ratedCurrent },
      { name: 'RPM', currentPercentage: actualRPM, totalPercentage: ratedRPM },
      { name: 'Torque', currentPercentage: actualTorque, totalPercentage: ratedTorque },
      { name: 'Power', currentPercentage: actualPower, totalPercentage: ratedPower },
      { name: 'Temperature', currentPercentage: actualTemperature },
      { name: 'Humidity', currentPercentage: humidity },
    ],
    [
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
    ]
  );

  const [progressDetails, setProgressDetails] = useState(
    progressData.map(() => ({ currentPercentage: 0 }))
  );

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

  useEffect(() => {
    if (maintenance === 'Maintenance required') {
      // Display an alert message
      alert('Maintenance is required! Please take action.');
    }
  }, [maintenance]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar maintenance={maintenance} />
      <div className="progress-bars-container">
        <div className={`my-1 pr-1 w-full p-6 border rounded-3xl ${maintenance === 'No maintenance required' ? 'bg-green-200 border-green-200' : 'bg-red-200 border-red-200'}`}>
          <img width="42px" height="42px" src="https://svgshare.com/i/10e7.svg" alt="Logo" />
          <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{type}</p>
          <p className="mt-1 font-normal text-gray-500">Manufactured by {manufacturer}</p>
          <p className="font-normal text-gray-500">Rated Voltage: {ratedVoltage}</p>
          <p className="font-normal text-gray-500">Rated Current: {ratedCurrent}</p>
          <p className="font-normal text-gray-500">Rated RPM: {ratedRPM}</p>
          <p className="font-normal text-gray-500">Status: {maintenance}</p>
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
                        textSize:'15px',
                        pathColor: maintenance === 'No maintenance required' ? '#4CAF50' : '#FF5733',
                      })}
                    />
                  ) : progressData[index].name === 'Humidity' ? (
                    <CircularProgressbar
                      value={progress.currentPercentage}
                      text={`${progress.currentPercentage}%`}
                      styles={buildStyles({
                        textColor: '#000',
                        textSize:'15px',
                        pathColor: maintenance === 'No maintenance required' ? '#4CAF50' : '#FF5733',
                      })}
                    />
                  ) : (
                    <CircularProgressbar
                      value={(progress.currentPercentage / progressData[index].totalPercentage) * 100}
                      text={`${progressData[index].currentPercentage}/${progressData[index].totalPercentage}`}
                      styles={buildStyles({
                        textColor: '#000',
                        textSize:'15px',
                        pathColor: maintenance === 'No maintenance required' ? '#4CAF50' : '#FF5733',
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
