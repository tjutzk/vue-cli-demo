<template>
    <div class="container">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <v-tags></v-tags>
        <router-view></router-view>
    </div>
</template>

<script>
import VHeader from './Header.vue';
import VSidebar from './Sidebar.vue';
import VTags from './Tags.vue';
export default {
    data(){
        return{}
    },
    components:{
        VHeader,
        VSidebar,
        VTags
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height:100%;
    }
</style>




