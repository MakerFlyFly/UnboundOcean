import { useMemo, useState } from 'react'
import { contactConfig } from '../config/contact'
import type { Locale, SiteContent } from '../content/siteContent'

type AssistantPageProps = {
  content: SiteContent
  locale: Locale
}

const assistantCopy = {
  en: {
    overline: 'AI Assistant',
    title: 'Ask the UnboundOcean assistant.',
    body:
      'Use this assistant to navigate market coverage, services, partner capabilities, and contact routing.',
    placeholder: 'Ask about markets, services, partners, or contact...',
    send: 'Ask',
    contact: 'Contact Sales',
    home: 'Back to homepage',
    empty: 'Ask a question or choose a prompt below.',
    prompts: [
      'Which Southeast Asian markets do you cover?',
      'What services does UnboundOcean provide?',
      'How do GNWAY and Bangwo8 fit in?',
      'How can I contact sales?',
    ],
    fallback:
      'I can help with UnboundOcean markets, services, partner capabilities, and contact options. For a specific deal or deployment question, please contact sales.',
  },
  zh: {
    overline: 'AI 助手',
    title: '向 UnboundOcean 助手提问。',
    body:
      '你可以通过这个助手了解市场覆盖、服务范围、伙伴能力和联系方式。',
    placeholder: '询问市场、服务、伙伴或联系方式...',
    send: '提问',
    contact: '联系销售',
    home: '返回首页',
    empty: '输入问题，或选择下方快捷问题。',
    prompts: [
      '你们覆盖哪些东南亚市场？',
      'UnboundOcean 提供什么服务？',
      'GNWAY 和 Bangwo8 分别是什么关系？',
      '如何联系销售？',
    ],
    fallback:
      '我可以回答 UnboundOcean 的市场、服务、伙伴能力和联系方式。具体项目或落地问题，请联系销售。',
  },
}

export function AssistantPage({ content, locale }: AssistantPageProps) {
  const copy = assistantCopy[locale]
  const [question, setQuestion] = useState('')
  const [submitted, setSubmitted] = useState('')

  const answer = useMemo(() => {
    if (!submitted.trim()) {
      return copy.empty
    }

    const normalized = submitted.toLowerCase()
    const asksMarkets =
      normalized.includes('market') ||
      normalized.includes('country') ||
      submitted.includes('市场') ||
      submitted.includes('东南亚')
    const asksServices =
      normalized.includes('service') ||
      normalized.includes('provide') ||
      submitted.includes('服务')
    const asksPartners =
      normalized.includes('gnway') ||
      normalized.includes('bangwo8') ||
      normalized.includes('partner') ||
      submitted.includes('金万维') ||
      submitted.includes('帮我吧') ||
      submitted.includes('伙伴')
    const asksContact =
      normalized.includes('contact') ||
      normalized.includes('sales') ||
      normalized.includes('email') ||
      submitted.includes('联系') ||
      submitted.includes('销售')

    if (asksMarkets) {
      return `${content.markets.body} ${content.markets.items
        .map((market) => market.name)
        .join(', ')}.`
    }

    if (asksServices) {
      return content.services.items.join(' / ')
    }

    if (asksPartners) {
      return `${content.partners.body} ${content.partners.items
        .map((item) => item.title)
        .join(', ')}.`
    }

    if (asksContact) {
      return `${content.contact.body} Email: ${contactConfig.email}. WhatsApp: ${contactConfig.whatsapp}.`
    }

    return copy.fallback
  }, [content, copy, submitted])

  const submitQuestion = (value: string) => {
    setSubmitted(value)
    setQuestion(value)
  }

  return (
    <main className="assistant-page" id="top">
      <section className="site-section assistant-hero">
        <div className="section-inner section-fill-grid assistant-inner">
          <div className="section-heading-block assistant-copy">
            <p className="overline">{copy.overline}</p>
            <h1>{copy.title}</h1>
            <p>{copy.body}</p>
          </div>
          <div className="assistant-panel">
            <form
              onSubmit={(event) => {
                event.preventDefault()
                submitQuestion(question)
              }}
            >
              <label htmlFor="assistant-question">{copy.placeholder}</label>
              <textarea
                id="assistant-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder={copy.placeholder}
                rows={4}
              />
              <button className="button button-dark" type="submit">
                {copy.send}
              </button>
            </form>

            <div className="assistant-answer" aria-live="polite">
              <span>UnboundOcean</span>
              <p>{answer}</p>
            </div>

            <div className="assistant-prompts">
              {copy.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitQuestion(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="assistant-actions">
        <a className="button button-dark" href="#contact">
          {copy.contact}
        </a>
        <a className="button button-light" href="/">
          {copy.home}
        </a>
      </section>
    </main>
  )
}
