import type { SiteContent } from '../content/siteContent'

type ServicesSectionProps = {
  content: SiteContent
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      className="site-section services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="section-inner section-fill-grid services-inner">
        <div className="section-copy section-heading-block">
          <p className="overline">{content.services.overline}</p>
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
      </div>
    </section>
  )
}
