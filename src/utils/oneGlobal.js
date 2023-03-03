// 该文件中，只存一些全局只需要执行一次的方法

/**
 * 判断是浏览器环境还是app环境
 */
export function getAppEnvironment() {
    let ua = navigator.userAgent.toLowerCase()
    console.log('ua', ua)
    if (ua.match(/isapp/i) == 'isapp') {
        return true
    }
    return false
}
