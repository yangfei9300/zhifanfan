<template>
	<view class="content">
		<image class="topimg" src="/static/shouye.png" mode="widthFix"></image>
		<view class="topviewbutton" :style="{
			'height':buttoninfo.height+'px',
			'top':buttoninfo.top+'px',
		}"
		style="z-index: 1000;"
		>
			<view class="roww">
				<view class="leftsousuo roww center_center"
				:style="{
					'height':buttoninfo.height+'px',
					'margin-left':(systemInfo.screenWidth-buttoninfo.right)+'px'
				}"
				>
					<view class="w-28"></view>
					<image src="/static/sousuo.png" class="leftsousuoimg"></image>
					<view class="w-20"></view>
					<view class="sstxt">秋装新款上架</view>
					<view class="allline"></view>
					<!-- <view class="sousuoright">搜索</view> -->
					<image src="/static/Vector.png" class="w-96 h-48"></image>
					<view class="w-10"></view>
				</view>
			</view>
		</view>
		
		
		<view class="colonn" style="z-index: 20000;">
			<view class="w-750"
			:style="{
				'height':(buttoninfo.height+systemInfo.statusBarHeight)+'px',
			}"
			></view>
			<view class="h-40"></view>
			<view class="bannerview ">
				<view class="bannerbottom roww">
					<view class="w-16"></view>
					<view class="lefttxt">品牌好物</view>
					<view class="w-20"></view>
					<scroll-view scroll-x class="w-580 roww" >
						<view class="roww ">
							
							<view class="goodview1 colonn" v-for="(item,index) in 18">
								<view class="h-26"></view>
								<image class="goodimg1" ></image>
								<view class="h-10"></view>
								<view class="goodname1 txtShowLength">洁柔纸抽</view>
							</view>
						</view>
					</scroll-view>
				</view>	
			</view>
			<view class="h-30"></view>
			<view class="roww menusview rowsb">
				<view class="colonn center_center">
					<image class="menuicon" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">每日签到</view>
				</view>
				<view class="colonn center_center">
					<image class="menuicon" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">我的订单</view>
				</view>
				<view class="colonn center_center">
					<image class="menuicon" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">小红书转换</view>
				</view>
				<view class="colonn center_center">
					<image class="menuicon" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">抖音转换</view>
				</view>
				<view class="colonn center_center">
					<image class="menuicon" mode=""></image>
					<view class="h-10"></view>
					<view class="fs-25 colorzng">能量心语</view>
				</view>
			</view>
			
		</view>
		
		
		
		
		
		
		
		
		<view class="colonn" style="z-index: 1000;">
			
		
		<image class="banner2" 
		mode="widthFix"
		src="https://s3-alpha-sig.figma.com/img/c988/6b1a/7199ba5058bec566ab347ce40bf11bdd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kWJZA~6swXiTZ6XSe1DErzY04KWVg6jrophzBRJdwDRZL9IlO1yjh2QqUjS~eXPfd0b2zSQeRfaYznCXFeMWc7BDLr7WsDK3yxLk9Uwvxjt-oOzCA2~GMu1bDBsu3AuRwPT23BzZ~6RsJcSyq-i5ZADmfzs604y-WC2Fj4tmehx4rwHsl~CL1pTyFyhFxSK3FQI3-2FygpetwoaHGNdozUJAaCoeFzB1c-am9AJcoKuV44NiIccFzQy3YIesIxpmjHa79wv2N66HJ0MMjZ95MNE87zPUCscpfauZY17et6Nl-0Thluisbl-jTGE5AUbyZaErlb4KXMj0mJfFSgaciQ__">
		</image>
		<image class="banner3"
		mode="widthFix"
		src="https://s3-alpha-sig.figma.com/img/5477/4e24/a142c89c3d1ae25f39ab8c25db3d04a6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8QszvbZoN2U4J-iCLclVK4MAeRd6Du1~8QFpz~CyWizeDsuCymdXhPCQYsIfYerHi5YhEruYlloLsb9Sgga1pSeFCNs1zlXlcDYdjm9TUV1vRF9washnz~CEiDtsNekCiGMAnQqR0j8kPzD1Vas1SJ1WHT3oFBQZoaRdTP9HWaLcQswKGO5JOMuRmkjOKfOwkiAU5n6cJKB3XyS11Ihat6xuOkNi52MNb51K83n2z1fxCp4LDNTA1irjMr2ztFoKx08~V5weguB-NlJu5GgdU~dNtGLgFP2XicJ8J2AoT0Pt6Uqmmscm5r0jSe6rr7t57vFXVAAaBxQPVqJlXQHsQ__">
		</image>
		<view class="h-30"></view>
		<view class="roww rowsb p-all-25" >
			<view class="colonn">
				<image src="https://s3-alpha-sig.figma.com/img/9e16/111d/bd04c92b2b855bb237a3643a007a4539?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bR7HT2bYgyepgHFH873BL0WDIcCaS8kXy~tlYoZxymhDjBaP2Ge5iqPT1kqBtF6UzCd712HgMY30JboAtfTTcI4TRsqPT3RCviXn6fKgqBD~xAvpzAGUXFis6SOVCJtg5iUlmTm5KbRM9T5NaLjTr7TejSDaKZ7aCX15UWuqAqHw88-~ZnAdfhouPXL3Z-7pxQR3OQUR3PxJCYfWQlvn2xb9DvNl8C901x5689khz-Ho-~yxiBt2A-xS7w1gi3FfWmxXNt-zAhyCZpBDb6Ke3KOB2np3PoVPfWKobFlF3dNJh3xtZ8yfCTJH2PGQjC09vKY07QQL~Lgpgixca0uFhA__"
				class="w-340 br-24 m-bottom-20" mode="widthFix"
				></image>
				<homeGoodItem 
				v-for="(item,index) in 8" class="">
					
				</homeGoodItem>
			</view>
			<view class="colonn">
				<view class="xianshi colonn">
					
				</view>
				<homeGoodItem
				v-for="(item,index) in 8" class="">
					
				</homeGoodItem>
			</view>
		</view>
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
		methods: {

		}
	}
</script>

<style>
	@import url(index.css);
</style>
