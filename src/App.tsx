import { useEffect, useState } from 'react'
import { AssistantPage } from './components/AssistantPage'
import { ConnectSection } from './components/ConnectSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MarketsSection } from './components/MarketsSection'
import { PartnerSection } from './components/PartnerSection'
import { ServicesSection } from './components/ServicesSection'
import { type Locale, siteContent } from './content/siteContent'

const LOCALE_STORAGE_KEY = 'unboundocean-locale'
type RouteKey = 'home' | 'assistant'

const routeMeta = {
  en: {
    home: {
      title: 'UnboundOcean | Southeast Asia Sales & Local Deployment Partner',
      description:
        'UnboundOcean is a cross-border sales and local deployment partner for enterprise intelligent service solutions entering Southeast Asia.',
      canonical: 'https://unboundocean.vercel.app/',
      alternates: {
        en: 'https://unboundocean.vercel.app/',
        zh: 'https://unboundocean.vercel.app/zh',
      },
    },
    assistant: {
      title: 'UnboundOcean AI Assistant | Market Coverage and Contact Routing',
      description:
        'Ask the UnboundOcean assistant about Southeast Asia market coverage, services, partner capabilities, and sales contact routing.',
      canonical: 'https://unboundocean.vercel.app/chat',
      alternates: {
        en: 'https://unboundocean.vercel.app/chat',
        zh: 'https://unboundocean.vercel.app/zh/chat',
      },
    },
  },
  zh: {
    home: {
      title: '未界寻洋 | 东南亚市场销售与落地伙伴',
      description:
        '未界寻洋为企业智能服务方案进入东南亚提供销售拓展、本地交付协调与客户支持。',
      canonical: 'https://unboundocean.vercel.app/zh',
      alternates: {
        en: 'https://unboundocean.vercel.app/',
        zh: 'https://unboundocean.vercel.app/zh',
      },
    },
    assistant: {
      title: '未界寻洋 AI 助手 | 市场、服务与联系方式',
      description:
        '通过未界寻洋 AI 助手了解东南亚市场、服务方式、方案能力和联系方式。',
      canonical: 'https://unboundocean.vercel.app/zh/chat',
      alternates: {
        en: 'https://unboundocean.vercel.app/chat',
        zh: 'https://unboundocean.vercel.app/zh/chat',
      },
    },
  },
}

function getRouteInfo(pathname: string): { route: RouteKey; localeFromPath?: Locale } {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/zh/chat') {
    return { route: 'assistant', localeFromPath: 'zh' }
  }

  if (path === '/zh') {
    return { route: 'home', localeFromPath: 'zh' }
  }

  if (path === '/chat') {
    return { route: 'assistant' }
  }

  return { route: 'home' }
}

function getPathForLocale(locale: Locale, route: RouteKey) {
  if (locale === 'zh') {
    return route === 'assistant' ? '/zh/chat' : '/zh'
  }

  return route === 'assistant' ? '/chat' : '/'
}

function getInitialLocale(): Locale {
  const routeInfo = getRouteInfo(window.location.pathname)
  if (routeInfo.localeFromPath) {
    return routeInfo.localeFromPath
  }

  try {
    return window.localStorage.getItem(LOCALE_STORAGE_KEY) === 'zh' ? 'zh' : 'en'
  } catch {
    return 'en'
  }
}

function updateMeta(selector: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector)
  if (element) {
    element.content = value
  }
}

function updateAlternate(hreflang: string, href: string) {
  const element = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  )
  if (element) {
    element.href = href
  }
}

function decodeHash(hash: string) {
  try {
    return decodeURIComponent(hash)
  } catch {
    return hash
  }
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const content = siteContent[locale]
  const routeInfo = getRouteInfo(window.location.pathname)
  const isAssistantRoute = routeInfo.route === 'assistant'

  const toggleLocale = () => {
    setLocale((current) => {
      const nextLocale = current === 'en' ? 'zh' : 'en'
      const nextPath = getPathForLocale(nextLocale, routeInfo.route)

      if (window.location.pathname !== nextPath) {
        window.history.replaceState(null, '', `${nextPath}${window.location.hash}`)
      }

      return nextLocale
    })
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      // Ignore storage failures; the visible language still updates for this page.
    }
  }, [locale])

  useEffect(() => {
    const metaGroup = routeMeta[locale]
    const meta = isAssistantRoute ? metaGroup.assistant : metaGroup.home
    document.title = meta.title
    updateMeta('meta[name="description"]', meta.description)
    updateMeta('meta[property="og:title"]', meta.title)
    updateMeta('meta[property="og:description"]', meta.description)
    updateMeta('meta[property="og:url"]', meta.canonical)
    updateMeta('meta[name="twitter:title"]', meta.title)
    updateMeta('meta[name="twitter:description"]', meta.description)
    updateAlternate('en', meta.alternates.en)
    updateAlternate('zh-CN', meta.alternates.zh)

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      canonical.href = meta.canonical
    }
  }, [isAssistantRoute, locale])

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) {
        return
      }

      window.requestAnimationFrame(() => {
        document.getElementById(decodeHash(hash))?.scrollIntoView({ block: 'start' })
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [isAssistantRoute])

  return (
    <div className="site-shell">
      <Header
        content={content}
        locale={locale}
        isAssistantRoute={isAssistantRoute}
        onToggleLocale={toggleLocale}
      />
      {isAssistantRoute ? (
        <>
          <AssistantPage content={content} locale={locale} />
          <ContactSection content={content} />
        </>
      ) : (
        <main>
          <Hero content={content} />
          <ConnectSection content={content} />
          <MarketsSection content={content} />
          <PartnerSection content={content} />
          <ServicesSection content={content} />
          <ContactSection content={content} />
        </main>
      )}
      <Footer content={content} locale={locale} />
    </div>
  )
}

export default App
