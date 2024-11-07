<template>
	<view>
		<view class="colonn">
			<image src="https://shandongtibohui.zsyflive.com/profile/banner.jpg" class="w-750" mode="widthFix"></image>
			<view class="roww p-all-20" 
			style="background: #EF7188;color: white;">
				<view class="fs-30">立即入会》抢先试用》回购正装满399享加赠哦～！</view>
			</view>
			<view class="m-all-20 colonn background1 p-all-20" >
				<view class="roww duiqi">
					<view class="roww duiqi" style="font-weight: bold;">
						<view class="fs-27">￥</view>
						<view class="fs-40">29.9</view>
					</view>
					<view class="w-20"></view>
					<image src="../../static/xinpin.png" class="w-80" mode="widthFix"></image>
					<view class="w-20"></view>
					<image src="../../static/remai.png" class="w-80" mode="widthFix"></image>
					<view class="allline"></view>
					<image src="../../static/fenxiang.png" 
					style="border-radius: 50%;"
					class="w-50 h-50"></image>
				</view>
				<view class="h-30"></view>
				<view class="fs-35">
					【39.9试用尝鲜】繁妆尝鲜盒洁面30g+蓝2支
					+悬油2支+面膜2片
				</view>
				<view class="goodjieshi">
					每当夜幕降临，你是否也会陷入哪好的怪圈。困惑、怀疑、挣扎...快节奏常常使得我们浮躁，工作、生活、外界的声音给我们戴上了一层层枷锁。不如跳出都市内卷的围城，卸下枷锁，洗去心灵的尘埃。去看山河湖海，去看万花盛开，即时被禁锢，声明依然鲜活...
				</view>
				<view class="h-40"></view>
				
				
				<view class="roww center_center fs-27">
					<image class="w-30 h-40 " mode="widthFix" src="/static/sais.png" 
					></image>
					<view class="w-20"></view>
					<view>舒缓保湿</view>
					<view style="margin:0rpx 15rpx;">|</view>
					<view>舒缓保湿</view>
					<view class="allline"></view>
					<image src="/static/fanjifen.png" class="w-200" mode="widthFix"></image>
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
						<image  class="headers" src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/headers.png"></image>
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
			
			<view class="committ colonn pore" style="">
				<view class="h-30"></view>
				<image src="https://shandongtibohui.zsyflive.com/profile/goodinfobg.png" 
				mode="widthFix" class="w-700 poab" style="top: 0rpx;"></image>
				<view class="colonn center_center" style="z-index: 1000;">
					<image src="../../static/kuailaikan.png" class="w-200" mode="widthFix"></image>
					<view class="h-30"></view>
					<image   
					src="https://shandongtibohui.zsyflive.com/profile/产品图3.png" 
					class="w-650" mode="widthFix"></image>
				</view>
			</view>
			<view class="h-55"></view>
			<image src="https://shandongtibohui.zsyflive.com/profile/jifengz1.png" class="w-700 m-all-25" mode="widthFix"></image>
			
			
		</view>
		
		<view class="h-150"></view>
		<view class="roww bottomview center_center">
			<view class="w-30"></view>
			<view class="roww duiqi" style="font-weight: bold;">
				<view class="fs-25">￥</view>
				<view class="fs-50">39.99</view>
			</view>
			<view class="allline"></view>
			<image @click.stop="tochat()" 
			src="https://shandongtibohui.zsyflive.com/profile/按钮 (6).png" 
			class="w-200" mode="widthFix"></image>
			<view class="w-30"></view>
			<image src="../../static/lijigoumai.png" 
			@click.stop="toOrder" class="w-200" mode="widthFix"></image>
			<view class="w-30"></view>
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
			toOrder(){
				uni.navigateTo({
					url:"/pages2/trueOrder/trueOrder"
				})
			},
			tochat(){
				uni.navigateTo({
					url:"/pages1/myChart/myChart"
				})
			}
		}
	}
</script>

<style>
@import url(goodInfo.css);
</style>
