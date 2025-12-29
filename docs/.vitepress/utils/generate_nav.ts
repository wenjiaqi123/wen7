import type {DefaultTheme} from 'vitepress'

/**
 * @description 生成导航栏 文档地址 https://vitepress.dev/zh/reference/default-theme-config#nav
 * 根据项目需求,
 * - 如果导航栏比较少,可以直接写死(导航的分类一般比较固定)
 * - 如果需要动态生成,可以使用函数生成
 *
 * text 是导航显示的文字
 * link 是链接
 * items 是下拉菜单,可以嵌套
 * @author wen7.online
 */
export const generateNav = (): DefaultTheme.NavItem[] => {
    return [
        {text: '首页', link: '/'},
        {
            text: '前端', items: [
                {
                    items: [
                        {text: 'HTML', link: '/前端/HTML/'},
                        {text: 'CSS', link: '/前端/CSS/'},
                        {text: 'JavaScript', link: '/前端/JavaScript/api-examples'},
                    ]
                },
                {
                    items: [
                        {text: '微信小程序', link: '/前端/微信小程序/'},
                        {text: 'Vue3', link: '/前端/Vue3/'}
                    ]
                },
                {
                    items: [
                        {text: 'Uniapp', link: '/前端/Uniapp/'},
                        {text: 'Flutter', link: '/前端/Flutter/'},
                    ]
                }
            ],
        },
        {
            text: '其他', items: [
                {text: 'vitepress', link: '/其他/vitepress/'},
            ]
        },
    ]
}