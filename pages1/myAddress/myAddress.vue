<template>
	<view>
		<view class="colonn">
			<view class="colonn background1 br-20 p-all-20 m-all-20" v-for="(item,index) in 3">
				<view>枝繁繁 18668999188</view>
				<view class="h-10"></view>
				<view class="fs-35" style="color: #FE236C;">汉峪金谷A3-1-1301室</view>
				<view class="h-10"></view>
				<view class="roww ">
					<view class="w-550 fs-30 lh-50" style="color: #999999;">
						山东省济南市历城区汉峪金谷A3-1-1301室
					</view>
					<view class="w-20"></view>
					<image src="../../static/shanchu1.png" class="w-40 h-40"></image>
					<view class="w-20"></view>
					<image src="../../static/bianji.png" class="w-40 h-40"></image>
				</view>
			</view>
		</view>

		<view class="roww rowsa m-top-50">
			<image src="/static/weixindaoru.png" class="w-250" mode="widthFix"></image>
			<image src="/static/xinzeng.png" @click.stop="toadd" class="w-250" mode="widthFix"></image>
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
			toadd(){
				uni.navigateTo({
					url:"/pages1/addAddress/addAddress"
				})
			}
		}
	}
</script>

<style>
	@import url(myAddress.css);
</style>