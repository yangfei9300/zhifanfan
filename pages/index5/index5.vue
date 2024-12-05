<template>
	<view>
		<view class="colonn">
			<view class="topview colonn">
				<view style="width: 750rpx;" :style="{
						'height':(buttoninfo.bottom)+'px',
					}"></view>
				<view class="roww center_center p-all-24">
					<image class="headimg " 
	src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/headers.png">
					</image>
					<view class="colonn rowsa h-120">
						<view class="username">枝繁繁的能量女孩</view>
						<view class="userid">ID：12361872461728</view>
					</view>
					<view class="allline"></view>
				</view>
				<image src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/签到4xxx.png" class="roww vipimg "
					mode="widthFix">
				</image>
				<view class="background1 myoer1">
					<view class="myorderview colonn" @click.stop="toorder">
						<view class="roww">
							<view class="myordertxt">我的订单</view>
							<view class="allline"></view>
							<view class="roww center_center">
								<view>全部订单</view>
								<view class="w-20"></view>
								<image src="/static/youjiantou1.png" class="w-30 h-30"></image>
							</view>
						</view>
						<view class="h-30"></view>
						<view class="roww rowsa">
							<view class="colonn center_center" v-for="(item,index) in ordericons">
								<image :src="item.icon" class="ordericon"></image>
								<view class="h-10"></view>
								<view class="daifukuantxx">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view :style="{
				'height':goodHight+'px'
			}"></view>


			<view class="dyview colonn">
				<view class="h-20"></view>
				<view class="roww rowsa" @click.stop="tozhuanhuan">
					<image src="https://shandongtibohui.zsyflive.com/profile/dy1.png" @click.stop="toqiandao(3,1)"
						class="w-300 h-145" mode="widthFix"></image>
					<image src="https://shandongtibohui.zsyflive.com/profile/xhs1.png" class="w-300 h-145"
						@click.stop="toqiandao(3,2)" mode="widthFix"></image>
				</view>
				<view class="jineview roww center_center">
					<view class="w-20"></view>
					<image src="/static/jinbi.png" class="w-50 h-50"></image>
					<view class="fw-600 fs-30 m-left-20 m-right-20">我的积分</view>
					<view class="jinenum">100</view>
					<view class="allline"></view>
					<view class="qushiyongbtn" @click="tojifen">去使用</view>
					<view class="w-20"></view>
				</view>
			</view>

			<view class="mymenu colonn">
				<view class="roww">
					<view class="myordertxt">更多服务</view>
				</view>
				<view class="h-30"></view>
				<view class="roww rowsa">
					<view class="colonn allline center_center" v-for="(item,index) in bottommens"
						@click.stop="topage(index+1)" v-if="index<5">
						<image class="ordericon" :src="item.icon"></image>
						<view class="h-10"></view>
						<view class="daifukuantxx">{{item.title}}</view>
					</view>
				</view>
				<view class="h-20"></view>
				<view class="roww rowsa">
					<view class="colonn center_center" v-for="(item,index) in bottommens" @click.stop="topage(index+1)"
						v-if="index>=5">
						<image class="ordericon" :src="item.icon"></image>
						<view class="h-10"></view>
						<view class="daifukuantxx">{{item.title}}</view>
					</view>
					<view class="colonn center_center yincang1" v-for="(item,index) in 3">
						<view class="ordericon"></view>
						<view class="h-10"></view>
						<view class="daifukuantxx">联系客服</view>
					</view>
				</view>
			</view>
			<view class="h-30"></view>
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
				ordericons: [{
					'icon': '/static/Wallet.png',
					'title': '待付款'
				}, {
					'icon': '/static/Frame 390.png',
					'title': '待发货'
				}, {
					'icon': '/static/Frame 391.png',
					'title': '待收货'
				}, {
					'icon': '/static/annotation-typing.png',
					'title': '待/已评价'
				}, {
					'icon': '/static/Frame 392.png',
					'title': '退款/售后'
				}],
				bottommens: [{
					'icon': '/static/g1.png',
					'title': '购物车'
				}, {
					'icon': '/static/g2.png',
					'title': '我的足迹'
				}, {
					'icon': '/static/g3.png',
					'title': '收货地址'
				}, {
					'icon': '/static/g4.png',
					'title': '规则说明'
				}, {
					'icon': '/static/g5.png',
					'title': '个人信息'
				}, {
					'icon': '/static/g6.png',
					'title': '联系客服'
				}, {
					'icon': '/static/g7.png',
					'title': '关于我们'
				}]
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
			this.goodHight = bili * 770;
		},
		methods: {
			tojifen(){
				uni.switchTab({
					url:"/pages/index2/index2"
				})
			},
			toqiandao(index, type) {
				uni.navigateTo({  
					url: "/pages2/orderZh/orderZh?type=" + type
				})
			},

			tozhuanhuan() {
				uni.navigateTo({
					url: "/pages2/orderZh/orderZh"
				})
			},
			topage(index) {
				if (index == 1) {
					uni.navigateTo({
						url: "/pages1/myChart/myChart"
					})
				} else if (index == 3) {
					uni.navigateTo({
						url: "/pages1/myAddress/myAddress"
					})
				} else if (index == 4) {
					uni.navigateTo({
						url: "/pages1/guizeshuoming/guizeshuoming"
					})
				} else if (index == 5) {
					uni.navigateTo({
						url: "/pages1/userInfo/userInfo"
					})
				}
			},
			toorder() {
				uni.navigateTo({
					url: "/pages1/orderList/orderList"
				})
			}
		}
	}
</script>

<style>
	@import url(index.css);
</style>