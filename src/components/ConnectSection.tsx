import type { SiteContent } from '../content/siteContent'

const icons = ['vendors', 'buyers', 'delivery'] as const

type ConnectSectionProps = {
  content: SiteContent
}

export function ConnectSection({ content }: ConnectSectionProps) {
  return (
    <section
      className="site-section connect-section"
      id="connect"
      aria-labelledby="connect-heading"
    >
      <div className="section-inner connect-inner">
        <div className="section-heading-block connect-heading-block">
          <div className="section-kicker">
            <span />
            {content.connect.kicker}
            <span />
          </div>
          <h2 id="connect-heading">{content.connect.title}</h2>
        </div>

        <div className="section-fill-grid connect-grid">
          {content.connect.items.map((item, index) => (
            <article className="connect-card" key={item.title}>
              <div className="line-icon" aria-hidden="true">
                <ConnectIcon type={icons[index]} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <div className="mini-rule" />
                <p>{item.description}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConnectIcon({ type }: { type: (typeof icons)[number] }) {
  if (type === 'vendors') {
    return (
      <svg viewBox="0 0 48 48" role="presentation">
        <path d="M12 39V17h10v22" />
        <path d="M26 39V9h10v30" />
        <path d="M8 39h32" />
        <path d="M16 22h2M16 28h2M30 15h2M30 21h2M30 27h2" />
      </svg>
    )
  }

  if (type === 'buyers') {
    return (
      <svg viewBox="0 0 48 48" role="presentation">
        <path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path d="M32 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path d="M9 38v-4a7 7 0 0 1 7-7h0a7 7 0 0 1 7 7v4" />
        <path d="M25 38v-4a7 7 0 0 1 7-7h0a7 7 0 0 1 7 7v4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" role="presentation">
      <path d="m17 19 7-7 7 7" />
      <path d="M15 21 8 28l12 12 6-6" />
      <path d="m33 21 7 7-12 12-6-6" />
      <path d="m20 26 8 8M24 22l8 8" />
    </svg>
  )
}
