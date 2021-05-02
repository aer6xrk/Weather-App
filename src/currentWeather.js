import "./weather.css"

function CurrentWeatherComponent ({weather}) {

    console.log(weather);


    return(
    <>
        <h2 className="city">{weather.name}</h2>
        <div className = 'currentweatherdiv'>
        <h1>{weather.main.temp} &deg;F</h1>
        </div>
        <div className='currentweatherdiv'>
        <h1>{weather.weather[0].main}</h1>
        </div>
    </>
    );






}; 

export default CurrentWeatherComponent;