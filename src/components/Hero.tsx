import type { SiteContent } from '../content/siteContent'
import { PixelGlobe } from './PixelGlobe'

type HeroProps = {
  content: SiteContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <h1>{content.hero.title}</h1>
        <p className="hero-subtitle">{content.hero.subtitle}</p>
        <div className="short-rule" />
        <p className="hero-body">{content.hero.body}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            {content.cta.contact}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <PixelGlobe />
      </div>
    </section>
  )
}
