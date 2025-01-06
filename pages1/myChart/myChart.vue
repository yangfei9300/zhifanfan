<template>
	<view>
		<view class="colonn">
			<view class="roww goodview" v-for="(item,index) in goodList1" @click.stop="selClick(index)">
				<view class="roww center_center">
					<image v-if="item.sel" src="../../static/selicon.png" class="w-40 h-40"></image>
					<image v-else src="../../static/noselicon.png" class="w-40 h-40"></image>
					<view class="w-20"></view>
				</view>
				<image class="goodimg" :src="item.goods.cover"></image>
				<view class="colonn rowsb">
					<view class="colonn">
						<view class="roww">
							<view class="w-390 fs-30 txtShowLength1"
							style="font-weight: bold;">{{item.goods.name}}</view>
							<view class="jifen" v-if="item.goods.type==1">积</view>
						</view>
						<view class="roww" style="color: #999999;">
							<view class="fs-25">{{item.goods.goods_spec.join(',')}}</view>
						</view>
					</view>

					<view class="roww">
						<view class="roww duiqi fw-b" style="color: #FE236C;">
							<view class="fs-25">￥</view>
							<view class="fs-35">{{item.goods.price_selling1[0]}}</view>
							<view class="fs-25">.{{item.goods.price_selling1[1]}}</view>
						</view>
						<view class="allline"></view>
						<view class="roww center_center">
							<image @click.stop="countClick(1,index)" src="../../static/-.png" class="w-40 h-40"></image>
							<view class="inputview">
								<input v-model="item.num" style="max-width: 90rpx;text-align: center;" />
							</view>
							<image @click.stop="countClick(2,index)" src="../../static/+.png" class="w-40 h-40"></image>
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
				<view class="fs-50">{{total}}</view>
			</view>
			<view class="allline"></view>
			<image src="../../static/shanchu.png"
			 @click.stop="delgood"
			 class="w-200" mode="widthFix"></image>
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
				goodList: [{
					'src': 'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good11.png'
				}, {
					'src': 'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good2.png'
				}, {
					'src': 'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good3.png'
				}, {
					'src': 'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good4.png'
				}],
				goodList1: [],
				total: 0
			}
		},
		onLoad() {
			this.getMyChart();
		},
		methods: {
			// 删除购物车商品
			delgood() {
				var ids=[];
				for (var a = 0; a < this.goodList1.length; a++) {
					if (this.goodList1[a].sel) {
						ids.push(this.goodList1[a].car_id);
					}
				}
				console.log('aaa',ids,);
				var data = {
					'uuid':uni.getStorageSync("userInfo").id,
					'car_ids':ids.join(","),
				};
				this.$axios
					.axios('POST', this.$paths.delCar, data)
					.then((res) => {
						if (res.code == 1) {
							this.$tools.showToast("删除成功");
							setTimeout(res=>{
								this.getMyChart();
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 计算钱
			totalMoney() {
				var total = 0;
				for (var a = 0; a < this.goodList1.length; a++) {
					console.log(this.goodList1[a])
					if (this.goodList1[a].sel) {
						total = total + this.goodList1[a].num * this.goodList1[a].goods.price_selling
					}
				}
				total = total.toFixed(2);
				this.total = total;
			},
			selClick(index) {
				this.goodList1[index].sel = !this.goodList1[index].sel;
				this.totalMoney();
			},
			countClick(type, index) {
				if (type == 1) {
					if (this.goodList1[index].num >= 2) {
						this.goodList1[index].num = this.goodList1[index].num - 1;
					}
				} else {
					this.goodList1[index].num = this.goodList1[index].num + 1;
				}
				this.totalMoney();
			},
			// 获取购物车
			getMyChart() {
				var data = {
					'uuid': uni.getStorageSync("userInfo").id
				};
				this.$axios
					.axios('POST', this.$paths.getCarList, data)
					.then((res) => {
						if (res.code == 1) {
							console.log("===", res);
							var goodList1 = res.data;
							for (var a = 0; a < goodList1.length; a++) {
								goodList1[a].goods.price_selling1 = goodList1[a].goods.price_selling.split(".")
								goodList1[a].sel = false;
							}
							this.goodList1 = goodList1;
							this.totalMoney();
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
	@import url(myCHart.css);
</style>