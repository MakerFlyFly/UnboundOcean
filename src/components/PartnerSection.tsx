import { contactConfig } from '../config/contact'
import type { SiteContent } from '../content/siteContent'

type PartnerSectionProps = {
  content: SiteContent
}

export function PartnerSection({ content }: PartnerSectionProps) {
  return (
    <section
      className="site-section partner-section"
      id="partners"
      aria-labelledby="partners-heading"
    >
      <div className="section-inner partner-inner">
        <div className="section-fill-grid partner-layout">
          <div className="section-copy section-heading-block">
            <p className="overline">{content.partners.overline}</p>
            <h2 id="partners-heading">{content.partners.title}</h2>
            <p>{content.partners.body}</p>
          </div>

          <div className="partner-grid">
            {content.partners.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="external-links" aria-label={content.a11y.partnerWebsites}>
          <a href={contactConfig.gnwayUrl} target="_blank" rel="noreferrer">
            GNWAY
          </a>
          <a href={contactConfig.bangwo8Url} target="_blank" rel="noreferrer">
            Bangwo8
          </a>
        </div>
      </div>
    </section>
  )
}
