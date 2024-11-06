<template>
	<view>
		<view class="colonn viewbg"
		:style="{
			width:(systemInfo.windowWidth-20)+'px',
			height:(systemInfo.windowHeight-20)+'px',
		}"
		>  
			<view class="roww " style="width: 700rpx;"
			:style="{
				height:50+'px',
			}"
			>
				<v-tabs style="width: 700rpx;"
				v-model="current"
				 activeColor="#000000" lineColor="#FF6883"  
				 scroll
				 :tabs="tabs" 
				 @change="changeTab"></v-tabs>
			</view>
			<scroll-view
			:style="{
				height:(systemInfo.windowHeight-70)+'px',
			}" scroll-y
			>
				<view class="colonn p-all-20 fs-30">
					<text>
						提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单，订单必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。
						
						必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。必须为正装产品，复制淘宝订单编号即可转换，转换后会生成转换记录订单必须为正装产品。提示：此处为温馨提示文案，内容待定。适用于【繁妆天猫旗舰店】所购买的订单。
					</text>
					<view class="h-40"></view>
				</view>
			</scroll-view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				buttoninfo:{},//胶囊按钮信息
				systemInfo:{},//设备信息
				
				scrollHeight:0,
				
				current: 0,
				tabs: [
				  '重要须知',
				  '兑换步骤',
				  '常见问题', 
				  '积分/成长',
				  '规则明细',
				],
				
			}
		},
		onLoad() {
			// 获取胶囊的位置
			var info= uni.getMenuButtonBoundingClientRect();
			this.buttoninfo=info;
			var systemInfo= uni.getSystemInfoSync();
			this.systemInfo=systemInfo;
			console.log(systemInfo);
		},
		onPageScroll(res) {
			console.log("--",res);
			this.scrollHeight=res.scrollTop;
		},
		methods: {
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			},
		}
	}
</script>

<style>
@import url(guizeshuoming.css);
</style>
