<template>
	<view>
		<view class="p-all-30">
			<view class="colonn w-690 br-30  background1 p-all-30">
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>收件人</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入收件人" 
						class="allline fs-35"
						 />
					</view>
				</view>
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>手机号码</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入手机号码" 
						class="allline fs-35"
						 />
					</view>
				</view>
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>选择地区</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入选择地区" 
						class="allline fs-35"
						 />
					</view>
				</view>
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>详细地址</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入详细地址" 
						class="allline fs-35"
						 />
					</view>
				</view>
				<view class="roww center_center">
					<image 
					src="/static/xuanzhong1.png" 
					class="w-40 h-40"
					></image>
					<view class="w-20"></view>
					<view class="fs-35">设为默认地址</view>
					<view class="allline"></view>
				</view>
				
			</view>
		</view>
		
		<view class=" roww center_center m-top-50">
			<image src="/static/baocun.png" 
			class="w-300" 
			mode="widthFix"></image>
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
@import url(addAddress.css);
</style>
