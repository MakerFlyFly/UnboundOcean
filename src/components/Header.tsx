import type { Locale, SiteContent } from '../content/siteContent'

type HeaderProps = {
  content: SiteContent
  locale: Locale
  onToggleLocale: () => void
  isAssistantRoute: boolean
}

export function Header({
  content,
  locale,
  onToggleLocale,
  isAssistantRoute,
}: HeaderProps) {
  const homePath = locale === 'zh' ? '/zh' : '/'
  const anchorBase = isAssistantRoute ? homePath : ''

  return (
    <header className="site-header">
      <a
        className="brand"
        href={isAssistantRoute ? homePath : '#top'}
        aria-label={content.a11y.homeLink}
      >
        <img src="/logo-mark.jpg" alt="" />
      </a>

      <nav className="nav-links" aria-label={content.a11y.primaryNav}>
        {content.nav.map((item) => (
          <a
            key={item.label}
            href={
              isAssistantRoute && item.href.startsWith('#')
                ? `${anchorBase}${item.href}`
                : item.href
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="language-toggle"
          onClick={onToggleLocale}
          aria-label={content.a11y.switchLanguage}
        >
          {content.languageLabel}
        </button>
        <a className="button button-dark button-compact" href="#contact">
          {content.cta.contact}
        </a>
      </div>
    </header>
  )
}
