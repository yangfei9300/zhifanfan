<template>
	<view>
		<view class="colonn">

			<view style="width: 750rpx;background-color: white;z-index: 100000;position: fixed;top: 0rpx;" :style="{
					height:(buttoninfo.bottom+20)+'px'
				}" v-if="scrollHeight>20">
				<view class="topviewbutton roww center_center" :style="{
					'height':buttoninfo.height+'px',
					'top':buttoninfo.top+'px',
				}" style="background-color: white;color: black;">
					<view>能量心语</view>
				</view>

			</view>



			<image src="https://shandongtibohui.zsyflive.com/profile/Maskgroup.png" mode="widthFix"
				class="w-750 topviewfix pore"></image>
			<view class="topview colonn">
				<view style="width: 750rpx;" :style="{
						'height':(buttoninfo.bottom+20)+'px',
					}"></view>

				<swiper class="w-710 h-280 m-all-20">
					<swiper-item class="w-710 h-280" v-for="(item,index) in banners"
					@click.stop="clickItem(item)"
					>
						<image :src="item.img" mode="aspectFill" class="w-710 h-280"></image>
					</swiper-item>
				</swiper>
			</view>
			<view :style="{
				'height':goodHight+'px'
			}"></view>
			<!-- <view class="h-30"></view> -->
			<view class="colonn">
				<view class="roww " style="padding:0rpx 20rpx;font-weight: bold;">
					<view>热门话题</view>
				</view>
				<scroll-view scroll-x style="width: 710rpx;margin:20rpx;">
					<view class="w-710 roww">
						<block v-for="(item,index) in 6">
							<image class="img111" @click.stop="toInfo"
								src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/Group 1654xx.png"></image>
							<image class="img111" @click.stop="toInfo"
								src="https://shandongtibohui.zsyflive.com/profile/image22222.png"></image>
						</block>
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
							<view class="">最新</view>
							<view class="fenseline yincang1"></view>
						</view>
						<view class="colonn center_center">
							<view class="">精选</view>
							<view class="fenseline yincang1"></view>
						</view>
					</view>

					<view class="huanhang rowsb p-all-20">
						<block v-for="(item,index) in 5">
							<image @click.stop="toInfo"
								src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/imageneng4xx.png"
								class="w-340 h-520 m-bottom-20" mode="widthFix"></image>
							<image @click.stop="toInfo" src="https://shandongtibohui.zsyflive.com/profile/image1111.png"
								class="w-340 h-520 m-bottom-20" mode="widthFix"></image>
						</block>
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
				scrollHeight: 0,
				banners: []
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
			this.goodHight = bili * 527;

			this.getbanners();
		},
		onPageScroll(res) {
			console.log("--", res);
			this.scrollHeight = res.scrollTop;
		},
		methods: {
			clickItem(item){
				if(item.goods_type=='SG'){//商品详情页
					uni.navigateTo({
						url:"/pages1/goodInfo/goodInfo?id="+item.code,
					})
				}else if(item.goods_type=='NS'){//商品详情页
					uni.navigateTo({
						url:"/pages2/xinwens/xinwens?id="+item.code,
					})
				}
			},
			// 获取轮播图
			getbanners() {
				var data = {

				};
				this.$axios
					.axios('POST', this.$paths.momentSlider, data)
					.then((res) => {
						if (res.code == 1) {
							this.banners = res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			toInfo() {
				uni.navigateTo({
					url: "/pages1/nengliangInfo/nengliangInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(index3.css);
</style>