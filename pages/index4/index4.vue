<template>
	<view>
		<view class="colonn topview">
			<view class="barvie roww center_center" :style="{
					'height':(buttoninfo.height+20)+'px',
					'top':(buttoninfo.top-10)+'px',
				}">
				<view class="w-40"></view>
				<view class="leftimg"></view>
				<view class="roww">
					<view class="fenh1">1</view>
					<view class="maohao">:</view>
					<view class="fenh1">1</view>
					<view class="maohao">:</view>
					<view class="fenh1">1</view>
				</view>
				<view class="allline"></view>
			</view>
			<view class="colonn  goodtopview" :style="{
					'top':(buttoninfo.top-10+buttoninfo.height+20)+'px',
				}">
				<view class="h-20"></view>
				<view class="roww center_center " style="padding:0rpx 20rpx;">
					<image class="jianou"></image>
					<view class="jinrichaodi">今日抄底</view>
					<view class="allline"></view>
					<view class="roww">
						<image class="w-30 h-30 bgg1"></image>
						<view class="w-15"></view>
						<view class="fs-25" style="color: #FE236C;">规则</view>
					</view>
				</view>
				<view class="h-20"></view>
				<scroll-view scroll-x class="w-670 roww scrools">
					<view class="roww ">
						<view class="goodview1 colonn" v-for="(item,index) in 18">
							<view class="h-26"></view>
							<image class="goodimg1"></image>
							<view class="h-10"></view>
							<view class="goodname1 txtShowLength">洁柔纸抽</view>
							<view class="roww duiqi" style="color: red;">
								<view class="fs-20">￥</view>
								<view class="fs-30">20.00</view>
							</view>
						</view>
					</view>

				</scroll-view>
				<!--  -->
			</view>
			<view class="background1 topmenus  w-750" >
				<view class="topmenus1">
					<v-tabs bgColor="" v-model="current" 
					activeColor="#000000" 
					lineColor="#ff6883" 
					:scroll="false"
					:tabs="tabs" @change="changeTab"></v-tabs>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-y
		style="position: fixed;bottom: 0rpx;"
		:style="{
			height:(systemInfo.windowHeight-goodHight)+'px',
		}"
		>
			
		
		<view class="roww rowsb p-all-25" >
			<view class="colonn">
				<homeGoodItem 
				v-for="(item,index) in 8" class="">
					
				</homeGoodItem>
			</view>
			<view class="colonn">
				<homeGoodItem
				v-for="(item,index) in 8" class="">
					
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
				buttoninfo: {}, //胶囊按钮信息
				systemInfo: {}, //设备信息

				current: 0,
				tabs: [
					'全部',
					'护肤',
					'美妆',
					'数码',
					'母婴',
					'生活',
				],
				goodHight:0,

			}
		},
		onLoad() {
			// 获取胶囊的位置
			var info = uni.getMenuButtonBoundingClientRect();
			this.buttoninfo = info;
			var systemInfo = uni.getSystemInfoSync();
			this.systemInfo = systemInfo;
			console.log(systemInfo);
			
			// 顶部的高度转换
			var bili=systemInfo.windowWidth/750;
			console.log("比例",bili);
			this.goodHight=bili*692;
			
		},
		methods: {
			changeTab(index) {
				console.log('当前选中的项：' + index)
			},
		}
	}
</script>

<style>
	@import url(index4.css);
</style>