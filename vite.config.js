import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint' //导入包
// https://vitejs.dev/config/
export default defineConfig({
    transpileDependencies: ['uview-plus'],
    plugins: [
        uni(), // 里面包含 @vitejs/plugin-vue 插件
        // 增加下面的配置项,这样在运行时就能检查eslint规范
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        })
    ]
})
