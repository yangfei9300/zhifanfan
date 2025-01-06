<template>
	<view>
		<view class="p-all-20">
			<rich-text :nodes="Info.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:{},
				Info:{}
			}
		},
		onLoad(options) {
			this.options=options;
			this.getinfo()
		},
		methods: {
			getinfo(){
				var data = {
					'news_id':this.options.id
				};
				this.$axios
					.axios('POST', this.$paths.getNews, data)
					.then((res) => {
						if (res.code == 1) {
							uni.setNavigationBarTitle({
								title:res.data.name
							})
							var info=res.data;
							if(info.content){
								info.content=this.$tools.formatRichText(info.content);
							}
							this.Info = info;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(xinwens.css);
</style>
