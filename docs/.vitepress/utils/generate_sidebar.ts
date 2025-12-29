/**
 * @description 生成侧边栏 文档地址 https://vitepress.dev/zh/reference/default-theme-config#sidebar
 * @author wen7.online
 */
export const generateSidebar = () => {
    return {
        '/其他/vitepress': [
            {
                text: 'vitepress',
                collapsed: false,        //是否折叠
                items: [
                    {text: '前置知识', link: '/其他/vitepress/前置知识'},
                    {text: '快速入门', link: '/其他/vitepress/快速入门'},
                ]
            }
        ],
    }
}