import HOME from './module/home'
import COMMON from './module/common'
import Vue from 'vue'

/**
 *  公用ajax请求方法
 */
const apis = {
    ...COMMON,
    ...HOME
}
export default apis
