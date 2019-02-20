<template>
  <div class="data_container">
    <span class="demonstration">{{timeData.name}}</span>
		<div class="data_content">
			<el-date-picker
				v-model="timeData.value"
				type="daterange"
				range-separator="至"
				start-placeholder="开始日期"
				end-placeholder="结束日期"
				value-format="timestamp"
				:size="sizeTransform()"
				:style="widthTransform()"
				:class="{active_border:isActive()}">
    		</el-date-picker>
		<span class="data_require" v-show="timeData.isRequire">*</span>
		</div>
  </div>
</template>

<script>
	export default {
		data(){
			return{
				timeData:this.data,
				mySize:this.size,
				myWidth:this.width,
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
			},
		},

		methods: {
			sizeTransform(){
				return this.mySize === "medium" ? "large" : this.mySize
			},
			widthTransform(){
				let styleObject = {}
				styleObject["width"] = parseInt(this.myWidth) * 2 + "px"
				return styleObject
			},
			isActive(){
				if(this.timeData.isRequire){
					return this.timeData.value=="" ? true : false
				}
        	}, 
		}
	};
</script>
<style scoped>
	.data_container{
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.data_container .data_content{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-left: 10px;
	}

	.data_content span{
		color: red;
		font-size: 20px;
	}
</style>
