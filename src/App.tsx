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

function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const content = siteContent[locale]
  const isAssistantRoute = window.location.pathname.replace(/\/+$/, '') === '/chat'

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])

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
