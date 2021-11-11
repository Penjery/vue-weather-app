<template>

  <nav class="he">
        <div class="nav-wrapper">
            <router-link to="/"><div class="logo" >WEATHER</div></router-link>

            <div style="display: flex;">
                <div class="search">
                    <form @submit.prevent="submit">
                        <input v-model="city" placeholder="city" class="search-input" type="text">
                        <button class="gg" type="submit"><img class="search-icon" src="el/search.svg"></button>
                    </form>
                </div>
                <div class="dropdown">
                    <button class="dropbtn"><img class="search-icon" src="el/category.svg"></button>
                    <div class="dropdown-content">
                        <button v-on:click="change('dark')">Dark</button>
                        <button v-on:click="change('default')">Default</button>
                    </div>
                </div>
            </div>

        </div>
    </nav>

</template>

<script>
import {mapActions} from 'vuex';
import router from '../router'

export default {
    name: 'Nav',
    data: function () {
        return {
            city: '',
            theme: 'default'
        }
    },
    methods: {
        ...mapActions(['fetchWeather']),
        submit() {
            router.push(this.city);
            this.fetchWeather(this.city);
        },
        change: function(gg) {
            this.theme = gg;
            document.getElementById("theme").href="style/"+gg+".css";
            localStorage.setItem('theme', gg);
            console.log(this.theme);
        }
    },
    mounted() {
        let activeTheme = localStorage.getItem('theme');
        if(activeTheme === 'dark'){

            document.getElementById("theme").href="style/dark.css";
        }else{

            document.getElementById("theme").href="#";
        }
    }
}

</script>
