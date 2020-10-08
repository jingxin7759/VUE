import axios from 'axios'

export function request(config) {
    // 创建 axios 实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/z8',
      timeout: 10000
    })

    // axios 拦截器
    instance.interceptors.request.use(config => {
      return config
    },err => {
      console.log(err)
    })
    instance.interceptors.response

    // 发送真正的网络请求
     return instance(config)
  
}

// export function request(config){
// 	//创建axios的实例
// 	return new Promise((resolve,reject)=>{
// 		const instance=axios.create({
// 			baseURL:'http://152.136.185.210:8000/api/h8',
// 			timeout:5000
// 		})
		
// 		//发送真正的网络要求
// 		instance(config)
// 		.then(res=>{
// 			resolve(res)
// 		})
// 		.catch(err=>{
// 			reject(err)
// 		})
// 	})
	
// }


// export function request(config,success,failure){
// 	//创建axios的实例
// 	const instance=axios.create({
// 		baseURL:'http://152.136.185.210:8000/api/h8',
// 		timeout:5000
// 	})
	
// 	//发送真正的网络要求
// 	instance(config).then(res=>{
// 		console.log(res)
// 		success(res)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 		failure(err)
// 	})
// }