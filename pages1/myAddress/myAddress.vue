<template>
	<view>
		<view class="colonn">
			<view class="colonn background1 br-20 p-all-20 m-all-20" v-for="(item,index) in addressList">
				<view>{{item.name}} {{item.phone}}</view>
				<view class="h-10"></view>
				<view class="fs-35" style="color: #FE236C;">{{item.address}}</view>
				<view class="h-10"></view>
				<view class="roww ">
					<view class="w-550 fs-30 lh-50" style="color: #999999;">
						{{item.province}}-{{item.city}}-{{item.area}} {{item.address}}
					</view>
					<view class="w-20"></view>
					<image src="../../static/shanchu1.png" @click.stop="isdelModel(item)" class="w-40 h-40"></image>
					<view class="w-20"></view>
					<image src="../../static/bianji.png" @click.stop="toupdate(item)" class="w-40 h-40"></image>
				</view>
			</view>
		</view>

		<view class="roww rowsa m-top-50">
			<image src="/static/weixindaoru.png" class="w-250"
			 @click.stop="chooesAddress"
			 mode="widthFix"></image>
			<image src="/static/xinzeng.png" @click.stop="toadd" class="w-250" mode="widthFix"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: []
			}
		},
		onShow() {
			this.getAddList();
		},
		methods: {   
			address11(info){
				var url= this.$paths.addUserAddress;
				var userInfo=uni.getStorageSync("userInfo");
				var data={
					uuid:userInfo.id,
					province:info.provinceName,
					city:info.cityName,
					area:info.countyName,
					name:info.userName,
					phone:info.telNumber,
					address:info.detailInfo,
					type:"0"
				}
				this.$axios
					.axios('POST', url, data)
					.then((res) => {
						if (res.code == 1) {
							this.$tools.showToast("提交成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 选择微信地址
			chooesAddress() {
				console.log("--")
				wx.chooseAddress({
					success: (res)=> {
						this.address11(res);
					},
					complete: (res) => {
						console.log('res',res)
					}
				})
			},
			// 删除地址
			todel(item) {
				var userInfo = uni.getStorageSync("userInfo");
				var data = {
					'uuid': userInfo.id,
					'address_id': item.address_id
				}
				this.$axios
					.axios('POST', this.$paths.delUserAddress, data)
					.then((res) => {
						if (res.code == 1) {
							this.$tools.showToast("删除成功");
							setTimeout(res => {
								this.getAddList();
							}, 1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 删除
			isdelModel(item) {
				uni.showModal({
					title: '提示',
					content: '确认要删除吗？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定', item);
							this.todel(item);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 获取地址列表
			getAddList() {
				var userInfo = uni.getStorageSync("userInfo");
				var data = {
					'uuid': userInfo.id
				}
				this.$axios
					.axios('POST', this.$paths.getUserAddress, data)
					.then((res) => {
						if (res.code == 1) {
							this.addressList = res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 去添加
			toadd() {
				uni.navigateTo({
					url: "/pages1/addAddress/addAddress"
				})
			},
			toupdate(item) {
				uni.setStorageSync("addressUpdate", item);
				uni.navigateTo({
					url: "/pages1/addAddress/addAddress"
				})
			}
		}
	}
</script>

<style>
	@import url(myAddress.css);
</style>