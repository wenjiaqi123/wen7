<template>
  <!-- 外层自己包一层，注入自定义头部、侧边、底部等 -->
  <div class="my-app">
    
    <!-- 使用默认 Layout，保留默认功能（侧边栏、返回顶部等） -->
    <Layout>
      <!-- ========== 页面整体 ========== -->

      <!--<template #layout-top>-->
      <!--  <div class="test-style">-->
      <!--    🔥 layout-top 插槽：整个站点最顶部（导航栏之上），一般放公告、全站提示-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #layout-bottom>-->
      <!--  <div class="test-style">-->
      <!--    🔥 layout-bottom 插槽：整个页面最底部（Footer 之后），统计脚本 / 备案信息-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 导航栏 NavBar ========== -->

      <!--<template #nav-bar-title-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 nav-bar-title-before：站点标题 / Logo 左侧-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #nav-bar-title-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 nav-bar-title-after：站点标题 / Logo 右侧（版本号、环境标识）-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #nav-bar-content-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 nav-bar-content-before：导航栏内容最左侧-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #nav-bar-content-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 nav-bar-content-after：导航栏内容最右侧（登录按钮、用户头像）-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 侧边栏 Sidebar ========== -->

      <!--<template #sidebar-nav-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 sidebar-nav-before：侧边栏最顶部（作者信息、项目介绍）-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #sidebar-nav-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 sidebar-nav-after：侧边栏最底部（版权、外链）-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 文档内容区域 ========== -->

      <!--<template #page-top>-->
      <!--  <div class="test-style">-->
      <!--    🔥 page-top：文档正文最上方（文档级提示、警告）-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #doc-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 doc-before：Markdown 内容之前（作者、标签、元信息）-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #doc-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 doc-after：Markdown 内容之后（评论区、赞赏、相关阅读）-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #page-bottom>-->
      <!--  <div class="test-style">-->
      <!--    🔥 page-bottom：文档正文最下方（版权声明、反馈入口）-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 大纲 Outline ========== -->

      <!--<template #aside-top>-->
      <!--  <div class="test-style">-->
      <!--    🔥 aside-top：大纲顶部-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #aside-bottom>-->
      <!--  <div class="test-style">-->
      <!--    🔥 aside-bottom：大纲底部（返回顶部、反馈）-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 首页 Home 专用 ========== -->

      <!--<template #home-hero-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 home-hero-before：首页 Hero 区域之前-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #home-hero-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 home-hero-after：首页 Hero 区域之后-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #home-features-before>-->
      <!--  <div class="test-style">-->
      <!--    🔥 home-features-before：首页 Features 区域之前-->
      <!--  </div>-->
      <!--</template>-->

      <!--<template #home-features-after>-->
      <!--  <div class="test-style">-->
      <!--    🔥 home-features-after：首页 Features 区域之后-->
      <!--  </div>-->
      <!--</template>-->

      <!-- ========== 404 页面 ========== -->

      <!--<template #not-found>-->
      <!--  <div class="test-style">-->
      <!--    🔥 not-found：自定义 404 页面（可引入 404 组件）-->
      <!--  </div>-->
      <!--</template>-->

    </Layout>

  </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const Layout = DefaultTheme.Layout
</script>

<style>
.test-style {
  background-color: #97e5ea;
  width: 100%;
  color: red;
  font-size: 30px;
  line-height: 30px;
  text-align: center
}
</style>