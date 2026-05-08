import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const distDir = new URL('../dist/', import.meta.url)

const routes = [
  {
    output: 'index.html',
    lang: 'en',
    title: 'UnboundOcean | Southeast Asia Sales & Local Deployment Partner',
    description:
      'UnboundOcean is a cross-border sales and local deployment partner for enterprise intelligent service solutions entering Southeast Asia.',
    canonical: 'https://unboundocean.com/',
    alternateEn: 'https://unboundocean.com/',
    alternateZh: 'https://unboundocean.com/zh',
  },
  {
    output: 'chat/index.html',
    lang: 'en',
    title: 'UnboundOcean AI Assistant | Market Coverage and Contact Routing',
    description:
      'Ask the UnboundOcean assistant about Southeast Asia market coverage, services, partner capabilities, and sales contact routing.',
    canonical: 'https://unboundocean.com/chat',
    alternateEn: 'https://unboundocean.com/chat',
    alternateZh: 'https://unboundocean.com/zh/chat',
  },
  {
    output: 'zh/index.html',
    lang: 'zh-CN',
    title: '未界寻洋 | 东南亚市场销售与落地伙伴',
    description:
      '未界寻洋为企业智能服务方案进入东南亚提供销售拓展、本地交付协调与客户支持。',
    canonical: 'https://unboundocean.com/zh',
    alternateEn: 'https://unboundocean.com/',
    alternateZh: 'https://unboundocean.com/zh',
  },
  {
    output: 'zh/chat/index.html',
    lang: 'zh-CN',
    title: '未界寻洋 AI 助手 | 市场、服务与联系方式',
    description:
      '通过未界寻洋 AI 助手了解东南亚市场、服务方式、方案能力和联系方式。',
    canonical: 'https://unboundocean.com/zh/chat',
    alternateEn: 'https://unboundocean.com/chat',
    alternateZh: 'https://unboundocean.com/zh/chat',
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceSingle(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Pattern not found: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

function applyMeta(template, route) {
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)

  let html = template
  html = replaceSingle(html, /<html lang="[^"]+">/, `<html lang="${route.lang}">`)
  html = replaceSingle(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  html = replaceSingle(
    html,
    /<link\s+rel="canonical"\s+href="[^"]+"\s*\/>/,
    `<link rel="canonical" href="${route.canonical}" />`,
  )
  html = replaceSingle(
    html,
    /<link\s+rel="alternate"\s+href="[^"]+"\s+hreflang="en"\s*\/>/,
    `<link rel="alternate" href="${route.alternateEn}" hreflang="en" />`,
  )
  html = replaceSingle(
    html,
    /<link\s+rel="alternate"\s+href="[^"]+"\s+hreflang="zh-CN"\s*\/>/,
    `<link rel="alternate" href="${route.alternateZh}" hreflang="zh-CN" />`,
  )
  html = replaceSingle(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${route.canonical}" />`,
  )
  html = replaceSingle(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  html = replaceSingle(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  html = replaceSingle(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  html = replaceSingle(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  html = replaceSingle(html, /<title>.*<\/title>/, `<title>${title}</title>`)

  return html
}

const template = await readFile(new URL('index.html', distDir), 'utf8')

await Promise.all(
  routes.map(async (route) => {
    const destination = new URL(route.output, distDir)
    const destinationPath = fileURLToPath(destination)
    await mkdir(dirname(destinationPath), { recursive: true })
    await writeFile(destination, applyMeta(template, route), 'utf8')
  }),
)
