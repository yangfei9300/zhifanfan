### 调用实例
```
<template>
	<view style="background-color: antiquewhite;margin: 20rpx 0;">
		<!-- 横向滚动 -->
		<mz-marque direction="horizontal" :marqueList="list" leftIcon :speed="2"></mz-marque>
	</view>
	<view style="background-color: antiquewhite;margin: 20rpx 0;">
		<!-- 横向滚动,使用左侧icon插槽 -->
		<mz-marque direction="horizontal" :marqueList="list" leftIcon :speed="2">
			<icon slot="leftIcon" type="success" size="26"/>
		</mz-marque>
	</view>
	<view style="background-color: antiquewhite;margin: 20rpx 0;">
		<!-- 纵向横向滚动 -->
		<mz-marque direction="vertical" :marqueList="list" leftIcon :speed="2"></mz-marque>
	</view>

</template>

export default {
	data(){
		return {
			list: [{
					id: 1,
					title: '这是跑马灯消息数据第一条'
				},
				{
					id: 2,
					title: '这是跑马灯消息数据第二条'
				},
				{
					id: 3,
					title: '这是跑马灯消息数据第三条'
				}
			],
		}
	}
}
```
***
**可用属性**
***
prop传参|说明|类型|默认值|可选值
---|:--:|---:|---:
marqueList|消息列表|Array|[]| 
height|高度（单位为rpx）|Number,String|80|
direction|滚动方向|String|vertical|横向滚动：horizontal，纵向滚动：vertical；
loop|是否循环头尾相接|Boolean|true|false
speed|滚动速度(秒)|Number|3| 
leftIcon|左侧icon是否显示|Boolean|false|true
rightIcon|右侧icon是否显示|Boolean|false|true
field|自定义字段|String|title| 
***

**可用插槽**
***
插槽名称|说明
---|:--:
leftIcon|左侧icon
rightIcon|右侧icon
***

