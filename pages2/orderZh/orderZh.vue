<template>
	<view>
		<!-- <view style="position: fixed;top: 0rpx;z-index: 2000;width: 700rpx;">
			<mz-marque direction="horizontal" :marqueList="list" leftIcon :speed="2">
				<icon slot="leftIcon" type="success" size="26"/>
				</mz-marque>
		</view> -->

		<image src="https://shandongtibohui.zsyflive.com/profile/bg.png" class="bgview"></image>
		<view class="colonn center_center pore p-all-20">
			<image :src="imgs[options.type-1].topimg" class="w-500" mode="widthFix"></image>
			<view class="h-105"></view>

			<view class="inputview colonn pore">
				<image :src="imgs[options.type-1].yuan" class="w-200 tabsivon h-200"></image>
				<view class="h-100"></view>
				<view class="inputmoreview roww center_center">
					<view class="w-20"></view>
					<input placeholder="请复制【繁妆天猫旗舰店】近3个月成功交易的订单号..." class="allline" />
					<view class="w-20"></view>
				</view>
				<view class="roww p-all-25">
					<image src="../../static/-.png" class="w-30 h-30"></image>
					<view class="w-20"></view>
					<view class="fs-25 w-600">
						您知悉并同意您下单的天猫旗舰店在每一次转换中根据您填写的订
						单编号将该笔订单的商品名称、商品金额、订单成交时间、订单完
						成时间等信息提供给“枝繁繁的能量女孩”用于订单转换和展示和转
						换积分的订单核对。
					</view>
				</view>
				<view class="roww center_center">
					<image src="https://shandongtibohui.zsyflive.com/profile/zhuanhuanjilu.png" class="w-200"
						mode="widthFix"></image>
					<view class="w-50"></view>
					<image src="https://shandongtibohui.zsyflive.com/profile/lijizhuanhuan.png" class="w-200"
						mode="widthFix"></image>
				</view>
				<view class="h-30"></view>
			</view>
			<view class="h-30"></view>
			<view class="fs-25 " style="padding:20rpx 20rpx 0rpx 20rpx;">
				提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
			</view>
			<view class="menyview colonn">
				<view class="roww rowsa pore">
					<view class="colonn center_center">
						<view class="typetxt">重要须知</view>
						<view class="fenseline"></view>
					</view>
					<view class="colonn center_center">
						<view class="fs-30">兑换步骤</view>
						<view class="fenseline yincang1"></view>
					</view>
					<view class="colonn center_center">
						<view class="fs-30">常见问题</view>
						<view class="fenseline yincang1"></view>
					</view>
					<view class="colonn center_center">
						<view class="fs-30">积分/成长</view>
						<view class="fenseline yincang1"></view>
					</view>
					<view class="colonn center_center">
						<view class="fs-30">规则明细</view>
						<view class="fenseline yincang1"></view>
					</view>

					<!-- <view class="w-700 h-100 poab" 
					style="position: absolute;top: 0rpx;background-image: radial-gradient(#FF6883,#ffffff);">
						
					</view> -->
				</view>
				<view class="h-20"></view>

				<view class="fs-30">
					提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。

					必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。

					必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [{
						'topimg': 'https://shandongtibohui.zsyflive.com/profile/douyinorder.png',
						'yuan': '/static/douyinyuan.png'

					},
					{
						'topimg': 'https://shandongtibohui.zsyflive.com/profile/xiaohongshuorder.png',
						'yuan': '/static/xiaohongshuyuan.png'
					}
				],
				options: {type:1},
				list: [{
						id: 1,
						title: '这是跑马灯消息数据第一条'
					},
					{
						id: 2,
						title: '这是跑马灯消息数据第二条'
					},
					{
						id: 3,
						title: '这是跑马灯消息数据第三条'
					}
				],

			}
		},
		onLoad(options) {
			this.options = options;
		},
		methods: {

		}
	}
</script>

<style>
	@import url(orderZh.css);
</style>