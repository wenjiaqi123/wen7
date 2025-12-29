import {defineConfig} from 'vitepress'
import taskLists from "markdown-it-task-lists";
import mark from 'markdown-it-mark'
import {generateSocialLinks} from './utils/generate_sociallinks.js'
import {generateNav} from './utils/generate_nav.js'
import {generateSidebar} from './utils/generate_sidebar.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Site Metadata
    title: "家奇的博客",
    titleTemplate: "闻家奇",
    description: "闻家奇的个人博客",

    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    lang: "zh",
    base: "/",

    // Routing
    cleanUrls: true,

    // Build
    srcDir: 'src',
    srcExclude: ['**/components/**', '**/utils/**'], //配置 srcDir 下不需要编译的文件夹,一般是组件和工具函数,
    cacheDir: './.vitepress/cache',                 //缓存目录
    ignoreDeadLinks: true,                          //忽略死链接,VitePress 不会因为死链而导致构建失败

    //Appearance
    appearance: true,             //配置了 appearance,可以在主题配置中配置 appearance
    lastUpdated: true,            //开启最后更新时间,时间是根据提交到 Github 上时间计算的,需要部署之后才能看到效果

    //Customization
    vite: {},
    vue: {},
    markdown: {                   //配置 markdown
        lineNumbers: true,        //开启行号
        image: {
            lazyLoading: true,    //开启图片懒加载
        },
        breaks: true,            //开启换行符支持,
        config(md) {
            md.use(taskLists, {enabled: true});
            md.use(mark);
        }
    },

    /**
     * @description https://vitepress.dev/zh/reference/default-theme-config
     * 默认主题配置
     *
     * nav 导航栏,
     * sidebar 侧边栏,
     * socialLinks 社交链接
     * carbonAds 广告
     * 上面的几个配置项,使用了代码进行生成,可以在 utils 目录下查看,本质和在下面写死代码是一样的,
     *
     * @author wen7.online
     */
    themeConfig: {
        i18nRouting: true,      //开启国际化路由,需要添加多语言配置
        logo: '/logo.png',      //配置 logo,logo 放在 public 文件夹下

        siteTitle: '闻家奇',     //配置 logo 后面的站点标题
        aside: 'left',           //侧边栏展示的位置,默认是 true 右侧,
        outline: {
            label: '目录',       //去掉 Outline 的默认标题 On this page
            level: 'deep'       //大纲的深度,可以是 deep, 2,[2,6]
        },

        socialLinks: generateSocialLinks(), //生成社交链接
        footer: {
            message: '',
            copyright: 'Copyright © 闻家奇'
        },

        lastUpdated: {
            text: '最后更新时间',
            formatOptions: {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            }
        },
        //Algolia
        search: {               //开启搜索
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: "搜一搜",          //搜索框的 placeholder
                        buttonAriaLabel: "搜索文档",

                    },
                    modal: {                            //搜索结果的弹窗
                        resetButtonTitle: "清除搜索条件",
                        displayDetails: "显示详情",
                        noResultsText: "未找到相关结果,尝试更换关键词",
                        footer: {
                            selectText: "确定",
                            navigateText: "切换",
                            closeText: "关闭",
                        },
                    },
                },
            }
        },

        docFooter: {
            prev: "上一页",
            next: "下一页"
        },

        darkModeSwitchLabel: "深浅模式",         //【移动端】深色模式切换按钮的文本
        returnToTopLabel: "返回顶部",           //【移动端】
        externalLinkIcon: true,               // markdown 外部链接显示图标

        nav: generateNav(),
        sidebar: generateSidebar(),
        // sidebarMenuLabel: "目录"        //当在移动端时,sidebar 折叠时出现
    }
})