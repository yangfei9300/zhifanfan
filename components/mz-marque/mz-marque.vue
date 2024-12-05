<template>
	<view class="marque-container">
		<slot name="leftIcon" v-if="leftIcon">
			<image class="left_icon" 
			mode="aspectFit" 
			src="https://shandongtibohui.zsyflive.com/profile/volume up 1.png"/>
		</slot>
		<view id="marque" class="marque-content" 
		:class="{'arrow-left':direction=='horizontal','arrow-up'
		:direction=='vertical'}" :style="{height:height+'rpx',lineHeight:height+'rpx'}" >
			<view class="marque-line" 
			:class="{'transition-v':translateY !=0}" 
			:style="{transform:'translateX('+translateX+'px) translateY('+translateY+'px)'}">
				<text class="item" :style="{height:height+'rpx'}" 
				v-for="(item,index) in copyList">{{item[field]}}</text>
			</view>
		</view>
		<slot name="rightIcon" v-if="rightIcon"></slot>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				translateX: 0, 
				translateY:0,
				copyList:[],
				interval:null
			}
		},
		props:{
			height:{
				type:[Number,String],
				default:80
			},
			marqueList:{//消息列表
				type:Array,
				default:()=>[]
			},
			direction:{//滚动方向 横向滚动：horizontal，纵向滚动：vertical；
				type:String,
				default:"vertical"
			},
			loop:{ //是否循环头尾相接
				type:Boolean,
				default:true
			},
			speed:{ //滚动速度,秒
				type:Number,
				default:3
			},
			leftIcon:{
				type:Boolean,
				default:false
			},
			rightIcon:{
				type:Boolean,
				default:false
			},
			field:{ // 自定义字段
				type:String,
				default:"title"
			}
		},
		watch:{
			marqueList:{
				handler(newVal, oldVal)  {
					if(this.interval){
						clearInterval(this.interval)
					}
					this.copyList = JSON.parse(JSON.stringify(this.marqueList))
					this.$nextTick(()=>{
						if(this.marqueList.length <=1 && this.direction == 'vertical')return
						this.transformFun()
					})
				},
				immediate: true,
				deep: true
			}
		},
		mounted(){
		},
		methods:{
			transformFun() {
				let count = 0;
				let addFlag = true
				let query = uni.createSelectorQuery().in(this);
				query.selectAll('#marque .item').boundingClientRect(data => {
					count = data.reduce((pre,item)=>{
						return pre + (this.direction == 'horizontal' ? item.width : item.height)
					},0)
				}).exec()
				let inner = this.copyList;
				this.interval = setInterval(() => {
					let transform = this.direction == 'horizontal' ? this.translateX : this.translateY
					if(this.loop){
						if (-transform >= count / 2 && addFlag) {
							this.copyList = this.copyList.concat(inner);
							addFlag = false
						} else if (-transform >= count) {
							this.copyList = this.copyList.slice(0, this.marqueList.length);
							this.$nextTick(()=>{
								this.direction == 'horizontal' ? (this.translateX = 0) : (this.translateY = 0)
							})
							addFlag = true
						}
					}else{
						let dft = this.direction == 'horizontal' ? (count - 20) : (count - count/this.marqueList.length)
						if(-transform >= dft){
							this.direction == 'horizontal' ? this.translateX = 0 : this.translateY = 0
							return
						}
					}
					this.direction == 'horizontal' ? this.translateX-- : this.translateY -= count/this.marqueList.length
				},this.direction == 'horizontal' ? this.speed*10:this.speed*1000)
			}
		}
	}
</script>

<style scope>
	.marque-container {
		display: flex;
		align-items: center;
		padding: 0 10rpx;
		background-color: #FCE1E1;
		width: 700rpx;
	}
	.left_icon {
		width: 48rpx;
		min-width: 48rpx;
		height: 48rpx;
	}
	.marque-content {
		margin-left: 10rpx;
	}
	.marque-line {
		-webkit-backface-visibility: hidden;
	}
	.marque-line .item {
		-webkit-transform: translate3d(0, 0, 0);
	}
	.arrow-left {
		overflow: hidden;
		word-break:keep-all;
		white-space:nowrap;  
	}
	.arrow-left .item{
		padding: 0 15rpx;
		transition:  all .4s;
	}
	.arrow-up {
		overflow: hidden;
	}
	.arrow-up .transition-v {
		transition:  all 1s;
	}
	.arrow-up .item {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>