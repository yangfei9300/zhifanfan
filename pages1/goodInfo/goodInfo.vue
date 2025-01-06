<template>
	<view>
		<view class="colonn">
			<swiper class="w-750 h-750">
				<swiper-item class="w-750 h-750" v-for="(item,index) in goodInfo.slider">
					<image :src="item" class="w-750" mode="aspectFill"></image>
				</swiper-item>
			</swiper>

			<view class="roww p-all-20" style="background: #EF7188;color: white;">
				<view class="fs-30">立即入会》抢先试用》回购正装满399享加赠哦～！</view>
			</view>
			<view class="m-all-20 colonn background1 p-all-20">
				<view class="roww duiqi">
					<view class="roww duiqi" style="font-weight: bold;">
						<view class="fs-27">￥</view>
						<view class="fs-40">{{goodInfo.price_selling}}</view>
					</view>
					<view class="w-20"></view>
					<image src="../../static/xinpin.png" v-if="goodInfo.xinpin" class="w-80" mode="widthFix"></image>
					<view class="w-20"></view>
					<image src="../../static/remai.png" v-if="goodInfo.remai" class="w-80" mode="widthFix"></image>
					<view class="allline"></view>
					<image src="../../static/fenxiang.png" style="border-radius: 50%;" class="w-50 h-50"></image>
				</view>
				<view class="h-30"></view>
				<view class="fs-35">
					{{goodInfo.name}}
				</view>
				<view class="goodjieshi">
					{{goodInfo.remark}}
				</view>
				<view class="h-40"></view>
				<view class="roww center_center fs-27">
					<image class="w-30 h-40 " mode="widthFix" src="/static/sais.png"></image>
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
				<image src="https://shandongtibohui.zsyflive.com/profile/tiongjiemei.png" mode="widthFix"
					class="w-700 poab" style="top: 0rpx;"></image>
				<view class="colonn " style="z-index: 1000;">
					<view class="p-all-20" style="font-size: 40rpx;font-weight: bold;">听听姐妹怎么说</view>
					<view class="roww p-all-20" v-for="(item,index) in 5">
						<image class="headers" src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/headers.png">
						</image>
						<view class="w-20"></view>
						<view class="colonn">
							<view class="roww w-570">
								<view class="txtShowLength w-200 fs-30">用户昵称用户昵称用户昵称</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #666666;">2024年10月10日 20:18</view>
							</view>
							<view class="h-5"></view>
							<view class="roww w-570">
								<image src="../../static/Star2.png" class="w-30 h-30 m-right-10"
									v-for="(item,index) in  4"></image>
								<image src="../../static/Starno5.png" class="w-30 h-30 m-right-10"></image>
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
				<image src="https://shandongtibohui.zsyflive.com/profile/goodinfobg.png" mode="widthFix"
					class="w-700 poab" style="top: 0rpx;"></image>
				<view class="colonn center_center" style="z-index: 1000;">
					<!-- <image src="../../static/kuailaikan.png" class="w-200" mode="widthFix"></image>
					<view class="h-30"></view>
					<image
					src="https://shandongtibohui.zsyflive.com/profile/产品图1 (1).png" 
					class="w-650" mode="widthFix" style="position: relative;bottom: -3px;"></image>
					<image
					src="https://shandongtibohui.zsyflive.com/profile/产品图2.png" 
					class="w-650" mode="widthFix"></image>
					<image   
					src="https://shandongtibohui.zsyflive.com/profile/产品图3 (2).png" 
					class="w-650" mode="widthFix"></image>
					<view class="h-30"></view> -->
					<rich-text :nodes="goodInfo.content"></rich-text>
				</view>
			</view>
			<image src="https://shandongtibohui.zsyflive.com/profile/jifengz1.png" class="w-700 m-all-25"
				mode="widthFix"></image>

		</view>


		<view class="huuibeijing " style="z-index: 1005;">
			<view class="alertvr colonn p-all-20">
				<view class="roww ">
					<image :src="goodInfo.slider[0]" class="w-110 h-110" mode="aspectFill"></image>
					<view class="w-20"></view>
					<view class="colonn rowsb">
						<view>{{goodInfo.name}}</view>
						<view style="color: red;font-weight: bold;" v-if="selSpace">￥{{selSpace.selling}}</view>
						<view class="fs-25" v-else>请选择规格</view>
					</view>
				</view>
				<view class="h-30"></view>
				<scroll-view scroll-y style="height: 370rpx;">
					<view class="colonn" v-for="(item,index) in goodInfo.data_specs">
						<view>{{item.name}}：</view>
						<view class="h-10"></view>
						<view class="huanhang">
							<view :class="{
								'seliotem':item1.show,
								'seliotem1':!item1.show
							}" v-for="(item1,index1) in item.list" @click.stop="spaceClick(item1,index,index1)">{{item1.name}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="h-25"></view>
				<view class="roww fs-25">
					<view>数量</view>
					<view class="allline"></view>
					<view class="roww">
						<view class="jiajian" @click.stop="getcountClick(1)">-</view>
						<view class="w-15"></view>
						<input v-if="selSpace" v-model="selSpace.count" style="text-align: center;" class="w-70"
							placeholder="数量" />
						<input v-else value="0" disabled style="text-align: center;" class="w-70" placeholder="数量" />
						<view class="w-15"></view>
						<view class="jiajian" @click.stop="getcountClick(2)">+</view>
					</view>
				</view>

				<view class="h-25"></view>
				<view class="roww rowsa">
					<image @click.stop="addCart()" src="https://shandongtibohui.zsyflive.com/profile/按钮 (6).png"
						class="w-300 h-90"></image>
					<view class="w-30"></view>
					<image src="../../static/lijigoumai.png" @click.stop="toOrder" class="w-300 h-90"></image>
					<view class="w-30"></view>
				</view>

			</view>
		</view>



		<view class="h-150"></view>
		<view class="roww bottomview center_center">
			<view class="w-30"></view>
			<view class="roww duiqi" style="font-weight: bold;">
				<view class="fs-25">￥</view>
				<view class="fs-50">39.99</view>
			</view>
			<view class="allline"></view>
			<image @click.stop="tochat()" src="https://shandongtibohui.zsyflive.com/profile/按钮 (6).png" class="w-200"
				mode="widthFix"></image>
			<view class="w-30"></view>
			<image src="../../static/lijigoumai.png" @click.stop="toOrder" class="w-200" mode="widthFix"></image>
			<view class="w-30"></view>
		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodInfo: {},
				options: {},
				selSpace: null,

			}
		},
		onLoad(options) {
			this.options = options;
			this.getGoodInfo();
		},
		methods: {
			addCart(){
				if (!this.selSpace) {
					this.$tools.showToast("请先选择规格");
					return false;
				}
				var obg={
					code:this.goodInfo.code,
					sku:this.selSpace.sku,
					num:this.selSpace.count,
					uuid:uni.getStorageSync("userInfo").id,
				}
				this.$axios
					.axios('POST', this.$paths.addCar, obg)
					.then((res) => {
						if (res.code == 1) {
							this.$tools.showToast("添加购物车成功");
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 规格点击事件
			getcountClick(type) {
				if (!this.selSpace) {
					this.$tools.showToast("请先选择规格");
					return false;
				}
				if (type == 1) {
					if (this.selSpace.count >= 2) {
						this.selSpace.count = this.selSpace.count - 1;
					}
				} else if (type == 2) {
					this.selSpace.count = this.selSpace.count + 1;
				}
				console.log('--', type, this.selSpace.count);
				this.$forceUpdate()
			},
			// 判断选择的规格哪一个
			getSelSpace(item, index, index1) {
				var selspace = {};
				var txtlust = [];
				var spaceList = this.goodInfo.data_specs;
				for (var a = 0; a < spaceList.length; a++) {
					var list = spaceList[a].list;
					for (var b = 0; b < list.length; b++) {
						if (list[b].show) {
							txtlust.push(list[b].group + "::" + list[b].name);
						}
					}
				}
				console.log('txtlust', txtlust, txtlust.join(";;"))
				var spaceItems = this.goodInfo.data_items;
				var txt = txtlust.join(";;");
				var spaceindex = -1;
				for (var a = 0; a < spaceItems.length; a++) {
					if (spaceItems[a][0].key == txt) {
						console.log("当前选择的规格", spaceItems[a][0])
						if(spaceItems[a][0].status){
							spaceindex = a;
						}else{
							 this.goodInfo.data_specs[index].list[index1].show=false;
							 this.$tools.showToast("无此规格");
						}
						
					}
				}
				if (spaceindex >= 0) {
					var selSpace = spaceItems[spaceindex][0];
					selSpace.count = 1;
					this.selSpace = selSpace;
				} else {
					this.selSpace = null;
				}
			},

			// 选择商品规格
			spaceClick(item, index, index1) {

				var data_specs = this.goodInfo.data_specs;
				var list = data_specs[index].list;

				console.log("===", list);

				for (var b = 0; b < list.length; b++) {
					if (index1 == b) {
						list[b].show = true;
					} else {
						list[b].show = false;
					}
				}
				data_specs[index].list = list;

				console.log("==1=", list);

				this.goodInfo.data_specs = data_specs;
				this.$forceUpdate();
				this.getSelSpace(item, index, index1);
			},
			// 获取商品详情
			getGoodInfo() {
				var data = {
					'code': this.options.id
				};
				this.$axios
					.axios('POST', this.$paths.getGoodsInfo, data)
					.then((res) => {
						if (res.code == 1) {
							var goodInfo = res.data;
							for (var b = 0; b < goodInfo.marks.length; b++) {
								if (goodInfo.marks[b] == '新品') {
									goodInfo.xinpin = true;
								} else if (goodInfo.marks[b] == '热卖') {
									goodInfo.remai = true;
								}
							}
							// 整理规格
							var spaceList = goodInfo.data_specs;
							for (var a = 0; a < spaceList.length; a++) {
								for (var b = 0; b < spaceList[a].list.length; b++) {
									spaceList[a].list[b].show = false;
								}
							}
							goodInfo.data_specs = spaceList;
							this.goodInfo = goodInfo;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			toOrder() {
				uni.navigateTo({
					url: "/pages2/trueOrder/trueOrder"
				})
			},
			tochat() {
				uni.navigateTo({
					url: "/pages1/myChart/myChart"
				})
			}
		}
	}
</script>

<style>
	@import url(goodInfo.css);
</style>