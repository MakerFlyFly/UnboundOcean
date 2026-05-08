import { contactConfig } from '../config/contact'
import type { SiteContent } from '../content/siteContent'

type FooterProps = {
  content: SiteContent
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="UnboundOcean home">
          <img src="/logo.jpg" alt="UnboundOcean" />
          <span>UnboundOcean</span>
        </a>
        <p>{content.footer.line}</p>
      </div>

      <div className="footer-links">
        <a href="#partners">Platform Partners</a>
        <a href="#markets">Markets</a>
        <a href="#services">Services</a>
        <a href={contactConfig.assistantPath}>AI Assistant</a>
        <a href={contactConfig.gnwayUrl} target="_blank" rel="noreferrer">
          GNWAY
        </a>
        <a href={contactConfig.bangwo8Url} target="_blank" rel="noreferrer">
          Bangwo8
        </a>
      </div>

      <p className="copyright">© 2026 UnboundOcean. All rights reserved.</p>
    </footer>
  )
}
