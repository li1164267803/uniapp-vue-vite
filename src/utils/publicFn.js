/**
 *  保存图片到相册
 * @param {Object} imgInfo 需要下载的图片信息——保留对象形式，方便后续扩展
 * @param {String} imgInfo.url 图片地址
 * 使用方法
 * this.$publicFn.savePicture({ url: this.cusInfo.cusImg }).then(result => {}).catch(err => {})
 */
export function savePicture(imgInfo) {
    return new Promise((resolve, reject) => {
        uni.showLoading({ title: '加载中', mask: true })
        // 获取保存图片权限
        uni.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
                saveImg(imgInfo)
            },
            complete() {
                uni.hideLoading()
                uni.getSetting({
                    success(res) {
                        if (!res.authSetting['scope.writePhotosAlbum']) {
                            opensit(imgInfo)
                        }
                    }
                })
            }
        })
        async function saveImg(imgInfo) {
            // 保存图片到相册
            if (imgInfo.url) {
                uni.getImageInfo({
                    src: imgInfo.url,
                    success(getImageInfoSuccessRes) {
                        uni.saveImageToPhotosAlbum({
                            filePath: getImageInfoSuccessRes.path,
                            success() {
                                resolve()
                                uni.hideLoading()
                                uni.showToast({ title: '保存成功' })
                            },
                            fail(saveImageToPhotosAlbumFailRes) {
                                reject(saveImageToPhotosAlbumFailRes)
                            }
                        })
                    },
                    fail(getImageInfoFailRes) {
                        uni.hideLoading()
                        reject(getImageInfoFailRes)
                        console.log('getImageInfoFailRes fail: ', getImageInfoFailRes)
                    }
                })
            } else {
                uni.showToast({
                    title: '缺少图片路径',
                    icon: 'none',
                    mask: true
                })
            }
        }

        function opensit(imgInfo) {
            // 打开用户设置
            uni.showModal({
                content: '是否授权小程序保存图片到相册？',
                success: function (res) {
                    if (res.confirm) {
                        uni.openSetting({
                            success(res) {
                                console.log(res.authSetting)
                                saveImg(imgInfo)
                            }
                        })
                    } else if (res.cancel) {
                        uni.showModal({
                            cancelText: '依然取消',
                            confirmText: '重新授权',
                            content: '很遗憾你点击了取消，这将无法进行保存操作',
                            success: function (res) {
                                if (res.confirm) {
                                    uni.openSetting({
                                        success(res) {
                                            console.log(res.authSetting)
                                        }
                                    })
                                } else if (res.cancel) {
                                    reject('用户拒绝授权，无法保存图片')
                                    console.log('用户拒绝授权，无法保存图片')
                                }
                            }
                        })
                    }
                }
            })
        }
    })
}
/**
 * 对象参数转成url参数拼接
 * @param {*} obj 接收 {id:1,age:20}
 * @returns 输出：id=1&age=20
 */
export const obj2strUrl = obj => {
    let str = ''
    for (let key in obj) {
        str = `${str}${key}=${obj[key]}&`
    }
    str = str.substring(0, str.length - 1)
    return str
}
