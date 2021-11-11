<template>
    <Nav />
    <router-view/>
</template>

<script>
import {mapActions} from 'vuex';
import Nav from '@/components/Nav.vue'

export default {
    components: {
        Nav
    },
    methods: {
        ...mapActions(['fetchWeather'])
    },
    async mounted() {
        this.fetchWeather(this.$route.params.city);
    }
}

</script>
