/* eslint-disable */
/**
 * jsbridge 接入代码
 */
let $jsBridge = {}
function setupWebViewJavascriptBridge (callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}
$jsBridge = (function () {
    return {
        call: function (method, params, callback, failCallback) {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler(method, params, callback, failCallback)
            })
        },
        register: function (method, callback) {
            setupWebViewJavascriptBridge(function (bridge) {
                bridge.registerHandler(method, callback)
            })
        }
    }
})()

export { $jsBridge }
