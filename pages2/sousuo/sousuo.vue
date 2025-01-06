<template>
	<view>
		<view class="colonn">
			<view style="background-color: white;position: fixed;top: 0rpx;" class="w-750 h-100">
				<view class="roww center_center m-top-20 m-bottom-20">
					<view class="sousuoview roww center_center">
						<view class="w-30"></view>
						<image src="/static/sousuo1.png" 
						class="w-40 h-40"></image>
						<view class="w-25"></view>
						<input placeholder="请输入内容" />
						<view class="allline"></view>
					</view>
					<view class="w-25"></view>
					<view style="color:#E2546E;font-weight: bold;">搜索</view>
				</view>
			</view>
			
			<view class="h-100"></view>
			<view class="huanhang rowsb p-all-20">
				<homeGoodItem v-for="(item,index) in goodList"
				:obg="item" class="">
				</homeGoodItem>
			</view>
			
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
					},{
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
@import url(sousuo.css);
</style>
