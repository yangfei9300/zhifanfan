<template>
	<view>
		<image src="/static/chenjinshi.png" class="topimgZ" mode="widthFix"></image>
		<image src="/static/chenjinshi.png" mode="widthFix" class="yincang1"></image>
		<view class="colonn center_center pore" style="top:-150rpx">
			<image class="headerimg" src="../../static/ch1.png"></image>
			<view class="h-30"></view>
			<view class="fs-40">枝繁繁的能量女孩</view>
			<view class="h-80"></view>
			<view class=" colonn center_center">
				<view>基本信息</view>
				<view class="h-20"></view>
				<view class="line112"></view>
			</view>
			<view class="h-30"></view>

			<view class="colonn">
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 姓名</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>
				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 手机号码</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>

				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 性别</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>

				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 生日</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>

				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 肤质</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>
				<view class="h-80"></view>
				<view class=" colonn center_center">
					<view>第三方账号信息</view>
					<view class="h-20"></view>
					<view class="line112"></view>
				</view>
				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 抖音</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>
				<view class="h-30"></view>
				<view class="roww">
					<view class="w-150" style="text-align: center;line-height: 100rpx;"> 小红书</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-35" placeholder="请输入" class="allline fs-35" />
					</view>
				</view>
				
				<view class=" roww center_center m-top-50">
					<image src="/static/baocun.png" 
					class="w-300" 
					mode="widthFix"></image>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url(userInfo.css);
</style>