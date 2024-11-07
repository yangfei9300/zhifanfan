<template>
	<view>
		
		
		
		<view class="topview colonn"
		>
			<view
			:style="{
				height:buttoninfo.bottom+'px'
			}"
			></view>
			
			<view class="colonn p-all-40">
				<view class="fs-28">当前积分</view>
				<view class="h-20"></view>
				<view class="roww w-670 duiqi">
					<view class="fw-800 fs-55 " style="color: #A16740;line-height: 120rpx;">1399</view>
					<view class="allline"></view>
					<view class="guizee">当前规则</view>
				</view>
			</view>
			<view class="w-750">
				<v-tabs
				bgColor=""
				 v-model="current"
				 activeColor="#FFA0C1" 
				 lineColor="#FFA0C1"  
				 :scroll="false" 
				 :tabs="tabs" 
				 @change="changeTab"
				 ></v-tabs>
			</view>
			<view class="h-30"></view>
		</view>
		
		
		<scroll-view scroll-y 
		:style="{
			height:(systemInfo.windowHeight-goodHight)+'px'
		}"
		>
			
		
		<view class="roww rowsb p-all-25" >
			<view class="colonn">
				<homeGoodItem 
				v-for="(item,index) in goodList"
				 :obg="item"
				 class="">
					
				</homeGoodItem>
			</view>
			<view class="colonn">
				<homeGoodItem
				v-for="(item,index) in goodList"
				 :obg="item" class="">
					
				</homeGoodItem>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [
				  '全部',
				  '护肤',
				  '美妆',
				  '数码',
				  '母婴',
				  '生活',
				],
				
				buttoninfo:{},//胶囊按钮信息
				systemInfo:{},//设备信息
				goodHight:0,
				
				goodList:[
					{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good11.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good2.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good3.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good4.png'
					}
				]
			}
		},
		onLoad() {
			// 获取胶囊的位置
			var info= uni.getMenuButtonBoundingClientRect();
			this.buttoninfo=info;
			var systemInfo= uni.getSystemInfoSync();
			this.systemInfo=systemInfo;
			console.log(systemInfo);
			
			// 顶部的高度转换
			var bili=systemInfo.windowWidth/750;
			console.log("比例",bili);
			this.goodHight=bili*494;
			
		},
		methods: {
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			},
		}
	}
</script>

<style>
@import url(index2.css);
</style>
