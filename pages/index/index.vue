<template>
	<view class="content">

		<view style="width: 750rpx;background-color: white;z-index: 100000;position: fixed;top: 0rpx;" :style="{
				height:(buttoninfo.bottom+20)+'px'
			}" v-if="scrollHeight>20">
			<view class="topviewbutton roww center_center" :style="{
				'height':buttoninfo.height+'px',
				'top':buttoninfo.top+'px',
			}" style="background-color: white;">
				<view>首页</view>
			</view>

		</view>

		<block v-else>
			<image class="topimg" src="https://shandongtibohui.zsyflive.com/profile/shouye.png" mode="widthFix"></image>
			<view class="topviewbutton" :style="{
			'height':buttoninfo.height+'px',
			'top':buttoninfo.top+'px',
		}" style="z-index: 1000;">
				<view class="roww">
					<view class="leftsousuo roww center_center" :style="{
					'height':buttoninfo.height+'px',
					'margin-left':(systemInfo.screenWidth-buttoninfo.right)+'px'
				}">
						<view class="w-28"></view>
						<image src="/static/sousuo.png" class="leftsousuoimg"></image>
						<view class="w-20"></view>
						<view class="sstxt">秋装新款上架</view>
						<view class="allline"></view>
						<image src="/static/Vector.png" class="w-96 h-48"></image>
						<view class="w-10"></view>
					</view>
				</view>
			</view>

		</block>


		<view class="colonn" style="z-index: 1001;position: relative;">
			<view class="w-750" :style="{
				'height':(buttoninfo.height+systemInfo.statusBarHeight)+'px',
			}"></view>
			<view class="h-40"></view>
			<view class="bannerview ">
				<view class="bannerbottom roww">
					<view class="w-16"></view>
					<view class="lefttxt">品牌好物</view>
					<view class="w-20"></view>
					<scroll-view scroll-x class="w-580 roww">
						<view class="roww ">

							<view class="goodview1 colonn" 
							v-for="(item,index) in goodList" @click.stop="toGoodinfo">
								<view class="h-26"></view>
								<image class="goodimg1" 
								:src="item.src">
								</image>
								<view class="h-10"></view>
								<view class="goodname1 txtShowLength">洁柔纸抽</view>
							</view>
							
							<view class="goodview1 colonn"
							v-for="(item,index) in goodList" @click.stop="toGoodinfo">
								<view class="h-26"></view>
								<image class="goodimg1" 
								:src="item.src">
								</image>
								<view class="h-10"></view>
								<view class="goodname1 txtShowLength">洁柔纸抽</view>
							</view>
							
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="h-30"></view>
			<view class="roww menusview rowsb">
				<view class="colonn center_center" @click.stop="toqiandao(1)">
					<image class="menuicon" src="https://shandongtibohui.zsyflive.com/profile/homemenu1.png" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">每日签到</view>
				</view>
				<view class="colonn center_center" @click.stop="toqiandao(2)">
					<image class="menuicon" src="https://shandongtibohui.zsyflive.com/profile/homemenu2.png" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">我的订单</view>
				</view>
				<view class="colonn center_center" @click.stop="toqiandao(3,2)">
					<image class="menuicon" src="https://shandongtibohui.zsyflive.com/profile/homemenu3.png" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">小红书转换</view>
				</view>
				<view class="colonn center_center" @click.stop="toqiandao(4,1)">
					<image class="menuicon" src="https://shandongtibohui.zsyflive.com/profile/homemenu4.png" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">抖音转换</view>
				</view>
				<view class="colonn center_center" @click.stop="toqiandao(5)">
					<image class="menuicon" src="https://shandongtibohui.zsyflive.com/profile/homemenu5.png" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">能量心语</view>
				</view>
			</view>

		</view>



		<view class="colonn" style="z-index: 1000;position: relative;">
			<image class="banner3" src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/home111.png">
			</image>
			<image class="banner2" src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/home222.png">
			</image>
			<view class="roww rowsb p-all-25">
				<view class="colonn">
					<image src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/left2x.png"
						class="w-340 br-24 m-bottom-20" mode="widthFix"></image>
					<homeGoodItem v-for="(item,index) in goodList"
					:obg="item"
					>
					</homeGoodItem>
				</view>
				<view class="colonn">
					<image src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/Group 15110.png" class="w-340"
						mode="widthFix"></image>
					<homeGoodItem v-for="(item,index) in goodList"
					:obg="item" class="">
					</homeGoodItem>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import homeGoodItem from '@/components/homeGoodItem/homeGoodItem.vue';
	export default {
		components: {
			// homeGoodItem
		},
		data() {
			return {
				title: 'Hello',
				buttoninfo: {}, //胶囊按钮信息
				systemInfo: {}, //设备信息

				scrollHeight: 0,
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
		},
		onPageScroll(res) {
			console.log("--", res);
			this.scrollHeight = res.scrollTop;
		},
		methods: {
			toqiandao(index,type) {
				if (index == 1) {
					uni.navigateTo({
						url: "/pages2/qiandao/qiandao"
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: "/pages1/orderList/orderList"
					})
				} else if (index == 3) {
					uni.navigateTo({
						url: "/pages2/orderZh/orderZh?type="+type
					})
				} else if (index == 4) {
					uni.navigateTo({
						url: "/pages2/orderZh/orderZh?type="+type
					})
				} else if (index == 5) {
					uni.switchTab({
						url: "/pages/index3/index3"
					})
				}

			},
			// 商品详情
			toGoodinfo() {
				uni.navigateTo({
					url: "/pages1/goodInfo/goodInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(index.css);
</style>