import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import Layout from './Layout.vue'
import './wen.css'

import {inBrowser} from 'vitepress'                     // 引入
import type {Theme} from 'vitepress'                    // 引入

export default {
    ...DefaultTheme,
    Layout,

    enhanceApp({router}) {                  // 重写 enhanceApp
        // 保留默认主题的 enhanceApp（如果有）
        DefaultTheme.enhanceApp?.({router} as any)

        if (!inBrowser) return

        router.onAfterRouteChanged = () => {
            const w: any = window
            // Umami Cloud / v2 标准写法
            if (w.umami?.track) {
                w.umami.track()
            }
        }
    }
} satisfies Theme                                       // 确保类型匹配