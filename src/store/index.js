import { createStore } from 'vuex'
import fetchWeather from './fetchWether'

export default createStore({
    modules: {
        fetchWeather
    }
})
