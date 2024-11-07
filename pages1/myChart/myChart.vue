<template>
	<view>
		<view class="colonn">
			<view class="roww goodview" v-for="(item,index) in goodList">
				<image class="goodimg" 
				:src="item.src"></image>
				<view class="colonn">
					<view class="w-500 fs-30 txtShowLength1"
					style="font-weight: bold;"
					>收到了焚枯食淡付款了都是浪费看电视剧乐山大佛看</view>
					<view class="roww" style="color: #999999;">
						<view class="fs-25">1.23ML【2支装】</view>
					</view>
					<view class="roww">
						<view class="roww duiqi fw-b" 
						style="color: #FE236C;">
							<view class="fs-25">￥</view>
							<view class="fs-35">200</view>
							<view class="fs-25">.00</view>
						</view>
						<view class="allline"></view>
						<view class="roww center_center">
							<image src="../../static/-.png" class="w-40 h-40"></image>
							<view class="inputview">
								<input class="" 
								style="max-width: 30rpx;text-align: center;" />
							</view>
							<image src="../../static/+.png" class="w-40 h-40"></image>
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="h-100"></view>
			
		</view>
		
		
		<view class="h-150"></view>
		<view class="roww bottomview center_center">
			<view class="w-30"></view>
			<view class="roww duiqi" style="font-weight: bold;">
				<view class="fs-25">￥</view>
				<view class="fs-50">39.99</view>
			</view>
			<view class="allline"></view>
			<image src="../../static/shanchu.png" class="w-200" mode="widthFix"></image>
			<view class="w-30"></view>
			<image src="../../static/lijigoumai.png" class="w-200" mode="widthFix"></image>
			<view class="w-30"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
		methods: {
			
		}
	}
</script>

<style>
@import url(myCHart.css);
</style>
