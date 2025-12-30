import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import Layout from './Layout.vue'
import './wen.css'

import {inBrowser} from 'vitepress'                         //检测是否在浏览器环境中
import type {Theme, EnhanceAppContext} from 'vitepress'     //引入 Theme 类型

import Umami from './Umami.vue'    //引入 Umami 组件
import Giscus from './Giscus.vue'

export default {
    ...DefaultTheme,
    Layout,


    enhanceApp(ctx: EnhanceAppContext) {            //增强应用程序
        ctx.app.component('Umami', Umami)   //注册 Umami 组件
        ctx.app.component('Giscus', Giscus) //注册 Giscus 组件

        // ✅ 一定要把完整 ctx 传给默认主题
        DefaultTheme.enhanceApp?.(ctx)

        if (!inBrowser) return

        const {router} = ctx

        router.onAfterRouteChanged = () => {
            const w: any = window
            if (w.umami?.track) {
                w.umami.track()
            }
        }
    }
} satisfies Theme                                       // 确保类型匹配