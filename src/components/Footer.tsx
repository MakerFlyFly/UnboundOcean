import { contactConfig } from '../config/contact'
import type { SiteContent } from '../content/siteContent'

type FooterProps = {
  content: SiteContent
}

export function Footer({ content }: FooterProps) {
  const footerNav = content.nav.map((item) => ({
    ...item,
    href: item.href.startsWith('#') ? `/${item.href}` : item.href,
  }))

  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="UnboundOcean home">
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

      <p className="copyright">(c) 2026 UnboundOcean. All rights reserved.</p>
      <p className="legal-note">{content.footer.disclaimer}</p>
    </footer>
  )
}
