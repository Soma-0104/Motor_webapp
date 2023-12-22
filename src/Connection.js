
import React,{useEffect, useState} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { rdb } from './firebaseConfig';
import { ref,onValue } from 'firebase/database'
import Battery from './pages/Battery';


function Connection() {

  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchRef = ref(rdb,'batterydat/');
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
    <Battery actualVoltage={Math.floor(item.actualVoltage)} ratedVoltage={Math.floor(item.ratedVoltage)}
    actualCurrent={Math.floor(item.actualCurrent)} ratedCurrent={Math.floor(item.ratedCurrent)}
    batteryPercent={item.batteryPercent}
    noOfCell={item.noOfCell}
    temperature={item.temperature}
    type={item.Type}
    manufacturer={item.manufacturer}
    capacity={item.ratedPower}/>
    </div>
    )
      })
     }
    
    </div>
  );
};

export default Connection;
