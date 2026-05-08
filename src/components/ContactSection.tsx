import { contactConfig } from '../config/contact'
import type { SiteContent } from '../content/siteContent'

type ContactSectionProps = {
  content: SiteContent
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section
      className="site-section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner contact-inner">
        <div className="section-heading-block">
          <p className="overline">Contact Sales</p>
          <h2 id="contact-heading">{content.contact.title}</h2>
        </div>
        <p className="contact-lead">{content.contact.body}</p>
        <div className="contact-actions">
          <a className="button button-dark" href={contactConfig.whatsappUrl}>
            {content.contact.whatsapp}
          </a>
          <a className="button button-light" href={`mailto:${contactConfig.email}`}>
            {content.contact.email}
          </a>
        </div>
        <dl className="contact-details">
          <div>
            <dt>{content.contact.whatsappLabel}</dt>
            <dd>{contactConfig.whatsapp}</dd>
          </div>
          <div>
            <dt>{content.contact.email}</dt>
            <dd>{contactConfig.email}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
