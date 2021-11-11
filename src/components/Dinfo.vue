<template>
    <div class="d-info">
        
        <div v-for="wl in fullListWeather" :key="wl" class="s-card">
            <div>
                <div class="d-day">{{ad(wl.dt).day}}</div>
                <div class="d-date">{{ad(wl.dt).num}} {{ad(wl.dt).m}}</div>
                <div class="d-temp">{{Math.round(wl.main.temp)}}°</div> 
            </div>
            <div>
                <img v-if="wl.weather[0].icon == '01d'" class="d-icon" src="el/sun-1.svg">
                <img v-if="wl.weather[0].icon == '01n'" class="d-icon" src="el/moon.svg">

                <img v-if="wl.weather[0].icon == '02d'| wl.weather[0].icon == '02n'" class="d-icon" src="el/cloud-sunny.svg">
                <img v-if="wl.weather[0].icon == '03d'| wl.weather[0].icon == '03n' | wl.weather[0].icon == '04d'| wl.weather[0].icon == '04n'" class="d-icon" src="el/cloud.svg">
                <img v-if="wl.weather[0].icon == '10d'| wl.weather[0].icon == '10n'" class="d-icon" src="el/cloud-drizzle.svg">
                <img v-if="wl.weather[0].icon == '13d'| wl.weather[0].icon == '13n'| wl.weather[0].icon == '09d'| wl.weather[0].icon == '09n'" class="d-icon" src="el/cloud-snow.svg">
                <img v-if="wl.weather[0].icon == '11d'| wl.weather[0].icon == '11n'" class="d-icon" src="el/cloud-lightning.svg">
                <img v-if="wl.weather[0].icon == '50d'| wl.weather[0].icon == '50n'" class="d-icon" src="el/cloud-fog.svg">
            </div>
        </div>

    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name: 'Dinfo',
    computed: mapGetters(["fullListWeather"]),
    methods: {
        ad: function(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let dateObject = new Date(a);
            var time = {
                day: dateObject.toLocaleString("en-US", {weekday: "long"}),
                num: dateObject.toLocaleString("en-US", {day: "numeric"}),
                m: dateObject.toLocaleString("en-US", {month: "short"})
            }
            return time;
        }
    }
}
</script>
