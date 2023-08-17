import React, { useState, useEffect } from 'react';

interface Weather {
  date: string;
  dayOfWeek: string;
  maxTemp: number;
  minTemp: number;
  currentTemp: number;
  icon: string;
}

const TOKYO_ID = '1850147'; // 東京のID
const API_KEY = '38f549c3a8256d3d9b6cbf102ae12217'; 

const TokyoWeather: React.FC = () => {
  const [forecast, setForecast] = useState<Weather[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${TOKYO_ID}&appid=${API_KEY}&units=metric&lang=ja`);
      const data = await response.json();
      const transformedData = data.list.filter((_: any, index: number) => index % 8 === 0).map((entry: any): Weather => {
        const dateObject = new Date(entry.dt_txt);
        const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
        return {
          date: dateObject.toLocaleDateString(),
          dayOfWeek: dayNames[dateObject.getDay()],
          maxTemp: Math.round(entry.main.temp_max),
          minTemp: Math.round(entry.main.temp_min),
          currentTemp: Math.round(entry.main.temp),
          icon: `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`,
        };
      });
      setForecast(transformedData);
    }

    fetchWeather();
  },[]);

  return (
    <div className='round rounded-lg border border-white mt-5'>
        <h1 className='text-white ml-1'>Tokyo</h1>
        <div className='flex flex-wrap  h-28 items-center mt-5'>
      {forecast.map((day, index) => (
        <div key={index} className='text-slate-300 text-xs mx-1'>
          <p>{day.dayOfWeek}曜日</p>
          <p>{day.maxTemp}°C</p>
          <p>{day.minTemp}°C</p>
          <img src={day.icon} alt="weather icon" />
        </div>
      ))}
        </div>
    </div>
  );
};

export default TokyoWeather;




