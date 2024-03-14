import React, { useState } from "react"
import styles from "./GetAndDisplayWeather.module.css"

export default function GetAndDisplayWeather() {

	const [temperature, setTemperature] = useState(10);
	const [winds, setWinds] = useState(3);
	const [windsClass, setWindsClass] = useState(styles.green)
	const [tempClass, setTempClass] = useState(styles.green)
	const [forecastTime, setForecastTime] = useState(1)

	
	/*data.properties.timeseries[forecastTime].data.instant.details.air_temperature */

	React.useEffect(()=>{
		fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9&lon=10.7")
	.then((response) => response.json())
	.then((data => {
		setTemperature(data.properties.timeseries[forecastTime].data.instant.details.air_temperature)
		setWinds(data.properties.timeseries[forecastTime].data.instant.details.wind_speed)
		checkStyles();
	}))


	})

	function checkStyles(){
		setTempClass(temperature < 10 ? styles.blue: styles.green)
		setWindsClass(winds < 10 ? styles.red: styles.green)
	}

	function handleForecastTime(event) {
		setForecastTime(event.target.value)
	}

	return (
		<>
		<h2>Weather in 1 hour will be</h2>
		<input type="number" defaultValue={1} onChange={handleForecastTime}/>
		<p><span className={tempClass}>{temperature} degrees</span> culsius, <span className={windsClass}>{winds} m/s winds</span></p>
		</>
	)
}