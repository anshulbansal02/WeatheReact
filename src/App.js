import React from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import weather from './api/weather';
import './app.css';


class App extends React.Component {

    state = {
        data: null,
        background: null
    };



    fetchBackground = async (des) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: des
            }
        });
        return response
    }


    fetchWeather = async (query) => {
        console.log('Running fetchWeather')
        const response = await weather.get('/data/2.5/weather?appid=d47bc80a025474805889956634c8367b', {
            params: query
        });

    
        //const bg = await this.fetchBackground(this.response.weather.description);

        this.setState({
            data: {
                location: response.data.name,
                temperature: Math.round(response.data.main.temp-273.15),
                description: response.data.weather[0].main,
                wind_speed: response.data.wind.speed,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                id: response.data.weather[0].id,
                code: response.data.sys.country
            },
            //background: bg.results[Math.floor(Math.random() * results.length)].urls.regular
        })

    }


    render() {
        return (
            <div className="app">
                <SearchBar onSub={this.fetchWeather}/>
                <WeatherCard data={this.state.data}/>
            </div>
        );
    }
}

export default App;