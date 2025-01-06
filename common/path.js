// 项目域名
export const BASE_URL = 'https://zff.imjiayi.com'
// export const BASE_URL = 'https://frdhwapi.zsyflive.com/api'

//----------项目接口请求路径-----------
// 登录  
const apilogin =BASE_URL + '/api/user/login' 
// 获取个人信息  /api/user/getUserData
const getUserData =BASE_URL + '/api/user/getUserData' 
// 添加收获地址
const addUserAddress =BASE_URL + '/api/user/addUserAddress' 
// 获取地址列表
const getUserAddress =BASE_URL + '/api/user/getUserAddress' 
// 删除地址 /api/user/delUserAddress
const delUserAddress =BASE_URL + '/api/user/delUserAddress' 
// 修改地址
const updateUserAddress =BASE_URL + '/api/user/updateUserAddress' 
// 获取商品分类 /api/shop/getGoodsCate
const getGoodsCate =BASE_URL + '/api/shop/getGoodsCate' 
// 点击签到 /api/sign/userSign
const getuserSign =BASE_URL + '/api/sign/userSign' 
// 获取签到数据 /api/sign/getUserSign 
const getUserSign1 =BASE_URL + '/api/sign/getUserSign'
// 获取商品列表  
const getGoodsList =BASE_URL + '/api/shop/getGoodsList'
// 获取轮播图
const homeSlider =BASE_URL + '/api/page/homeSlider'
// 获取能量心语轮播图
const momentSlider =BASE_URL + '/api/page/momentSlider'
// 新闻详情  /api/page/getNews
const getNews =BASE_URL + '/api/page/getNews'
// 获取商品详情
const getGoodsInfo =BASE_URL + '/api/shop/getGoodsInfo'
// 加入购物车  /api/car/addCar
const addCar =BASE_URL + '/api/car/addCar'
// 获取购物车
const getCarList =BASE_URL + '/api/car/getCarList'
// 删除购物车
const delCar =BASE_URL + '/api/car/delCar'





 export default {
	 delCar,
	 getCarList,
	 addCar,
	 getGoodsInfo,
	 getNews,
	 momentSlider,
	 homeSlider,
	 getGoodsList,
	 getUserSign1,
	 getuserSign,
	 getGoodsCate,
	 updateUserAddress,
	 delUserAddress,
	 getUserAddress,
	 addUserAddress,
	 
	 apilogin,getUserData,
 }
 