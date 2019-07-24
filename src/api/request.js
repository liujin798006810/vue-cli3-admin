import axios from "axios"
import router from "../router/router"
import { Loading } from "element-ui"

import store from '../store/store'
axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.VUE_APP_LOGOUT_URL
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"

let loading = null
/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
axios.interceptors.request.use(
    config => {
        loading = Loading.service({
            text: "正在加载中......",
            fullscreen: true
        })
        if (store.state.token) {
            config.headers["Authorization"] = "Bearer " + store.state.token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
        return new Promise((resolve, reject) => {
            if (loading) {
                loading.close()
            }
            const res = response.data

            if (res.err_code === 0) {
                resolve(res)
            } else {
                reject(res)
            }
        })
    },
    error => {
        console.log(error)
        if (loading) {
            loading.close()
        }
        
        if (!error.response) {
            if (error.message.includes("timeout")) {
                console.log("超时了")
    
                this.$message({
                    type: 'error',
                    message: '请求超时，请检查互联网连接'
                })
            } else {
                console.log("断网了")
                this.$message({
                    type: 'error',
                    message: '请检查网络是否已连接'
                })
            }
            return
        }

        const status = error.response.status

        switch (status) {
            case 500:
                this.$message({
                    type: 'error',
                    message: '服务器内部错误'
                })
                break;
            case 404:
                this.$message({
                    type: 'error',
                    message: '未找到远程服务器'
                })
                break;
            case 401:
                this.$message({
                    type: 'warning',
                    message: '用户登陆过期，请重新登陆'
                })
                store.state.commit('COMMIT_TOKEN','')

                setTimeout(() => {
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000)
                break;
            case 400:
                this.$message({
                    type: 'error',
                    message: '数据异常，详情请咨询聚保服务热线'
                })
                break;
            default:
                this.$message({
                    type: 'error',
                    message: error.response.data.message
                })
        }

        return Promise.reject(error)
    }
);
/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}