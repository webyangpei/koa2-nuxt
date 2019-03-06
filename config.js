// API地址
const api = {
    dev: 'http://192.168.1.101:3008',
    pro: ''
}
// 访问地址
const domain = {
    dev: '',
    pro: ''
}
const is_dev = process.env.NODE_ENV === 'development'

const api_real = is_dev ? api.dev : api.pro
export { api_real }

// module.exports = {
// 	api: is_dev ? api.dev : api.pro,
// 	domain : is_dev ? domain.dev : domain.pro
// }
