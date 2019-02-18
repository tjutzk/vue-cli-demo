<template>
	<div class="select_container">
		<span class="select_title">{{data.name}}</span>
		<div class="select_content">
			<el-select v-model="selectData.value" placeholder="请选择">
				<el-option
					v-for="item in selectData.options"
					:key="item.id"
					:label="item.label"
					:value="item.id">
				</el-option>
			</el-select>
			<span class="select_require" v-show="selectData.isRequire">*</span>
		</div>
	</div>
</template>

<script>
  export default {
	data() {
		return {
			selectData:this.data
		}
	},
	props:{
		data:{
			type:Object,
            default:function(){
                return {}
            }
		}
	}
  }
</script>

<style scoped>
	.select_container, 	.select_container .select_content{
		display: flex;
		flex-direction: row;
		justify-content: flex-start
	}

	.select_container{
		align-items: center;
	}

	.select_content span{
		color: red;
		font-size: 20px;
	}
</style>
