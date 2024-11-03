// 项目域名
export const BASE_URL = 'https://lq.imjiayi.com/api'
// export const BASE_URL = 'https://frdhwapi.zsyflive.com/api'

//----------项目接口请求路径-----------
// 登录  
const apilogin =BASE_URL + '/api/login' 
 // 获取对答如流所有题目  
const getQuestion =BASE_URL + '/api/getQuestion' 
 // 获取答题状态  
const getTestStatus =BASE_URL + '/api/getTestStatus' 
 // 提交答案  
const apiputAnswer =BASE_URL + '/api/putAnswer' 
 // 获取用户列表  
const getTestList =BASE_URL + '/api/getTestList' 
 // 判断是否可以打分
const markClick =BASE_URL + '/api/markClick' 
 // 获取已答题的列表
const getTestInfo =BASE_URL + '/api/getTestInfo' 
// 提交分数
const markTest =BASE_URL + '/api/markTest' 
// 胸有成竹提交分数
const markPut =BASE_URL + '/api/markPut' 
// 获取测试题的接口  





 export default {
	 getQuestion,
	 markPut,
	 markTest,
	 getTestInfo,
	 markClick,
	 getTestList,
	 apiputAnswer,
	 getTestStatus,
	apilogin,getQuestion,
 }
 