import type { SiteContent } from '../content/siteContent'

type MarketsSectionProps = {
  content: SiteContent
}

export function MarketsSection({ content }: MarketsSectionProps) {
  return (
    <section className="markets-section" id="markets" aria-labelledby="markets-heading">
      <div className="section-copy">
        <p className="overline">Markets</p>
        <h2 id="markets-heading">{content.markets.title}</h2>
        <p>{content.markets.body}</p>
      </div>

      <div className="market-list">
        {content.markets.items.map((market, index) => (
          <article className="market-row" key={market.name}>
            <span className="market-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{market.name}</h3>
              <p>{market.role}</p>
            </div>
            <p>{market.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
