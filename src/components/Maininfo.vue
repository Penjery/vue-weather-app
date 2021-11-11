<template>
    <div class="main-info">
        <div class="main-info-card">
            
            <div class="temper">
                <div class="temp-m">
                    {{Math.round(fullInfo.temp)}}°
                </div>
                <div class="temp-f">
                    feels like {{Math.round(fullInfo.feels_like)}}°
                </div>
                <div class="temp-mm">
                    <div class="temp-ma">
                        {{Math.round(fullInfo.temp_max)}}↑
                    </div>
                    <div class="temp-mi">
                        {{Math.round(fullInfo.temp_min)}}↓
                    </div>
                </div>
            </div>

            <div class="ic">
                <img v-if="fullInfo.type == '01d'" class="icc" src="el/sun-1.svg">
                <img v-if="fullInfo.type == '01n'" class="icc" src="el/moon.svg">

                <img v-if="fullInfo.type == '02d'| fullInfo.type == '02n'" class="icc" src="el/cloud-sunny.svg">
                <img v-if="fullInfo.type == '03d'| fullInfo.type == '03n' | fullInfo.type == '04d'| fullInfo.type == '04n'" class="icc" src="el/cloud.svg">
                <img v-if="fullInfo.type == '10d'| fullInfo.type == '10n'" class="icc" src="el/cloud-drizzle.svg">
                <img v-if="fullInfo.type == '13d'| fullInfo.type == '13n'| fullInfo.type == '09d'| fullInfo.type == '09n'" class="icc" src="el/cloud-snow.svg">
                <img v-if="fullInfo.type == '11d'| fullInfo.type == '11n'" class="icc" src="el/cloud-lightning.svg">
                <img v-if="fullInfo.type == '50d'| fullInfo.type == '50n'" class="icc" src="el/cloud-fog.svg">
            </div>

        </div>
        <div class="main-info-card" style="display: block;">
            <div class="name-time">
                <div class="h">{{fullInfo.country}} {{fullInfo.name}}</div>
            </div>
            
            <div class="other">
                
                <div class="acc">
                    <div class="a-info">
                        <img class="icc-se" src="el/pressure.svg"><div class="what">pressure</div><div class="res">{{fullInfo.pressure}}</div><span class="metr">hPa</span>
                    </div>
                    <div class="a-info">
                        <img class="icc-se" src="el/drop.svg"><div class="what">humidity</div><div class="res">{{fullInfo.humidity}}</div><span class="metr">%</span>
                    </div>
                    <div class="a-info">
                        <img class="icc-se" src="el/wind.svg"><div class="what">wind speed</div><div class="res">{{fullInfo.wind_speed}}</div><span class="metr">m/s</span>
                    </div>
                    <div class="a-info">
                        <img class="icc-se" src="el/arrow.svg"><div class="what">wind direction</div><div class="res">{{fullInfo.wind_direction}}</div>
                    </div>
                    <div class="a-info">
                        <img class="icc-se" src="el/cloud.svg"><div class="what">сloudiness</div><div class="res">{{fullInfo.cloudiness}}</div><span class="metr">%</span>
                    </div>
                </div>
                
                <div class="d-n">
                    <div class="a-info">
                        <img class="icc-ss" src="el/sun-1.svg"><div class="what">sunrise</div><div class="ress">{{ad(fullInfo.sunrise).hour}}:{{ad(fullInfo.sunrise).minute}}</div>
                    </div>
                    <div class="a-info">
                        <img class="icc-ss" src="el/moon.svg"><div class="what">sunset</div><div class="ress">{{ad(fullInfo.sunset).hour}}:{{ad(fullInfo.sunset).minute}}</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Maininfo',
    computed: mapGetters(["fullInfo"]),
    methods: {
        ad: function(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let dateObject = new Date(a);
            var time = {
                hour: dateObject.toLocaleString("en-GB", {hour: "numeric",hour12:false,timeZone:"Europe/Moscow"}),
                minute: dateObject.toLocaleString("en-GB", {minute: "numeric",hour12:false,timeZone:"Europe/Moscow"})
            }
            return time;
        }
    }
}
</script>
