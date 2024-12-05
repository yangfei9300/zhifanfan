<template>
	<view>
		<view class="colonn">
			<view class="topview pore">
				<image src="https://shandongtibohui.zsyflive.com/profile/分组 1.png" 
				:style="{
					'height':buttoninfo.height+'px',
					'top':(buttoninfo.top-10)+'px',
				}" style="position: fixed;"
				class="w-400 m-left-175" mode="widthFix"></image>
				<view class="topgoodvie colonn">
					<view class="roww duiqi" style="color: white;padding:20rpx 30rpx 0rpx 30rpx;">
						<view class="jinrichaoditxt">今日抄底</view>
						<view class="allline"></view>
						<view class="fs-25" @click.stop="toguize">规则</view>
					</view>
					<view class="h-20"></view>
					<scroll-view scroll-x style="width: 600rpx;margin-left: 25rpx;">
						<view class="roww">
							<view class="colonn center_center topgoodview"
							v-for="(item,index) in goodList"
							 @click.stop="toInfo()"
							>
								<image 
								:src="item.src" class="w-120 h-120" mode="aspectFill"></image>
								<view class="h-10"></view>
								<view class="fs-20 txtShowLength" style="color: #474747;">华油立减</view>
								<view class="h-10"></view>
								<view class="roww duiqi ">
									<view class="fs-25">￥</view>
									<view class="fs-40 fw-700">4.9</view>
								</view>
							</view><view class="colonn center_center topgoodview"
							v-for="(item,index) in goodList"
							 @click.stop="toInfo()"
							>
								<image 
								:src="item.src" class="w-120 h-120" mode="aspectFill"></image>
								<view class="h-10"></view>
								<view class="fs-20 txtShowLength" style="color: #474747;">华油立减</view>
								<view class="h-10"></view>
								<view class="roww duiqi ">
									<view class="fs-25">￥</view>
									<view class="fs-40 fw-700">4.9</view>
								</view>
							</view>
							
						</view>
					</scroll-view>
				</view>
				
			</view>
			<view :style="{
				'height':goodHight+'px'
			}">
			</view>
			
			<scroll-view scroll-y class="bottomview"
			style="position: fixed;bottom: -70rpx;"
			:style="{
				height:(systemInfo.windowHeight-goodHight)+'px',
			}"
			>
				<view class="roww pore h-70">
					<view class="roww rowsb w-600 poab"
					style="left: 50rpx;top: 50;"
					>
						<view class="ditypet">精选</view>
						<view class="typetxtsel">热销</view>
						<view class="typetxtsel">美妆</view>
						<view class="typetxtsel">数码</view>
						<view class="typetxtsel">母婴</view>
						<view class="typetxtsel">生活</view>
					</view>
					<image src="/static/lujingsan.png" class="w-600 poab"
					 style="left: 50rpx;bottom: 0rpx;"
					 mode="widthFix"></image>
				</view>
				<view class="huanhang rowsb p-all-30">
					<view class="colonn bottomviewgood" 
					v-for="(item,index) in goodList"
							 @click.stop="toInfo()">
						<image 
						:src="item.src" 
						mode="aspectFill br-20"
						class="w-300 h-300"></image>
						<view class="h-10"></view>
						<view class="w-300  txtShowLength"
						style="line-height: 40rpx;"
						>繁妆悬油双萃面膜1盒繁妆悬油双萃面膜</view>
						<view class="h-25"></view>
						<view class="roww duiqi">
							<view class="roww duiqi">
								<view
								style="color: white;-webkit-text-stroke: 1px #FF9E9E; "
								>￥</view>
								<view class="fs-40" 
								style="color: white;-webkit-text-stroke: 1px #FF9E9E; ">30</view>
							</view>
							<view class="allline"></view>
							<view class="fs-25" style="color: #C4C4C4;">已售:500</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
			
			
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
			var info = uni.getMenuButtonBoundingClientRect();
			this.buttoninfo = info;
			var systemInfo = uni.getSystemInfoSync();
			this.systemInfo = systemInfo;
			console.log(systemInfo);
			// 顶部的高度转换
			var bili = systemInfo.windowWidth / 750;
			console.log("比例", bili);
			this.goodHight = bili * 720;
		},
		methods: {
toguize(){
				uni.navigateTo({
					url:"/pages1/guizeshuoming/guizeshuoming",
					complete: (res) => {
						console.log("===",res);
					}
				})
			},
			toInfo(){
				uni.navigateTo({
					url:"/pages1/goodInfo/goodInfo"
				})
			},
		}
	}
</script>

<style>
	@import url(index41.css);
</style>