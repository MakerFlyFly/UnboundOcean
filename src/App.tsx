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

const routeMeta = {
  home: {
    title: 'UnboundOcean | Southeast Asia Sales & Local Deployment Partner',
    description:
      'UnboundOcean is a cross-border sales and local deployment partner for enterprise intelligent service solutions entering Southeast Asia.',
    canonical: 'https://unboundocean.com/',
  },
  assistant: {
    title: 'UnboundOcean AI Assistant | Market Coverage and Contact Routing',
    description:
      'Ask the UnboundOcean assistant about Southeast Asia market coverage, services, partner capabilities, and sales contact routing.',
    canonical: 'https://unboundocean.com/chat',
  },
}

function getStoredLocale(): Locale {
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

function decodeHash(hash: string) {
  try {
    return decodeURIComponent(hash)
  } catch {
    return hash
  }
}

function App() {
  const [locale, setLocale] = useState<Locale>(getStoredLocale)
  const content = siteContent[locale]
  const isAssistantRoute = window.location.pathname.replace(/\/+$/, '') === '/chat'

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      // Ignore storage failures; the visible language still updates for this page.
    }
  }, [locale])

  useEffect(() => {
    const meta = isAssistantRoute ? routeMeta.assistant : routeMeta.home
    document.title = meta.title
    updateMeta('meta[name="description"]', meta.description)
    updateMeta('meta[property="og:title"]', meta.title)
    updateMeta('meta[property="og:description"]', meta.description)
    updateMeta('meta[property="og:url"]', meta.canonical)
    updateMeta('meta[name="twitter:title"]', meta.title)
    updateMeta('meta[name="twitter:description"]', meta.description)

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      canonical.href = meta.canonical
    }
  }, [isAssistantRoute])

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
        onToggleLocale={() => setLocale((current) => (current === 'en' ? 'zh' : 'en'))}
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
      <Footer content={content} />
    </div>
  )
}

export default App
