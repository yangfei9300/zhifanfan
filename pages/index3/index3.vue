<template>
	<view>
		<view class="colonn">
			<image src="https://shandongtibohui.zsyflive.com/profile/Maskgroup.png"
			mode="widthFix" class="w-750 topviewfix"
			></image>
			<view class="topview colonn">
				<view style="width: 750rpx;" :style="{
						'height':(buttoninfo.bottom+20)+'px',
					}"></view>

				<swiper class="w-710 h-280 m-all-20">
					<swiper-item class="w-710 h-280">
						<image src="/static/banner1.png" class="w-710 h-280"></image>
					</swiper-item>
				</swiper>
			</view>
			<view :style="{
				'height':goodHight+'px'
			}"></view>
			<view class="h-30"></view>
			<view class="colonn">
				<view class="roww " style="padding:0rpx 20rpx;font-weight: bold;">
					<view>热门话题</view>
				</view>
				<scroll-view 
					scroll-x
					style="width: 710rpx;margin:20rpx;"
				>
					<view class="w-710 roww">
						<image class="img111" src="/static/Group_166.png" v-for="(item,index) in 5"></image>
					</view>
				</scroll-view>
				<view class="colonn bottombigview">
					<view class="h-30"></view>
					<view class="roww rowsa">
						<view class="colonn center_center">
							<view class="typetxt">推荐</view>
							<view class="fenseline"></view>
						</view>
						<view class="colonn center_center">
							<view class="">推荐</view>
							<view class="fenseline yincang1"></view>
						</view>
						<view class="colonn center_center">
							<view class="">推荐</view>
							<view class="fenseline yincang1"></view>
						</view>
					</view>
					
					<view class="huanhang rowsb p-all-20">
						<image v-for="(item,index) in 3"
							src="/static/img1.png" 
							class="w-340 h-520 m-bottom-20" 
							mode="widthFix"
						></image>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttoninfo: {}, //胶囊按钮信息
				systemInfo: {}, //设备信息
				goodHight: 0,
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
			var bili = systemInfo.windowWidth / 750;
			console.log("比例", bili);
			this.goodHight = bili * 557;
		},
		methods: {

		}
	}
</script>

<style>
	@import url(index3.css);
</style>