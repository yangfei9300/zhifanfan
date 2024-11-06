<template>
	<view>
		<view class="colonn">
			<image src="https://shandongtibohui.zsyflive.com/profile/nl1.png" class="w-750" mode="widthFix"></image>
			
			<view class="committ colonn pore" style="">
				<view class="h-30"></view>
				<image src="https://shandongtibohui.zsyflive.com/profile/goodinfobg.png" 
				mode="widthFix" class="w-700 poab" style="top: 0rpx;"></image>
				<view class="colonn center_center" style="z-index: 1000;">
					<image src="../../static/zuhe.png" class="w-550" mode="widthFix"></image>
					<view class="h-30"></view>
					<text style="padding:20rpx;">
						福利1：会员赚积分兑好礼
						
						绑卡入会得100积分，关注店铺得50积分，完善信息得50积分，评价有礼得50积分，浏览加购得50积分 购物消费得N积分（视订单金额决定）。
						
						福利2：会员0元试用正装
						
						9倍速修护，28天紧润弹。每当夜幕降临你是否也会陷入哪好的怪圈。困惑、怀疑、挣扎...快节奏常常使得我们浮躁，工作、生活、外界的声音给我们戴上了一层层枷锁。不如跳出都市内卷的围城，卸下枷锁，洗去心灵的尘埃。去看山河湖海，去看万花盛开，即时被禁锢。🎉🎉🎉
						
						福利3：邀请好友入会打榜赢正装
						
						邀请TOP1:悬油次抛正装*1盒。
						
						邀请TOP2-3:双萃面膜*1盒。
						
						邀请TOP4-10:悬油次抛5支装。
						
						*需邀请10人以上才可以上榜。
						
						福利4：超级抽奖！至高赢皇品正装
						
						一等奖：双萃面膜*1盒。
						
						二等奖：益生元面膜*1盒。
						
						三等奖：悬油次抛5支装。
						
						四等奖：蓝宝石次抛1.25ML*2（下单正装备注单发）
						
						五等奖：50积分
						
						福利5：会员0.01元积分换购
					</text>
				</view>
			</view>
			
			
			<!-- 评价 -->
			<view class="committ colonn pore" style="">
				<image src="https://shandongtibohui.zsyflive.com/profile/tiongjiemei.png" 
				mode="widthFix" class="w-700 poab" style="top: 0rpx;"></image>
				<view class="colonn " style="z-index: 1000;">
					<view class="p-all-20" 
					style="font-size: 40rpx;font-weight: bold;">听听姐妹怎么说</view>
					<view class="roww p-all-20"
					v-for="(item,index) in 5"
					>
						<image  class="headers"></image>
						<view class="w-20"></view>
						<view class="colonn">
							<view class="roww w-570">
								<view class="txtShowLength w-200 fs-30">用户昵称用户昵称用户昵称</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #666666;">2024年10月10日  20:18</view>
							</view>
							<view class="h-5"></view>
							<view class="roww w-570">
								<image 
								src="../../static/Star2.png" 
								class="w-30 h-30 m-right-10"
								v-for="(item,index) in  4"
								></image>
								<image
								src="../../static/Starno5.png" 
								class="w-30 h-30 m-right-10"
								></image>
							</view>
							<view class="h-20"></view>
							<view class="fs-27 w-580">
								讲真我觉得试过几次之后还是不错的，这已经是第7次回购他家商品了，姐妹们可以冲～！！
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="h-70"></view>
		<image src="../../static/comment.png" class="w-750" mode="widthFix"
		style="position: fixed;bottom: 0rpx;background-color: white;z-index: 1000;"
		></image>
		
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
@import url(nengliangInfo.css);
</style>
