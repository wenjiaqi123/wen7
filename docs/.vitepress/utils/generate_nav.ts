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
            text: 'Java', items: [
                {
                    items: [
                        {text: 'Java基础', link: '/Java/基础/'},
                        {text: '并发编程', link: '/Java/并发编程/'},
                    ]
                },
                {
                    items: [
                        {text: 'Maven', link: '/Java/Maven/'},
                        {text: 'SpringBoot', link: '/Java/SpringBoot'},
                        {text: 'SpringMVC', link: '/Java/SpringMVC'},
                        {text: 'Mybatis', link: '/Java/Mybatis'},
                        {text: 'SpringDataJPA', link: "/Java/SpringDataJPA"},
                    ]
                },
                {
                    items: [
                        {text: 'JVM', link: '/Java/JVM/'},
                    ]
                }
            ],
        },
        {
            text: '数据库', items: [
                {
                    items: [
                        {text: 'MySQL', link: '/Database/MySQL'},
                        {text: 'Redis', link: '/Database/Redis'},
                        {text: 'Postgresql', link: '/Database/Postgresql'},
                    ]
                },
                {
                    items: [
                        {text: 'ElasticSearch', link: '/Database/ElasticSearch'},
                        {text: 'MongoDB', link: '/Database/MongoDB'},
                        {text: 'Neo4j', link: '/Database/Neo4j'},
                        {text: 'Milvus', link: '/Database/Milvus'},
                        {text: 'ClickHouse', link: '/Database/ClickHouse'},
                    ]
                },
                {
                    items: [
                        {text: '数据库设计', link: '/Database/Design'},
                        {text: '国家编号', link: 'https://baobaoqiming.wen7.online'},
                        {text: '行政编号', link: 'https://zhaoguilv.wen7.online'},
                    ]
                },
            ],
        },
        {
            text: '编程语言', items: [
                {
                    items: [
                        {text: 'Python基础', link: '/Python/基础语法/'},
                        {text: 'Numpy', link: '/Python/Numpy/'},
                        {text: 'Scipy', link: '/Python/Scipy/'},
                        {text: 'Pandas', link: '/Python/Pandas/'},
                        {text: 'Matplotlib', link: '/Python/Matplotlib/'},

                        // {text: '机器学习 ML', link: ''},
                        // {text: '自然语言处理 NLP', link: ''},
                    ]
                },
                {
                    items: [
                        {text: 'Golang基础', link: '/Golang/基础语法/'},
                        {text: 'Gin', link: '/Golang/Gin/'},
                        {text: 'Gorm', link: '/Golang/Gorm/'},
                    ]
                },
            ],
        },
        // {
        //     text: 'Python', items: [
        //         {
        //             items: [
        //                 {text: '基础语法', link: '/Python/基础语法/'},
        //                 {text: 'Numpy', link: '/Python/Numpy/'},
        //                 {text: 'Scipy', link: '/Python/Scipy/'},
        //                 {text: 'Pandas', link: '/Python/Pandas/'},
        //                 {text: 'Matplotlib', link: '/Python/Matplotlib/'},
        //             ]
        //         },
        //         // {
        //         //     items: [
        //         //         {text: '机器学习 ML', link: ''},
        //         //         {text: '自然语言处理 NLP', link: ''},
        //         //     ]
        //         // }
        //     ]
        // },
        {
            text: '运维', items: [
                {
                    items: [
                        {text: 'Linux', link: '/Linux/'},
                        {text: 'Shell', link: '/Linux/Shell/'},
                        {text: 'Nginx', link: '/Linux/Nginx/'},
                    ]
                },
                {
                    items: [
                        {text: 'Docker', link: '/Docker/'},
                        {text: 'Kubernetes', link: '/Kubernetes/'},
                    ]
                },
                {
                    items: [
                        {text: 'Jenkins', link: '/运维/Jenkins/'},
                        {text: 'Skywalking', link: '/运维/Skywalking/'},
                        {text: 'Prometheus', link: '/运维/Prometheus/'},
                        {text: 'Grafana', link: '/运维/Grafana/'},
                    ]
                },
            ],
        },
        {
            text: '其他', items: [
                {
                    items: [
                        {text: 'Git', link: '/其他/Git/'},
                        {text: '设计模式', link: '/其他/设计模式/'},
                    ]
                },
                {
                    items: [
                        {text: '数据结构与算法', link: '/数据结构与算法/'},
                        {text: '网络', link: '/网络/'},
                    ]
                },
                {
                    items: [
                        {text: 'markdown', link: '/其他/markdown/'},
                        {text: 'vitepress', link: '/其他/vitepress/'}
                    ]
                },
                {
                    items: [
                        {text: '关于本站', link: '/其他/关于/关于本站/'},
                        {text: '关于我', link: '/其他/关于/关于我/'},
                        {text: '创业日记', link: '/其他/关于/创业日记/'},
                    ]
                }
            ]
        }
    ]
}