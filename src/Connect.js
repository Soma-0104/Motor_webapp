import React,{useEffect, useState} from 'react';
import 'react-circular-progressbar/dist/styles.css';
// import './src/pages/styles/CircularProgressBar.css'
import { rdb } from './firebaseConfig';
import { ref,onValue } from 'firebase/database'
import CircularProgressBar from './pages/CircularProgressBar';
// import Battery from './pages/Battery';


function Connect() {

  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchRef = ref(rdb,'motordat/');
    onValue(fetchRef, (snapshot) =>{
      const adata = snapshot?.val();
      const motorData = Object.keys(adata).map(key => ({
         id: key,
         ...adata[key] 
      }));
      setData(motorData);
  });
  },[]);
  
 
  return (  
    <div>
    {
     data.map((item, index)=>{
    return(
    <div key={index} className="flex flex-row flex-wrap ml-1 h-full">
    <CircularProgressBar actualVoltage={Math.floor(item.actualVoltage)} ratedVoltage={Math.floor(item.ratedVoltage)}
    actualCurrent={Math.floor(item.actualCurrent)} ratedCurrent={Math.floor(item.ratedCurrent)}
    actualRPM={Math.floor(item.actualRPM)} ratedRPM={Math.floor(item.ratedRPM)}
    actualTorque={Math.floor((60*item.actualVoltage*item.actualCurrent)/(2*(3.14)*item.actualRPM))} ratedTorque={Math.floor((60*item.ratedVoltage*item.ratedCurrent)/(2*(3.14)*item.ratedRPM))}
    actualPower={item.actualPower} ratedPower={item.ratedPower}
    actualTemperature={Math.floor(item.temperature)}
    humidity={item.humidity}
    type={item.Type}
    manufacturer={item.manufacturer}
    maintenance={item.maintenance}/>
    </div>
    )
      })
     }
    
    </div>
  );
};

export default Connect;
