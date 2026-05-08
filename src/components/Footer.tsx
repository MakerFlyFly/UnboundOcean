import { contactConfig } from '../config/contact'
import type { Locale, SiteContent } from '../content/siteContent'

type FooterProps = {
  content: SiteContent
  locale: Locale
}

export function Footer({ content, locale }: FooterProps) {
  const homePath = locale === 'zh' ? '/zh' : '/'
  const footerNav = content.nav.map((item) => ({
    ...item,
    href: item.href.startsWith('#') ? `${homePath}${item.href}` : item.href,
  }))

  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href={homePath} aria-label={content.a11y.homeLink}>
          <img src="/logo-mark.jpg" alt="" />
        </a>
        <p>{content.footer.line}</p>
      </div>

      <div className="footer-links">
        {footerNav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={contactConfig.gnwayUrl} target="_blank" rel="noreferrer">
          GNWAY
        </a>
        <a href={contactConfig.bangwo8Url} target="_blank" rel="noreferrer">
          Bangwo8
        </a>
      </div>

      <p className="copyright">{content.footer.copyright}</p>
      <p className="legal-note">{content.footer.disclaimer}</p>
    </footer>
  )
}
