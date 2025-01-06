<template>
	<view>
		<view class="colonn goodview" @click.stop="togoodinfo">
			<image class="w-340  br-20" mode="widthFix" 
			:src="obg.cover">
			</image>
			<view class="h-20"></view>
			<view class="goodname  w-284 m-left-28">
				{{obg.name}}
			</view>
			<view class="h-15"></view>
			<view class="roww">
				<image class="xinpinicon  w-284 m-left-28" v-if="obg.xinpin"
				src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/xinpin1.png"></image>
				<image class="xinpinicon  w-284 m-left-28" v-if="obg.remai"
				src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/remai1.png"></image>
			</view>
			<view class="h-15"></view>
			<view class="roww w-284 duiqi m-left-28">
				<view class="roww " style="color: red;"
				:class="{
					'duiqi':obg.gt==2
				}"
				>
					<view class="fs-25"  v-if="obg.gt==2">￥</view>
					<view class="fs-35">{{obg.price_selling}}</view>
					<view v-if="obg.gt==1">积分</view>
				</view>
				<view class="allline"></view>
				<view class="yishou">已售{{obg.stock_sales}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "homeGoodItem",
		props:{
			'obg':{
				type:Object,
				value:null,
			}
		},
		data() {
			return {

			};
		},
		methods: {
			togoodinfo() {
				uni.navigateTo({
					url: "/pages1/goodInfo/goodInfo?id="+this.obg.code
				})
			}
		}
	}
</script>

<style>
	@import url(homeGoodItem.css);
	
</style>