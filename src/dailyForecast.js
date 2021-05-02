
import {useState, useEffect} from "react";
import moment from "moment";

function DailyWeatherForecast ({forecast}) {
    const [display, setDisplay]= useState(false);


    console.log(forecast)

let weekTemp=[];
for (let i=0; i<= 7; i++) {
    weekTemp.push((forecast.daily[i].temp.day) + "          ")
}; 

let weekDays=[moment().format('dddd')];
for (let d=1; d<=7; d++) {
    weekDays.push(moment().add(d, 'days').format('dddd'))
}
console.log(weekDays);

let hourIntervals = [];
for (let r=1; r<=48; r++) {
    hourIntervals.push(moment().add(r, 'hours').calendar())
}

console.log(hourIntervals);

let hourlyTemp=[];
for (let h=0; h<=47; h++) {
    hourlyTemp.push((forecast.hourly[h].temp))
};

console.log(moment(forecast.current.dt).format('lll'));



if (display == false) {
    return(
        <>
        <div className = 'buttondiv'>
        <button onClick={() => setDisplay(false)}>Daily Forecast</button>
        <button onClick={() => setDisplay(true)}>Hourly Forecast</button>
        </div>
        <div className='dailydiv'>
            <div id='days'>
            {weekDays.map((day) => 
                <h3 className='day'>{day}</h3>)};
            </div>
             <div id = 'temps'>
            {weekTemp.map((temp) => (
                <h3 className='temp'>{temp} &deg;F</h3>))};
            </div>
        </div>
        </>

    )};

return (
<>
<div className = 'buttondiv'>
<button onClick={() => setDisplay(false)}>Daily Forecast</button>
<button onClick={() => setDisplay(true)}>Hourly Forecast</button>
</div>
<div className = 'hourlydiv'>
    <div id='hours'>
    {hourIntervals.map((hour) => 
     <h3 className = 'hour'>{hour}</h3>)}
    </div>
    <div id='temps2'>
    {hourlyTemp.map((temp) => (
        <h4 className = 'temp2'>{temp} &deg;F</h4>
))};
    </div>
</div>
</>
)


};

export default DailyWeatherForecast