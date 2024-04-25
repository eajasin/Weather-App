import PropTypes from "prop-types";

export default function WeatherCard({ weatherData }) {
    return (
      <div>
        {weatherData && (
          <div>
            <h4>Weather Information:</h4>
            <p>Humidity: {weatherData.humidity}</p>
            <p>Temperature: {weatherData.temp_f}°F</p>
            <p>Condition: {weatherData.condition.text}</p>
            
          </div>
        )}
      </div>
    );
  }

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    humidity: PropTypes.number.isRequired,
    condition: PropTypes.number.isRequired,
    temp_f: PropTypes.number.isRequired
  }).isRequired,

}