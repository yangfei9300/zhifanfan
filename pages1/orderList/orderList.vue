<template>
	<view>
		<view class="roww rowsa h-100 background1 bottom">
			<view class="colonn center_center">
				<view>全部</view>
				<view class="h-15"></view>
				<image src="/static/Rectangle_44.png" class="w-50" mode="widthFix"></image>
			</view>
			<view class="colonn center_center">
				<view style="color: #999999;">待付款</view>
				<view class="h-15"></view>
				<image src="/static/Rectangle_44.png" class="w-50 yincang1" mode="widthFix"></image>
			</view>
			<view class="colonn center_center">
				<view style="color: #999999;">待发货</view>
				<view class="h-15"></view>
				<image src="/static/Rectangle_44.png" class="w-50 yincang1" mode="widthFix"></image>
			</view>
			<view class="colonn center_center">
				<view style="color: #999999;">待收货</view>
				<view class="h-15"></view>
				<image src="/static/Rectangle_44.png" class="w-50 yincang1" mode="widthFix"></image>
			</view>
			<view class="colonn center_center">
				<view style="color: #999999;">已完成</view>
				<view class="h-15"></view>
				<image src="/static/Rectangle_44.png" class="w-50 yincang1" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="colonn">
			<view class="colonn orderview">
				<view class="roww">
					<image class="goodimg" src="https://shandongtibohui.zsyflive.com/profile/good.png"></image>
					<view class="colonn  rowsb">
						<view class="roww duiqi"
							style="line-height: 40rpx;">
							<view class="w-350  txtShowLength"
							>繁妆紧颜蓝铜胜肽蓝宝石次抛精</view>
							<view class="allline"></view>
							<view class="roww fw-800 duiqi" 
							style="color: #FE236C;">
								<view class="fs-25">￥</view>
								<view class="fs-40">180</view>
								<view class="fs-25">.00</view>
							</view>
						</view>
						<view class="roww fs-25" style="color: #999999;">
							<view>1.25ML</view>
							<view>【2支装】</view>
						</view>
						<view class="roww">
							<view class="statview roww center_center">
								<image src="/static/shield.png" 
								class="w-30 h-30"></image>
								<view  class="w-10"></view>
								<view class="fs-25 w-430 txtShowLength">
									订单状态：【已签收】您已在山东省济南市历城区
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="h-20"></view>
				<view class="roww center_center">
					<view class="allline"></view>
					<image src="/static/shanchuorder.png"
					class="w-150" mode="widthFix"
					></image>
					<view class="w-50"></view>
					<image src="/static/zailaiyidan.png"
					class="w-150" mode="widthFix"
					></image>
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
@import url(orderList.css);
</style>
