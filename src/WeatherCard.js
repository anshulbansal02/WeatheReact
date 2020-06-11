import React from 'react';
import './weather-card.css';
import CountryCodes from './countryCodes';

class WeatherCard extends React.Component {

    state = {
        weatherIcon: null,
        bgColor: "#ffc7c2",
        textColor: "#f02424"
    };

    schemes = {
        clear: { weatherIcon: "clear", bgColor: "#ffcf91", textColor: "#ff740a" },
        cloudy: { weatherIcon: "cloudy", bgColor: "#1da2c4", textColor: "#36b8c9" },
        drizzle: { weatherIcon: "drizzle", bgColor: "#cae0e8", textColor: "#3698c9" },
        rain: { weatherIcon: "rain", bgColor: "#a1b2c2", textColor: "#2685de" },
        smoke: { weatherIcon: 'smoke', bgColor: "#c3c4c9", textColor: "#17181c" },
        thunderstorm: { weatherIcon: "thunderstorm", bgColor: "#ffc7c2", textColor: "#f02424" },
        snow: {weatherIcon: "snow", bgColor: "#d0f2ed", textColor: "#0affda" },
        haze: { weatherIcon: "haze", bgColor: "#ffc7c2", textColor: "#f02424" },
        tornado: { weatherIcon: "tornado", bgColor: "#ffc7c2", textColor: "#f02d424" },
        error: { weatherIcon: "wind-icon", bgColor: "#ffc7c2", textColor: "#f02d424" },
    }

    assingScheme = (wId) => {
        if (232 >= wId >= 200) {
            return this.schemes.thunderstorm
        }
        else if (321 >= wId >= 300) {
            return this.schemes.drizzle
        }
        else if (540 >= wId) {
            console.log("assinged rain")
            return this.schemes.rain
            
        }
        else if (622 >= wId >= 600) {
            return this.schemes.snow
        }
        else if ([731, 761, 762, 771].includes(wId)) {
            return this.schemes.haze
        }
        else if ([711, 701, 721, 741, 751].includes(wId)) {
            return this.schemes.smoke
        }
        else if (wId === 781) {
            return this.schemes.tornado
        }
        else if (wId === 800) {
            return this.schemes.clear
        }
        else if (804 >= wId >= 801) {
            
            return this.schemes.cloudy
        }
        else {
            console.log("assinged else to " + wId)
            return  this.schemes.cloudy
        }
    }


    assignScreen = () => {
        if (this.props.data) {
            const scheme = this.assingScheme(this.props.data.id);
            if (scheme) {
            return (
                <div 
                className="weather-card"
                style={{background: `linear-gradient(0deg, ${scheme.bgColor} 0%, #ffffff 100%)`}}
                >
                <h3 style={{color: scheme.textColor}}>{this.props.data.location}, {CountryCodes[this.props.data.code]}</h3>

                <div className="main-info">
                    <div>
                    <h1>{this.props.data.temperature}°C</h1>
                    <h2>{this.props.data.description}</h2>
                    </div>
                    <img src={`./weather-icons/${scheme.weatherIcon}.svg`} alt="Sunny" />
                </div>

                <div className="meta">
                    <div>
                        <img src="./wind-icon.svg" alt="Wind Speed"/>
                        <p>{this.props.data.wind_speed} m/s</p>
                    </div>
                    <div>
                        <img src="./humidity-icon.svg" alt="Humidity"/>
                        <p>{this.props.data.humidity}%</p>
                    </div>
                    <div>
                        <img src="./pressure-icon.svg" alt="Precipitation"/>
                        <p>{this.props.data.pressure} hPa</p>
                    </div>
                </div>
            </div>
            );
        }
    }
        else {
            return (<div className="weather-card" style={{background: `linear-gradient(0deg, #ffc1ba 0%, #ffffff 100%)`}}>
                <div className="error">
                    <img src="./error-icon.svg" alt="ERROR!"/>
                    <p>Unable to fetch weather data.</p>
                </div>
            </div>);
        }
    }
   

    render () {
        
        return (
            this.assignScreen()
        );
    
    }
}

export default WeatherCard;


/*


schemes = {
        clear: { weatherIcon: "clear", bgColor: "#ffc7c2", textColor: "#f02424" },
        cloudy: { weatherIcon: "cloudy", bgColor: "#ffc7c2", textColor: "#f02424" },
        drizzle: { weatherIcon: "drizzle", bgColor: "#ffc7c2", textColor: "#f02424" },
        rain: { weatherIcon: "rain", bgColor: "#ffc7c2", textColor: "#f02424" },
        smoke: { weatherIcon: 'smoke', bgColor: "#ffc7c2", textColor: "#f02424" },
        thunderstorm: { weatherIcon: "thunderstorm", bgColor: "#ffc7c2", textColor: "#f02424" },
        snow: {weatherIcon: "snow", bgColor: "#ffc7c2", textColor: "#f02424" },
        haze: { weatherIcon: "haze", bgColor: "#ffc7c2", textColor: "#f02424" },
        tornado: { weatherIcon: "tornado", bgColor: "#ffc7c2", textColor: "#f02424" },
    }
*/