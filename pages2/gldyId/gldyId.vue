<template>
	<view>
		<view class="colonn">
			<view class="h-30"></view>
			<view class=" colonn center_center">
				<view>关联抖音账号</view>
				<view class="h-20"></view>
				<view class="line112"></view>
			</view>
			<view class="h-30"></view>
			<view class="colonn">
				<view class="roww center_center">
					<view class="roww w-200">
						<view>抖音昵称</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-30" 
						placeholder="请输入抖音昵称" class="allline fs-35" />
					</view>
				</view>
				<view class="h-50"></view>
				<view class="roww center_center">
					<view class="roww w-200">
						<view>抖音ID</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-30" 
						placeholder="请输入抖音ID" class="allline fs-35" />
					</view>
				</view>
				<view class="h-50"></view>
				<view class="roww center_center">
					<view class="roww w-200">
						<view>粉丝数量</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input placeholder-class="fs-30" 
						placeholder="请输入粉丝数量" 
						class="allline fs-35" />
					</view>
				</view>
				<view class="h-50"></view>
				<view class="roww center_center">
					<view class="roww w-200">
						<view>抖音截图</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="w-500">
						<image src="/static/shangchuan.png"
						class="w-150 h-150"></image>
					</view>
				</view>
				<view class="h-20"></view>
				
				<view class="roww center_center">
					<view class="roww w-200 yincang1">
						<view>抖音截图</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="roww w-500"
					style="color:#FE236C"
					>
						<view>查看示例>>  </view>
					</view>
				</view>
				
				
			</view>
		</view>
		
		<view class=" roww center_center w-750 m-top-50"
		style="position: fixed;bottom: 150rpx;"
		>
			<image src="/static/baocun.png" 
			class="w-300" 
			mode="widthFix"></image>
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
	@import url(gldyId.css);
</style>