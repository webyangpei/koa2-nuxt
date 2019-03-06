import Vue from 'vue'
import axios from 'axios'
const { api_real } = require('@/config')

console.log('dafs', api_real)
const service = axios.create({
    baseURL: api_real,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => { Promise.reject(error) })

// 响应拦截器
service.interceptors.response.use(response => {
  return response
}, error => { Promise.reject(error) })

export default function request(options) {
	return new Promise((resolve, reject) => {
		service(options).then(resolve).catch(reject)
	})
}