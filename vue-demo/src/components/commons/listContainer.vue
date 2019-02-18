<template>
    <div class="router-item-wrapper">
        <list-item 
            v-for="(item, index) in routerItems" :key="index"
            :router-item="item"
            @click.native="onGotoPath(item.path)"
            @remove-item="handleRemoveRouterItem(item)"
        ></list-item>
    </div>
</template>

<script>
import ListItem from './listItem'
const COMPONENT_NAME = 'router-item-wrapper'
const mockData = [
    {name: 'home', path: '/', active: false},
    {name: 'about', path: '/', active: false},
    {name: 'fooo', path: '/', active: true},
    {name: 'barr', path: '/', active: false},
    {name: 'apple', path: '/', active: false},
    {name: 'linda', path: '/', active: false},
    {name: 'claver', path: '/', active: true}
]

export default {
    name: COMPONENT_NAME,
    data() {
        return {
            routerItems: mockData
        }
    },
    methods: {
        onGotoPath(url) {
            this.$router.push(url)
        },
        handleRemoveRouterItem(item) {
            this.routerItems.forEach((path, index, arr) => {
                if(path['name'] === item['name']) {
                    arr.splice(index, 1)
                }
            })
            console.log(this.routerItems)
        }
    },
    components: {
        ListItem
    }
}
</script>

<style scoped>

</style>
