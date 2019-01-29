<template>
    <div>
        <v-header></v-header>
        <v-sidebar></v-sidebar>
    </div>
</template>

<script>
import VHeader from './Header.vue';
import VSidebar from './Sidebar.vue';
export default {
    data(){
        return{}
    },
    components:{
        VHeader,
        VSidebar,
    },
}
</script>



