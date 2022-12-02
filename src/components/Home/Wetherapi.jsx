import React, { useEffect, useState } from 'react'
import './styles/WetherApp.scss'

export const Wetherapi = () => {
    const [searcvalue, setSearchvalue]  = useState("pune");
    const [tempInfo, setTempInfo]  = useState({});
    const [whetherState, setWetherState] = useState("");
    const searchWetherInfo = async ()=>{

        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searcvalue}&unit s=metric&appid=4e05dc88c50f53b1d150acaf59e83aaf`;
            let res = await fetch(url);
            let data  = await res.json();            
            const {temp, humidity, pressure} = data.main;
            const { main:wethermood} = data.weather[0];
            const{name} = data;
            const {speed} = data.wind;
            const{country, sunset} = data.sys;        
            const myNewWether = {
                temp, humidity, pressure, wethermood, name, speed, country, sunset
            };
          
            let sec = sunset;
            let date = new Date(sec);
            let timeStr = `${date.getHours}:${date.getMinutes}`
            setTempInfo(myNewWether);
            console.log(temp);

        }catch(err){
            console.log(err);
        }
    }
    // useEffect(()=>{
    //     if(wethermood){
    //         switch (wethermood) {
    //             case "Clouds": setWetherState("wi-day-cloudy");                            
    //                 break;
            
    //             default:
    //                 break;
    //         }
    //     }
    // },[wethermood]);
    useEffect(()=>{
        searchWetherInfo();
    },[])
  return (
    <div className='Wether-App'>
        <input type="search" className="" value={searcvalue} onChange={(e)=>setSearchvalue(e.target.value)}></input>
        <button onClick={searchWetherInfo}>Wether Info</button>
        <div className=''>
        <div className=''>{tempInfo.temp}</div>
        <div className=''>{tempInfo.humidity}</div>
        <div className=''>{tempInfo.pressure}</div>
        <div className=''>{tempInfo.wethermood}</div>
        <div className=''>{tempInfo.name}</div>
        <div className=''>{tempInfo.speed}</div>
        <div className=''>{tempInfo.timeStr}</div>
        </div>
    </div>
  )
}
