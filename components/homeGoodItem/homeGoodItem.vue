<template>
	<view>
		<view class="colonn goodview" @click.stop="togoodinfo">
			<image class="w-340  br-20" mode="widthFix" 
			src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/good4x.png">
			</image>
			<view class="h-20"></view>
			<view class="goodname  w-284 m-left-28">
				k姐推荐】繁妆水油双萃轻润稳弹悬油双萃面
			</view>
			<view class="h-15"></view>
			<view class="roww">
				<image class="xinpinicon  w-284 m-left-28" 
				src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/xinpin1.png"></image>
				<image class="xinpinicon  w-284 m-left-28" 
				src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/remai1.png"></image>
			</view>
			<view class="h-15"></view>
			<view class="roww w-284 duiqi m-left-28">
				<view class="roww duiqi" style="color: red;">
					<view class="fs-25">￥</view>
					<view class="fs-35">654</view>
				</view>
				<view class="allline"></view>
				<view class="yishou">已售656</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "homeGoodItem",
		data() {
			return {

			};
		},
		methods: {
			togoodinfo() {
				uni.navigateTo({
					url: "/pages1/goodInfo/goodInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(homeGoodItem.css);
	
</style>