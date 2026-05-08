import type { SiteContent } from '../content/siteContent'
import { PixelGlobe } from './PixelGlobe'

type HeroProps = {
  content: SiteContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="site-section hero-section" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <h1>{content.hero.title}</h1>
          <p className="hero-subtitle">{content.hero.subtitle}</p>
          <div className="short-rule" />
          <p className="hero-body">{content.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              {content.cta.contact}
              <span className="button-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <PixelGlobe />
        </div>
      </div>

      <a className="hero-next" href="#connect">
        <span />
        {content.connect.kicker}
      </a>
    </section>
  )
}
