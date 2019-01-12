import axios from 'axios'
import hostConfig from './config'
const baseUrl = hostConfig.apiHost
// 获取app的cookies
const apiConfig = axios.create({
    // 设置超时时间
    timeout: 10000,
    // 请求的baseUrl
    baseURL: baseUrl,
    // 请求头部信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Token': ''
    },
    withCredentials: true,
    // 请求参数转换
    transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
            if (data[it] === 0 || (data[it] || data[it] === '') || data[it] === false) {
                if (ret !== '') ret += '&'
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
            }
        }
        return ret
    }]
})
// 请求拦截
apiConfig.interceptors.request.use(config => {
    if (!config.data) {
        config.data = {}
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截
apiConfig.interceptors.response.use(res => {
    if (res.data.code === '2001') {
        // 处理
    }
    let states = res.config.$states
    if (states) {
        Object.keys(states).forEach(key => {
            states[key] = !states[key]
        })
    }
    let json = res.data
    if (typeof json === 'string') {
        json = JSON.parse(json)
    }
    return json
}, err => {
    return Promise.reject(err)
})

export function createAPI (url, method, data) {
    let config = {
        method: method,
        url: url,
        data
    }
    return apiConfig(config)
}
