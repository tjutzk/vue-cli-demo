<template>
    <div class = "header">
        <div class="header_left">
            <div class="collapse_btn" @click="changeCollapse">
                <i class="el-icon-menu"></i>
            </div>
            <div class="logo">
                后台管理系统
            </div>
        </div>
        <div class="header_right">
            <div class="fullscreen">
                <el-tooltip content="全屏" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <div class="message">
                <el-tooltip content="有5条未读消息" placement="bottom">
                    <i class="el-icon-bell"></i>
                </el-tooltip>
            </div>
            <div class="user_img">
                <img src="../../img/img.jpg" />
            </div>
            <div class="admin_select">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>关于作者</el-dropdown-item>
                        <el-dropdown-item>项目仓库</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            
        </div>
    </div>
</template>
<script>
    import bus from './bus.js'
    export default {
        data () {
            return {
                collapse:false,
            }
        },
        methods: {
            changeCollapse:function(){
                this.collapse = !this.collapse;
                bus.$emit('collapse',this.collapse);
            }
        }
    }
</script>
<style scoped>
    div{
        margin:0;
        padding: 0;
    }

    .header,.header_left,.header_right{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .header{
        width: 100%;
        height: 70px;
        background-color: rgb(36, 47, 66);
        color: #fff;
        justify-content: space-between;
        font-size: 24px;
    }

    .header_left{
        margin-left: 20px;
    }

    .header_left .logo{
        margin-left: 20px;
    }

    .header_right{
        margin-right: 40px;
    }

    .header_right .user_img{
        margin-right: 10px;
    }
    
    .header_right .fullscreen,.header_right .message{
        margin-right: 20px;
    }

    .header_right .user_img img{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .header_right .admin_select .el-dropdown-link{
        font-size:16px;
        color: #fff;
    }
</style>

