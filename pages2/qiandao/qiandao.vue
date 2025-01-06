<template>
	<view>

		<view style="width: 750rpx;background-color: white;z-index: 100000;position: fixed;top: 0rpx;" :style="{
				height:(buttoninfo.bottom+20)+'px'
			}" v-if="scrollHeight>20">
			<view class="topviewbutton roww rowsb center_center" :style="{
				'height':buttoninfo.height+'px',
				'top':buttoninfo.top+'px',
			}" style="background-color: white;">
				<image src="/static/zuojiantou.png"
				 @click.stop="toback1"
				 class="w-30 h-30 m-left-40"></image>
				</image>
				<view>签到</view>
				<image
				src="/static/zuojiantou.png" class="w-30 h-30 yincang1 m-left-40"></image>
			</view>

		</view>

		<view class="colonn" 
		style="position: relative;height: 1100rpx;">
			<image src="https://shandongtibohui.zsyflive.com/profile/沉浸式背景.png" class="w-750 " 
			style="height: 1100rpx;">
			</image>
			<view class="topviewbutton roww rowsb center_center" :style="{
					'height':buttoninfo.height+'px',
					'top':buttoninfo.top+'px',
				}" style="color: black;">
				<image src="/static/zuojiantou.png"
				 @click.stop="toback1" class="w-30 h-30 m-left-40"></image>
				<view>签到</view>
				<image src="/static/zuojiantou.png" class="w-30 h-30 yincang"></image>
			</view>
			<view class="roww center_center w-750" style="z-index: 1000;position: absolute;" :style="{
					'height':buttoninfo.height+'px',
					'top':(buttoninfo.top+80)+'px',
				}">
				<view class="w-30"></view>
				<image class="headers" src="https://shandongtibohui.zsyflive.com/profile/zhifanfan/headers.png"></image>
				<view class="w-30"></view>
				<view class="colonn" style="color: white;">
					<view>枝繁繁的能量女孩</view>
					<view class="roww fs-30 duiqi">
						<view>当前积分：</view>
						<view class="fs-45">{{userInfo.credit_balance}}</view>
						<view>积分</view>
					</view>
				</view>
				<view class="allline"></view>
				<image  @click.stop="toduihuan"  src="/static/quduihuan.png" class="w-150" mode="widthFix"></image>
			</view>
			<view class="rilivie colonn" :style="{
					'top':(buttoninfo.top+150)+'px',
				}">
				<view class="roww rowsb p-all-30">
					<image src="../../static/zuoh.png" class="w-50 h-50"
					@click.stop="getNowYearMonth(1)"
					></image>
					<view class="roww w-250 center_center months">
						<view style="color: #FE236C;font-weight: bold;">{{nowMonthTxt}}</view>
					</view>
					<image src="../../static/youh.png" class="w-50 h-50"
					@click.stop="getNowYearMonth(2)"></image>
				</view>
				<view class="huanhang p-all-20 rowsb">
					<view 
					v-for="(item,index) in days"
					:class="{
						'dayviewno':!item.is,
						'dayviewno1':item.is
					}"
					>{{item.ri}}</view>
					
					<view
					v-for="(item,index) in (30-days.length)"
					class="yincang1"
					:class="{
						'dayviewno':!item.is,
						'dayviewno1':item.is
					}"
					>0{{index}}</view>
				</view>
				<view class="roww center_center">
					<image @click.stop="clickSign" 
					src="/static/lijiqiandao.png" 
					class="w-200" 
					mode="widthFix"></image>
				</view>
				<view class="h-20"></view>
				<view class="roww center_center fs-25">
					<view>每日签到可得1积分</view>
				</view>
				
			</view>
		</view>
		<view class="h-50"></view>
		<view class="colonn">

			<view class="colonn background1" style="margin:25rpx;">
				<view class="h-30"></view>
				<view class=" colonn center_center">
					<view>做任务得积分</view>
					<view class="h-20"></view>
					<view class="line112"></view>
				</view>
				<view class="roww  center_center m-all-20 br-25" 
				style="padding:0rpx 20rpx 0rpx 0rpx;">
					<image src="/static/dyy1.png" class="w-110 h-110"></image>
					<view class="colonn rowsb ">
						<view class="fs-35">
							抖音订单转换
						</view>
						<view class="h-5"></view>
						<view class="fs-25 w-420 txtShowLength" style="color: #999999;">
							合作直播间订单转换成功，积分涨涨涨。
						</view>
					</view>
					<view class="allline"></view>
					<image src="/static/yiwanchen.png" class="w-100 h-40"></image>
				</view>
				<view class="roww  center_center m-all-20 br-25" 
				style="padding:0rpx 20rpx 0rpx 0rpx;">
					<image src="/static/xhss1.png" class="w-110 h-110"></image>
					<view class="colonn rowsb ">
						<view class="fs-35">
							小红书订单转换
						</view>
						<view class="h-5"></view>
						<view class="fs-25 w-420 txtShowLength" style="color: #999999;">
							合作直播间订单转换成功，积分涨涨涨。
						</view>
					</view>
					<view class="allline"></view>
					<image src="/static/yiwanchen.png" class="w-100 h-40"></image>
				</view>
				<view class="roww  center_center m-all-20 br-25" 
				style="padding:0rpx 20rpx 0rpx 0rpx;">
					<image src="https://shandongtibohui.zsyflive.com/profile/dianzan.png" class="w-110 h-110"></image>
					<view class="colonn rowsb ">
						<view class="fs-35">
							邀请新用户注册
						</view>
						<view class="h-5"></view>
						<view class="fs-25 w-420 txtShowLength" style="color: #999999;">
							合作直播间订单转换成功，积分涨涨涨。
						</view>
					</view>
					<view class="allline"></view>
					<image src="/static/yiwanchen.png" class="w-100 h-40"></image>
				</view>
			</view>

			<view class="h-30"></view>
			<view class=" colonn center_center">
				<view>积分兑换</view>
				<view class="h-20"></view>
				<view class="line112"></view>
			</view>
			<view class="h-60"></view>
			<view class="huanhang rowsa">
				<homeGoodItem 
				:obg="item"        
				v-for="(item,index) in goodList"></homeGoodItem>
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				buttoninfo: {}, //胶囊按钮信息
				systemInfo: {}, //设备信息
				goodHight: 0,
				scrollHeight: 0,
				
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
				nowMonthTxt:'',
				nowMonthDate:'',
				days:[],
				userInfo:null,
			}
		},
		onLoad() {
			// 获取胶囊的位置
			var info = uni.getMenuButtonBoundingClientRect();
			this.buttoninfo = info;
			var systemInfo = uni.getSystemInfoSync();
			this.systemInfo = systemInfo;
			console.log(systemInfo);
			// 顶部的高度转换
			var bili = systemInfo.windowWidth / 750;
			console.log("比例", bili);
			this.goodHight = bili * 557;
			
			// var year = now.getFullYear();
			// var month = (now.getMonth() + 1).toString().padStart(2, '0');
			// this.nowMonthDate=year+"-"+month;
			this.userInfo=uni.getStorageSync("userInfo");
			
			this.getCurrentMonthInChinese();
			this.gGetUserSign();
		},
		onPageScroll(res) {
			console.log("--", res);
			this.scrollHeight = res.scrollTop;
		},
		methods: {
			toduihuan(){
				uni.switchTab({
					url:"/pages/index2/index2"
				})
			},
			// 获取个人信息（）{}，
			getUserInfo(){
				var data = {
					uuid:this.userInfo.id
				};    
				this.$axios
					.axios('POST', this.$paths.getUserData, data)
					.then((res) => {
						if (res.code == 1) {
							this.userInfo.credit_balance=res.data.credit_balance;
							uni.setStorageSync("userInfo",this.userInfo);
							this.userInfo=this.userInfo;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 获取签到数据
			gGetUserSign(){
				var userInfo=uni.getStorageSync("userInfo");
				var year = parseInt(this.nowMonthDate.split("-")[0]);
				var month = parseInt(this.nowMonthDate.split("-")[1]); // 月份从 0 开始，所以要加 1
				
				var data = {
					uuid:userInfo.id,
					month:year+"-"+month
				};
				
				this.$axios
					.axios('POST', this.$paths.getUserSign1, data)
					.then((res) => {
						if (res.code == 1) {
							console.log("res",res);
							this.getDaysInCurrentMonth(res.data);
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			//点击签到
			clickSign(){
				var now = new Date();
				var year = now.getFullYear();
				var month = (now.getMonth() + 1).toString().padStart(2, '0');
				var day = now.getDate().toString().padStart(2, '0');
				var dateStr = `${year}-${month}-${day}`;
				var userInfo=uni.getStorageSync("userInfo");
				var data = {
					uuid:userInfo.id,
					date:dateStr
				};    
				this.$axios
					.axios('POST', this.$paths.getuserSign, data)
					.then((res) => {
						if (res.code == 1) {
							this.gGetUserSign();
							this.getUserInfo();
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 获取当前月的数据
			getDaysInCurrentMonth(list){
				   let now = new Date();
				   let year = parseInt(this.nowMonthDate.split("-")[0]);
				   let month = parseInt(this.nowMonthDate.split("-")[1]); // 月份从 0 开始，所以要加 1
				   let totalDays = new Date(year, month, 0).getDate(); // 获取当前月份的总天数
				   let days = [];
				   for (let day = 1; day <= totalDays; day++) {
				       let dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
				       var obg={
						   'txt':dateStr,
						   'is':false,
						   'ri':dateStr.split("-")[2]
					   }
					   for(var a=0;a<list.length;a++){
						   if(list[a].date==dateStr){
							   obg.is=true;
						   }
					   }
					   days.push(obg);
				   }
				   this.days=days;
				   console.log("==daysdays==",days)
			},
			// 获取当前月 汉字
			getCurrentMonthInChinese(){
				    const monthsInChinese = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
				    const currentDate = new Date();
					const currentYear = currentDate.getFullYear();
				    const currentMonth = currentDate.getMonth(); // getMonth() 返回的月份是从 0 开始的（0-11）
				    this.nowMonthTxt= monthsInChinese[currentMonth];
					this.nowMonthDate= currentYear+"-"+(currentMonth+1);
			},  
			// 年月切换
			getNowYearMonth(type){
				let input = this.nowMonthDate;
				let [year, month] = input.split('-').map(Number);
				if(type==1){//上一个月
					if (month === 1) {
					    year -= 1;
					    month = 12;
					} else {
					    month -= 1;
					}
				}else{
					if (month === 12) {
					    year += 1;
					    month = 1;
					} else {
					    month += 1;
					}
				}
				let previousMonth = `${year}-${month.toString().padStart(2, '0')}`;
				const monthsInChinese = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
				this.nowMonthTxt=monthsInChinese[parseInt(previousMonth.split("-")[1]-1)]
				console.log(previousMonth)
				this.nowMonthDate=previousMonth;
				this.gGetUserSign();
			},
			// 返回上一页
			toback1(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	@import url(qiandao.css);
</style>