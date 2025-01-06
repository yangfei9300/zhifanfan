<template>
	<view>
		<view class="p-all-30">
			<view class="colonn w-690 br-30  background1 p-all-30">
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>收件人</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入收件人" 
						class="allline fs-35"
						v-model="form.name"
						 />
					</view>
				</view>
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>手机号码</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input  maxlength="11"
						placeholder-class="fs-35"
						placeholder="请输入手机号码" 
						class="allline fs-35"
						v-model="form.phone"
						 />
					</view>
				</view>
				<picker mode="region" @change="diquChange">
					<view class="colonn m-bottom-30">
						<view class="roww">
							<view>选择地区</view>
							<view style="color: #FE236C;">*</view>
						</view>
						<view class="h-15"></view>
						<view class="tias roww fs-37 center_center">
							<view class="w-30"></view>
							<view v-if="form.province!=''">{{form.province}}-{{form.city}}-{{form.area}}</view>
							<view v-else style="color: #999999;">请选择地区</view>
							<view class="allline"></view>
						</view>
					</view>
				</picker>
				
				
				<view class="colonn m-bottom-30">
					<view class="roww">
						<view>详细地址</view>
						<view style="color: #FE236C;">*</view>
					</view>
					<view class="h-15"></view>
					<view class="tias roww center_center">
						<view class="w-30"></view>
						<input 
						placeholder-class="fs-35"
						placeholder="请输入详细地址" 
						class="allline fs-35"
						v-model="form.address"
						 />
					</view>
				</view>
				<view class="roww center_center"
				@click.stop="morenClick"
				>
					<image v-if="form.type==1"
					src="/static/xuanzhong2.png" 
					class="w-40 h-40"
					></image>
					<image v-else
					src="/static/xuanzhong1.png" 
					class="w-40 h-40"
					></image>
					<view class="w-20"></view>
					<view class="fs-35">设为默认地址</view>
					<view class="allline"></view>
				</view>
				
			</view>
		</view>
		
		<view class=" roww center_center m-top-50">
			<image src="/static/baocun.png" 
			class="w-300" 
			mode="widthFix" @click.stop="toSubmit"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					uuid:"",
					province:"",
					city:"",
					area:"",
					name:"",
					phone:"",
					address:"",
					type:"0"
				}
			}
		},
		onLoad() {
			var addressUpdate=uni.getStorageSync("addressUpdate");
			if(addressUpdate){
				this.form=addressUpdate;
			}
			var userInfo=uni.getStorageSync("userInfo");
			this.form.uuid=userInfo.id;
		},
		onUnload() {
			uni.removeStorageSync("addressUpdate");
		},
		methods: {
			// 提交信息
			toSubmit(){
				if(!this.isSubmit()){
					return ;
				}
				var data = this.form
				var url= this.$paths.addUserAddress;
				if(this.form.address_id){
					url=this.$paths.updateUserAddress;
				}
				this.$axios
					.axios('POST', url, data)
					.then((res) => {
						if (res.code == 1) {
							this.$tools.showToast("提交成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			// 判断是否可以提交
			isSubmit(){
				if(this.form.name==''){
					this.$tools.showToast("请输入收件人姓名");
					return false;
				}
				if(this.form.phone==''){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(!this.$tools.isphone(this.form.phone)){
					this.$tools.showToast("请输入正确的手机号");
					return false;
				}
				if(this.form.province==''){
					this.$tools.showToast("请选择地区");
					return false;
				}
				if(this.form.address==''){
					this.$tools.showToast("请输入详细地址");
					return false;
				}
				return true;
			},
			// 默认点击
			morenClick(){
				this.form.type=this.form.type==1?0:1;
			},
			// 地区选择改变
			diquChange(res){
				console.log('[]',res)
				this.form.province=res.detail.value[0];
				this.form.city=res.detail.value[1];
				this.form.area=res.detail.value[2];
			}
		}  
	}
</script>

<style>
@import url(addAddress.css);
</style>
