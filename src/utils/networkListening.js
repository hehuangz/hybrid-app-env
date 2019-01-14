function network () {
    // return window.navigator.onLine ? '网络正常连接' : '连接断开'
    return window.navigator.onLine
}
function networkListening () {
    return new Promise((resolve, reject) => {
        window.addEventListener('online', resolve(network()))
        // window.addEventListener('offline', reject(network()))
    })
}
networkListening.install = function (Vue) {
    Vue.prototype.$networkListening = function () {
        return networkListening()
    }
}
export default networkListening
