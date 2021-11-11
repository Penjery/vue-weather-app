<template>
  
    <div class="main">
        <div class="container">
            <Maininfo />
            <Dinfo />
        </div>
    </div>

</template>

<script>
import Maininfo from '@/components/Maininfo.vue'
import Dinfo from '@/components/Dinfo.vue'

export default {
    name: 'Home',
    components: {
        Maininfo,
        Dinfo
    }
}

</script>
