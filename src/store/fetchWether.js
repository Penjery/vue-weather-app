import axios from "axios"
const API = '' // your API key

export default {
    state: {
        temp: 0,
        feels_like: 0,
        temp_max: 0,
        temp_min: 0,
        name: 'Loading...',
        country: '',
        pressure: 0,
        humidity: 0,
        wind_speed: 'Loading...',
        wind_direction: 0,
        cloudiness: 0,
        sunrise: 0,
        sunset: 0,
        type: null,

        wl: []
    },
    mutations: {
        updateWeatherInfo(state, weather) {
            state.temp = weather.main.temp;
            state.feels_like = weather.main.feels_like;
            state.temp_max = weather.main.temp_max;
            state.temp_min = weather.main.temp_min;
            state.name = weather.name;
            state.country = weather.sys.country;
            state.pressure = weather.main.pressure;
            state.humidity = weather.main.humidity;
            state.wind_speed = weather.wind.speed;

            if(weather.wind.deg >= 337 && weather.wind.deg <= 23)
                state.wind_direction = 'North';
            if(weather.wind.deg > 24 && weather.wind.deg <= 68)
                state.wind_direction = 'Northeast';
            if(weather.wind.deg >= 69 && weather.wind.deg <= 113)
                state.wind_direction = 'East';
            if(weather.wind.deg > 114 && weather.wind.deg <= 158)
                state.wind_direction = 'Southeast';
            if(weather.wind.deg >= 159 && weather.wind.deg <= 203)
                state.wind_direction = 'South';
            if(weather.wind.deg > 204 && weather.wind.deg <= 248)
                state.wind_direction = 'Southwest';
            if(weather.wind.deg > 249 && weather.wind.deg <= 293)
                state.wind_direction = 'West';
            if(weather.wind.deg > 294 && weather.wind.deg <= 336)
                state.wind_direction = 'Northwest';

            state.cloudiness = weather.clouds.all;
            state.sunrise = weather.sys.sunrise;
            state.sunset = weather.sys.sunset;
            state.type = weather.weather[0].icon;
        },
        updateWeatherInfoN(state, wl){

            state.wl = wl;
        }
    },
    actions: {
        async fetchWeather(ctx, city = 'London') {
            let one = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+API;
            let two = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid='+API;

            const reqOne = axios.get(one);
            const reqTwo = axios.get(two);

            await axios.all([reqOne, reqTwo]).then(axios.spread((...res) =>{
                const resOne = res[0]
                const resTwo = res[1]

                ctx.commit('updateWeatherInfo',resOne.data);

                const result = [];
                for (let i=7; i<resTwo.data.list.length; i+=8){
                    result.push(resTwo.data.list[i]);   
                }    
                ctx.commit('updateWeatherInfoN',result);
            })).catch(errors => {
                alert("404");
            })
        }
    },
    getters: {
        fullInfo(state) {
            return state;
        },
        fullListWeather(state){
            return state.wl;
        }
    }
}