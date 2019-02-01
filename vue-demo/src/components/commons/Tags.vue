<template>
    <div class="tag">
        <ul class="tag_option">
            <li v-for="item in tagList" :key="item.title">
                <span>{{item.title}}</span>
                <span>x</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tagList:[
                {
                    title:'系统首页',
                    path:'systemhome'
                },
                {
                    title:'基础表格',
                    path:'basictable',
                },
                {
                    title:'tab选项卡',
                    path:'tab'
                },
                {
                    title:'图标',
                    path:'chart'
                }
            ]
        }
    }
}
</script>

<style scoped>
ul,li{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.tag{
    width:100%;
    height: 30px;
}

.tag_option{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center
}

.tag_option li{
    margin-right: 15px;
    border:1px solid #cccccc;
    border-radius: 5px;
    padding: 1px;
}

</style>


