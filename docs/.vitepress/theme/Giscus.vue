<template>
  <div class="giscus-wrapper">
    <div ref="container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, inBrowser } from 'vitepress'

const container = ref<HTMLDivElement | null>(null)
const route = useRoute()

function renderGiscus() {
  if (!inBrowser || !container.value) return

  // 清空，防止 SPA 切换重复挂载
  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  /* ===== 你的 giscus 配置（原样使用） ===== */
  script.setAttribute('data-repo', 'wenjiaqi123/wen7')
  script.setAttribute('data-repo-id', 'R_kgDOQwzcEA')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDOQwzcEM4C0X1S')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '1')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  /* ======================================= */

  container.value.appendChild(script)
}

onMounted(renderGiscus)

/**
 * ⚠️ 必须监听路由变化
 * VitePress 是 SPA，不监听会导致评论不刷新
 */
watch(
    () => route.path,
    () => renderGiscus()
)
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
}
</style>
