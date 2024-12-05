# cc-noticeBar 


##uniapp专属精品组件页面模板（由前端组件开发出品）精品组件页面模板

###●组件模板规划：
由前端组件开发出品的精品组件页面模板，将陆续发布，预计高达约几百种供您使用，是快速快发项目、创业的必备精品。

合集地址： uni-app模板合集地址：(https://ext.dcloud.net.cn/publisher?id=274945) 如查看全部页面模板，请前往上述uniapp插件市场合集地址；

###●组件模板效果图：
可下载项目后预览，效果图见右侧图片；

###●组件模板费用：
学习：免费下载，进行学习，无费用；

使用/商用：本页面地址赞赏10元后，可终身商用；

###●组件模板使用版权/商用：
本组件模板免费下载可供学习，如需使用及商用，请在本组件页面模板进行赞赏10元

（仅需10元获取精品页面模板代码-物有所值，1个组件页面市场价100元 ）

赞赏10后（当前项目产生赞赏订单可追溯）即可终身商用当前本地址下载的页面模版代码，不同下载地址需进行不同的赞赏。（不赞赏就进行商用使用者，面临侵权！保留追究知识产权法律责任！后果自负！）

 
### 我的技术微信公众号

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法 
```使用方法
<!-- 默认颜色#333公告栏 -->
<view class="header">默认颜色公告栏</view>
<!-- noticeList：通知数组  @click:公告栏条目点击事件-->
<cc-noticeBar :noticeList="noticeList" @click="itemClick"></cc-noticeBar>

<!-- 橄榄色公告栏 -->
<view class="header">橄榄色公告栏</view>
<!-- noticeList：通知数组 colors：设置文字颜色  @click:公告栏条目点击事件 -->
<cc-noticeBar :noticeList="noticeList" colors="olive" @click="itemClick"></cc-noticeBar>	

```

#### HTML代码实现部分
```html
<template>
	<view class="content">


		<!-- 默认颜色#333公告栏 -->
		<view class="header">默认颜色公告栏</view>
		<!-- noticeList：通知数组  @click:公告栏条目点击事件-->
		<cc-noticeBar :noticeList="noticeList" @click="itemClick"></cc-noticeBar>

		<!-- 橄榄色公告栏 -->
		<view class="header">橄榄色公告栏</view>
		<!-- noticeList：通知数组 colors：设置文字颜色  @click:公告栏条目点击事件 -->
		<cc-noticeBar :noticeList="noticeList" colors="olive" @click="itemClick"></cc-noticeBar>

		<!-- 橙色公告栏 -->
		<view class="header">橙色背景公告栏</view>
		<!-- noticeList：通知数组 colors：设置文字颜色  @click:公告栏条目点击事件 -->
		<cc-noticeBar :noticeList="noticeList" colors="orange" @click="itemClick"></cc-noticeBar>

		<!-- 粉色公告栏 -->
		<view class="header">粉色背景公告栏</view>
		<!-- noticeList：通知数组 colors：设置文字颜色  @click:公告栏条目点击事件 -->
		<cc-noticeBar :noticeList="noticeList" colors="#e03997" @click="itemClick"></cc-noticeBar>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				colors: '#fa436a',
				noticeList: [{
						id: 1,
						title: '征程这些伟大精神 串连起中国共产党人的精神谱系'
					},
					{
						id: 2,
						title: '增强水运发展新动能 前5月港口货物吞吐量增长7.9%'
					},
					{
						id: 3,
						title: '多地持续高温 各地采取措施积极应对'
					},
					{
						id: 4,
						title: '中非经贸博览会见证中非合作深度'
					},
					{
						id: 5,
						title: '国安家安得民心 保驾护航促治兴'
					}
				],



			}
		},

		methods: {

			itemClick: function(item) {

				console.log("点击公告栏条目item = " + JSON.stringify(item));
				uni.showModal({
					title: '点击公告栏条目',
					content: "点击公告栏条目item = " + JSON.stringify(item)
				})
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;

	}

	.header {

		margin-left: 3%;
		width: 94%;
		line-height: 30px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-weight: 550;
		height: 30px;
		font-size: 14px;
		margin-top: 10px;

	}
</style>



```