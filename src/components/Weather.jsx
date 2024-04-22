import { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'

export default function Weather(){

    const [location, setLocation] = useState("")
    const [weatherData, setWeatherData] = useState(null)

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const fetchWeatherData = () => {
        if (!location) return
      
        fetch(`http://api.weatherapi.com/v1/current.json?key=56ee47dab5b34523b48232404241704&q=${location}`)
            .then(res => res.json())
            .then(res => setWeatherData(res.current))
            .catch(error => console.error("There was an error fetching.", error))
        
            
    }

    useEffect (() => {
        fetchWeatherData()
    }, [])

    return (
        <div>
            <h1>Weather App</h1>
            <input type='text' placeholder='Enter Location Here' value={location} onChange={handleLocationChange} />
            <button onClick={fetchWeatherData}>Search</button>
            <WeatherCard weatherData={weatherData}/>
        </div>
    )
}