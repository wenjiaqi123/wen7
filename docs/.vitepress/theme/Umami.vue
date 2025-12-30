<template>
  <div class="umami-card">
    <div class="umami-header">
      <div>
        <div class="umami-title">网站统计</div>
        <div class="umami-subtitle">最近 12 个月</div>
      </div>

      <a class="umami-link" :href="shareUrl" target="_blank" rel="noopener">
        打开 Umami 面板 ↗
      </a>
    </div>

    <div v-if="loading" class="umami-loading">加载中…</div>
    <div v-else-if="error" class="umami-error">
      {{ error }}
    </div>

    <div v-else class="umami-grid">
      <div class="umami-metric">
        <div class="label">浏览量（PV）</div>
        <div class="value">{{ stats?.pageviews ?? '-' }}</div>
      </div>
      <div class="umami-metric">
        <div class="label">访客数（Visitors）</div>
        <div class="value">{{ stats?.visitors ?? '-' }}</div>
      </div>
      <div class="umami-metric">
        <div class="label">访问次数（Visits）</div>
        <div class="value">{{ stats?.visits ?? '-' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

type UmamiStats = {
  pageviews: number
  visitors: number
  visits: number
  bounces?: number
  totaltime?: number
}

const props = defineProps<{
  /** 你的 share 面板链接（原样传入即可） */
  shareUrl: string
  /** 你的 Umami Website ID（UUID） */
  websiteId: string
  /** Umami 区域：从 shareUrl 里解析不到时用，默认 us */
  region?: 'us' | 'eu'
  /** 时区（影响 stats 的聚合口径） */
  timezone?: string
}>()

const region = computed(() => props.region || inferRegion(props.shareUrl) || 'us')
const timezone = computed(() => props.timezone || 'Asia/Shanghai')
const shareId = computed(() => inferShareId(props.shareUrl))

const loading = ref(false)
const error = ref<string | null>(null)
const stats = ref<UmamiStats | null>(null)

function inferRegion(url: string): 'us' | 'eu' | null {
  // 例：https://cloud.umami.is/analytics/us/share/xxxx?date=12month
  const m = url.match(/\/analytics\/(us|eu)\//i)
  return (m?.[1]?.toLowerCase() as any) || null
}

function inferShareId(url: string): string | null {
  // 例：.../analytics/us/share/7GgDX4akt4AiNXaN
  const m = url.match(/\/share\/([^/?#]+)/i)
  return m?.[1] || null
}

function getLast12MonthsRange() {
  const now = new Date()
  // 从“当前月的月初往前推 11 个月”的月初开始（共 12 个月口径）
  const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0)
  start.setMonth(start.getMonth() - 11)
  return { startAt: start.getTime(), endAt: now.getTime() }
}

async function fetchShareToken(shareIdVal: string) {
  // Umami Cloud 常见路径：/analytics/{region}/api/share/{shareId}
  const url = `https://cloud.umami.is/analytics/${region.value}/api/share/${shareIdVal}`
  const resp = await fetch(url, { method: 'GET' })
  if (!resp.ok) throw new Error(`获取 share token 失败：${resp.status}`)
  const data = await resp.json()
  if (!data?.token) throw new Error('获取 share token 失败：响应缺少 token')
  return data.token as string
}

async function fetch12MonthStats(token: string) {
  const { startAt, endAt } = getLast12MonthsRange()
  const url =
      `https://cloud.umami.is/analytics/${region.value}/api/websites/${props.websiteId}/stats` +
      `?startAt=${startAt}&endAt=${endAt}&unit=month&timezone=${encodeURIComponent(timezone.value)}`

  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'x-umami-share-token': token
    }
  })

  if (!resp.ok) throw new Error(`获取 stats 失败：${resp.status}`)
  const data = await resp.json()

  // /stats 返回格式一般就是 { pageviews, visitors, visits, ... } :contentReference[oaicite:2]{index=2}
  return data as UmamiStats
}

async function load() {
  error.value = null
  stats.value = null

  const sid = shareId.value
  if (!sid) {
    error.value = 'shareUrl 里解析不到 shareId（/share/xxxx）。请检查链接是否正确。'
    return
  }
  if (!props.websiteId) {
    error.value = '缺少 websiteId（Umami 网站 UUID）。'
    return
  }

  loading.value = true
  try {
    const token = await fetchShareToken(sid)
    stats.value = await fetch12MonthStats(token)
  } catch (e: any) {
    error.value = e?.message || String(e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(() => [props.shareUrl, props.websiteId, props.region, props.timezone], load)
</script>

<style scoped>
.umami-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px 16px;
  background: var(--vp-c-bg-soft);
  margin-top: 30px;
}

.umami-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.umami-title {
  font-weight: 700;
  font-size: 14px;
}

.umami-subtitle {
  font-size: 12px;
  opacity: 0.75;
  margin-top: 2px;
}

.umami-link {
  font-size: 12px;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.umami-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.umami-metric {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 10px 12px;
  background: var(--vp-c-bg);
}

.label {
  font-size: 12px;
  opacity: 0.75;
}

.value {
  margin-top: 6px;
  font-size: 20px;
  font-weight: 800;
}

.umami-loading {
  font-size: 12px;
  opacity: 0.8;
}

.umami-error {
  font-size: 12px;
  color: #c0392b;
  white-space: pre-wrap;
}

@media (max-width: 720px) {
  .umami-grid {
    grid-template-columns: 1fr;
  }
}
</style>
