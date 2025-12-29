---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

#修改浏览器标签页上的标题
#title: Blog

hero:
  name: "wen7.online"
  text: "闻家奇的博客"
  tagline: Talk is cheap. Show me the code.
  # 展示在首页顶部的图片
  image: /logo.png
  actions:
    - theme: brand
      text: 开源项目 quick
      link: https://quick.wen7.online
      target: _blank
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 前端
    icon:
      src: /logo.png
    details: "
            Vue2、Vue3、ElementPlus、AntDesign
            <br>
            Flutter、微信小程序
            <br>
            ThreeJS、Echarts
            "
  - title: 后端
    icon:
      src: /logo.png
    details: "
            Java、SpringBoot、SpringCloud
            <br>
            Python、Pandas、Numpy、Matplotlib
            <br>
            Golang、Gom、Gorm
            "
  - title: 数据库
    icon:
      src: /logo.png
    details: "
            MySQL、PostgreSQL
            <br>
            Redis、MongoDB
            <br>
            Elasticsearch、Neo4j、Milvus、ClickHouse
            "
  - title: 运维
    icon:
      src: /logo.png
    details: "
            Linux、Docker、Kubernetes
            "
  - title: AI
    icon:
      src: /logo.png
    details: "
            MCP、PyTorch
            "
  - title: GIS
    icon:
      src: /logo.png
    details: "PostGIS、GeoServer"
---