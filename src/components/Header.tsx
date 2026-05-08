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
  return (
    <header className="site-header">
      <a
        className="brand"
        href={isAssistantRoute ? '/' : '#top'}
        aria-label="UnboundOcean home"
      >
        <img src="/logo-mark.jpg" alt="" />
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {content.nav.map((item) => (
          <a
            key={item.label}
            href={
              isAssistantRoute && item.href.startsWith('#')
                ? `/${item.href}`
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
          aria-label={
            locale === 'en'
              ? 'Switch language to Chinese'
              : 'Switch language to English'
          }
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
