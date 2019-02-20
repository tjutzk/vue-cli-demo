<template>
	<div class="select_container">
		<span class="select_title">{{data.name}}</span>
		<div class="select_content">
			<el-select 
				v-model="selectData.value" 
				placeholder="请选择" 
				:size="mySize" 
				:style="styleObject" 
				:class="{active_border:isActive()}">
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
				selectData:this.data,
				mySize:this.size,
				styleObject:{
						width:this.width,
				},
			}
		},
		props:{
			data:{
				type:Object,
				default:function(){
						return {}
				}
			},
			size:{
				type:String,
				default:function(){
						return {}
				}
			},
			width:{
					type:String,
					default:function(){
							return ""
					}
			}
		},
		methods:{
			isActive(){
				if(this.selectData.isRequire){
						return String(this.selectData.value)=="" ? true : false
				}
      }, 
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

	.select_container .select_content{
		margin-left: 10px;
	}

	.select_content span{
		color: red;
		font-size: 20px;
	}
</style>
