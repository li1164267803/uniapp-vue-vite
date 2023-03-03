## 概述

> 整个项目是为了方便后续使用 uniapp 开发项目 搭建的 v3 模版，分为 js、ts 两种
> 两个分支中只有使用语言不同，其余配置一样。使用 vscode 开发，如果下载模版后需要使用 hbuilder 开发的，请自行改造
> 还有一些封装的函数放在了 utils 中

**所使用到的技术栈：**

1.  vite+v3
2.  uniapp 中 cli 的 v3 版本
3.  uview-plus（支持 h5/小程序/app）
4.  pinia（加持久化）
5.  eslint+prettier（分为 js 和 ts 两个版本）
6.  z-paging（列表组件 支持上拉加载，下拉刷新，可自定义 ）
7.  路由组件（基于 uni-simple-router 插件改造）

## 分支

> 使用技术栈不同，请下载不同的模版

-   v3+js
-   v3+ts

## 安装&启动

```
yarn
```

```
yarn dev:h5 h5环境
yarn dev:wx 微信小程序
```

## 注意

> ui 库统一使用 uview-plus，针对第三方组件，需要去 uniapp 的插件市场寻找多端适配的组件
> 地址： [uview 官方地址](https://uiadmin.net/uview-plus/)
> 插件地址：[插件市场](https://ext.dcloud.net.cn/)

1.  项目中的图片最好使用 uview 中的 **u-image** 组件，为了多端适配，如果使用 uniapp 自带的 image 标签，在 h5 和小程序中的展示方式不一致
2.  图片，视频静态资源只能放在 **static** 文件夹下，打包任何平台都会包含该文件夹下的全部内容
3.  路由跳转一律使用 uniapp 提供的方法，不在使用 v2 传统跳转。[路由跳转方法](https://uniapp.dcloud.net.cn/api/router.html#navigateto)

### 使用 eslint+prettier 做代码校验与美化

#### 使用步骤

1.  在 vscode 中，任意一个文件中，右键选择 **格式化文档方式**
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/2163a4cf4ef143ae8371d467f89c19b9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5biM5paHR2Vyc2h3aW4=,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center)
2.  点击 **配置默认格式化程序**
3.  选择 **ESLint** ![在这里插入图片描述](https://img-blog.csdnimg.cn/ab982d856df84094b9f3da7e5f5cb2d9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5biM5paHR2Vyc2h3aW4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
4.  在 vscode 的设置中，搜索 **保存** 把 **Format On Save** 勾选上，保存时，会自动格式化
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/b05c94b0dea0462b9915ddb7dc9b432b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5biM5paHR2Vyc2h3aW4=,size_18,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 公共组件

1.  列表组件 z-paging 支持上拉加载，下拉刷新，可自定义 [z-paging 文档](https://z-paging.zxlee.cn/start/teaching.html#z-paging%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8)
    组件中支持 vue2/vue3 和 vue 的 setup 写法

### 封装小程序中保存图片方法

```javascript
// 使用方法
this.$publicFn.savePicture({ url: imgUrl })
```

## uniapp 疑难杂症

### uni.setStorageSync 和 localStorage 取值 区别

> 如果不使用对应的方法取值，会有很多 意想不到的问题

![在这里插入图片描述](https://img-blog.csdnimg.cn/23868d2d403d489583d3bd41e7de680f.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/899d0352aa464763a6b5f3abb569b57d.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c353a9ab1cec451c85047899e9d25383.png)

### 子组件中修改样式不生效

> 在子组件里面引用了三方 ui 库组件，使用 deep 无效果 ，在 h5 可正常展示，小程序不行

解决办法点击该文章：[使用 depp 在小程序中子组件修改第三方 ui 库 uview，样式不生效问题](https://blog.csdn.net/weixin_44309374/article/details/127946812?spm=1001.2014.3001.5501)

**注意：在小程序环境中 无法在模版里使用 `vue` 的 `prototype` 功能**
