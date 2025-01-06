<template>
	<view>
		
		
		
		<view class="topview colonn"
		>
			<view
			:style="{
				height:buttoninfo.bottom+'px'
			}"
			></view>
			
			<view class="colonn p-all-40">
				<view class="fs-28">当前积分</view>
				<view class="h-20"></view>
				<view class="roww w-670 duiqi">
					<view class="fw-800 fs-55 " style="color: #A16740;line-height: 120rpx;"
					v-if="userInfo"
					>{{userInfo.credit_balance}}</view>
					<view class="fw-800 fs-55 " style="color: #A16740;line-height: 120rpx;"
					v-else
					>0</view>
					<view class="allline"></view>
					<view class="guizee">当前规则</view>
				</view>
			</view>
			<view class="w-750">
				<v-tabs
				bgColor=""
				 v-model="current"
				 activeColor="#FFA0C1" 
				 lineColor="#FFA0C1"  
				 :tabs="goodTypeList" 
				 field="name"
				 @change="changeTab"
				 ></v-tabs>
			</view>
			<view class="h-30"></view>
		</view>
		
		
		<scroll-view scroll-y 
		:style="{
			height:(systemInfo.windowHeight-goodHight)+'px'
		}"
		>
			
		
		<view class="roww rowsb p-all-25" >
			<view class="colonn">
				<homeGoodItem 
				v-for="(item,index) in goodList1"
				 :obg="item" v-if="index%2==0"
				 class="">
					
				</homeGoodItem>
			</view>
			<view class="colonn">
				<homeGoodItem
				v-for="(item,index) in goodList1"
				 :obg="item" class="" v-if="index%2!=0">
					
				</homeGoodItem>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [
				  '全部',
				  '护肤',
				  '美妆',
				  '数码',
				  '母婴',
				  '生活',
				],
				
				buttoninfo:{},//胶囊按钮信息
				systemInfo:{},//设备信息
				goodHight:0,
				
				goodList:[
					{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good11.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good2.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good3.png'
					},{
						'src':'https://shandongtibohui.zsyflive.com/profile/zhifanfan/good4.png'
					}
				],
				goodList1:[],
				userInfo:null,
				goodTypeList:[],
			}
		},
		onLoad() {
			// 获取胶囊的位置
			var info= uni.getMenuButtonBoundingClientRect();
			this.buttoninfo=info;
			var systemInfo= uni.getSystemInfoSync();
			this.systemInfo=systemInfo;
			console.log(systemInfo);
			
			// 顶部的高度转换
			var bili=systemInfo.windowWidth/750;
			console.log("比例",bili);
			this.goodHight=bili*494;
			this.getGoodType();
			this.getJingxuan();
		},
		onShow() {
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.userInfo=userInfo;
				this.getUserInfo()
			}
		},
		methods: {
			// 获取精选
			getJingxuan(){
				var data = {
					'type':'1',
					'cate':'',
					'is_selection':'',//1是精选
				};    
				if(this.current>0){
					data.cate=this.goodTypeList[this.current].id
				}
				this.$axios
					.axios('POST', this.$paths.getGoodsList, data)
					.then((res) => {
						if (res.code == 1) {
							var goodList1=res.data;
							for(var a=0;a<goodList1.length;a++){
								goodList1[a].gt=1;
								
								goodList1[a].xinpin=false;
								goodList1[a].remai=false;
								for(var b=0;b<goodList1[a].marks.length;b++){
									if(goodList1[a].marks[b]=='新品'){
										goodList1[a].xinpin=true;
									}else if(goodList1[a].marks[b]=='热卖'){
										goodList1[a].remai=true;
									}
								}
								
							}
							this.goodList1=goodList1;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 获取商品分类
			getGoodType(){
				var data = {
				};    
				this.$axios
					.axios('POST', this.$paths.getGoodsCate, data)
					.then((res) => {
						if (res.code == 1) {
							var goodTypeList=res.data;
							for(var a=0;a<goodTypeList.length;a++){
								goodTypeList[a].is=false;
							}
							var obg={
								id:-1,
								'is':true,
								'name':'全部'
							}
							var list=[obg];
							for(var a=0;a<goodTypeList.length;a++){
								goodTypeList[a].is=false;
								
								list.push(goodTypeList[a])
							}
							this.goodTypeList=list;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			getUserInfo(){
				var data = {
					uuid:this.userInfo.id
				};    
				this.$axios
					.axios('POST', this.$paths.getUserData, data)
					.then((res) => {
						if (res.code == 1) {
							uni.setStorageSync("userInfo",this.userInfo);
							this.userInfo=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			changeTab(index) {
			  console.log('当前选中的项：' + index)
			  this.current=index;
			  this.getJingxuan()
			},
		}
	}
</script>

<style>
@import url(index2.css);
</style>
