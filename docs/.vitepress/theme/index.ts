import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import Layout from './Layout.vue'
import './wen.css'

import {inBrowser} from 'vitepress'
import type {Theme, EnhanceAppContext} from 'vitepress'

export default {
    ...DefaultTheme,
    Layout,

    enhanceApp(ctx: EnhanceAppContext) {
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