import type { SiteContent } from '../content/siteContent'

type ServicesSectionProps = {
  content: SiteContent
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="section-copy">
        <p className="overline">Services</p>
        <h2 id="services-heading">{content.services.title}</h2>
        <p>{content.services.body}</p>
      </div>

      <div className="service-list">
        {content.services.items.map((service, index) => (
          <div className="service-item" key={service}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
