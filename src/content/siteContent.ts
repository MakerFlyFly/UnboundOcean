export type Locale = 'en' | 'zh'

type NavItem = {
  label: string
  href: string
}

type ConnectItem = {
  title: string
  description: string
  points: string[]
}

type MarketItem = {
  name: string
  role: string
  detail: string
}

type PartnerItem = {
  title: string
  description: string
}

export type SiteContent = {
  languageLabel: string
  nav: NavItem[]
  cta: {
    contact: string
    assistant: string
  }
  hero: {
    title: string
    subtitle: string
    body: string
  }
  connect: {
    kicker: string
    title: string
    items: ConnectItem[]
  }
  markets: {
    overline: string
    title: string
    body: string
    items: MarketItem[]
  }
  partners: {
    overline: string
    title: string
    body: string
    items: PartnerItem[]
  }
  services: {
    overline: string
    title: string
    body: string
    items: string[]
  }
  contact: {
    overline: string
    title: string
    body: string
    whatsapp: string
    whatsappLabel: string
    whatsappValue: string
    email: string
  }
  footer: {
    line: string
    disclaimer: string
    copyright: string
  }
  a11y: {
    homeLink: string
    primaryNav: string
    partnerWebsites: string
    switchLanguage: string
  }
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    languageLabel: 'EN / 中文',
    nav: [
      { label: 'What We Connect', href: '#connect' },
      { label: 'Markets', href: '#markets' },
      { label: 'Partner Capabilities', href: '#partners' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
      { label: 'AI Assistant', href: '/chat' },
    ],
    cta: {
      contact: 'Contact Sales',
      assistant: 'Open AI Assistant',
    },
    hero: {
      title: 'UnboundOcean',
      subtitle:
        'Cross-border sales and local deployment partner for enterprise intelligent service solutions.',
      body:
        'We help enterprise service technologies enter Southeast Asia through localized selling, implementation coordination, and customer-facing support.',
    },
    connect: {
      kicker: 'What we connect',
      title:
        'We connect the right technology, the right buyers, and the right delivery.',
      items: [
        {
          title: 'Technology Vendors',
          description:
            'We represent enterprise service technologies entering SEA markets with the right partners, messaging, and GTM motion.',
          points: [
            'Market entry and GTM',
            'Partner and channel development',
            'Localization advisory',
            'Solution positioning',
          ],
        },
        {
          title: 'Enterprise Buyers',
          description:
            'We help enterprises evaluate, select, and adopt intelligent service solutions with confidence and speed.',
          points: [
            'Solution evaluation',
            'Vendor matching',
            'Commercial support',
            'Implementation coordination',
          ],
        },
        {
          title: 'Local Delivery',
          description:
            'We coordinate implementation, integration, training, and customer-facing support for sustainable outcomes.',
          points: [
            'Implementation management',
            'Integration and customization',
            'Training and adoption',
            'Ongoing support and success',
          ],
        },
      ],
    },
    markets: {
      overline: 'Markets',
      title: "Localized for Southeast Asia's operating reality.",
      body:
        'Six markets, one focused route to buyers. We adapt sales motion, language, deployment expectations, and support workflows to local business conditions.',
      items: [
        {
          name: 'Singapore',
          role: 'Regional headquarters',
          detail: 'A trusted base for SaaS, fintech, and enterprise buying.',
        },
        {
          name: 'Malaysia',
          role: 'Bilingual adoption',
          detail: 'Commercial coverage across English and Chinese-speaking teams.',
        },
        {
          name: 'Indonesia',
          role: 'Scale market',
          detail: 'Enterprise service demand across e-commerce and operations.',
        },
        {
          name: 'Vietnam',
          role: 'Growth corridor',
          detail: 'Fast-moving technology, manufacturing, and service teams.',
        },
        {
          name: 'Thailand',
          role: 'Digital adoption',
          detail: 'Practical transformation needs across customer operations.',
        },
        {
          name: 'Philippines',
          role: 'Service hub',
          detail: 'English-first support operations and BPO capabilities.',
        },
      ],
    },
    partners: {
      overline: 'Partner Capabilities',
      title: 'Enterprise capability, represented with local context.',
      body:
        'UnboundOcean works as a commercial bridge: we introduce, position, and coordinate enterprise intelligent service capabilities for Southeast Asian buyers.',
      items: [
        {
          title: 'GNWAY heritage',
          description:
            'We draw on enterprise software experience from the GNWAY ecosystem while keeping the local sales motion clear and accountable.',
        },
        {
          title: 'Bangwo8 capabilities',
          description:
            'We help buyers understand service management capabilities such as AI support, workflow coordination, knowledge operations, and analytics.',
        },
        {
          title: 'Local coordination',
          description:
            'We align vendor teams, local partners, and customer stakeholders through evaluation, deployment, and adoption.',
        },
      ],
    },
    services: {
      overline: 'Services',
      title: 'Focused services for market entry and buyer success.',
      body:
        'The first version of the site keeps the offer concise. Each service can later expand into a dedicated page as the business grows.',
      items: [
        'Cross-border sales representation',
        'SEA partner and channel development',
        'Buyer discovery and solution matching',
        'Localized messaging and materials',
        'Implementation coordination',
        'Customer-facing support alignment',
      ],
    },
    contact: {
      overline: 'Contact',
      title: 'Start with the market you want to reach.',
      body:
        'Tell us which Southeast Asian market, buyer segment, or service technology you are working with. We will route the conversation to the right next step.',
      whatsapp: 'Request WhatsApp by email',
      whatsappLabel: 'WhatsApp',
      whatsappValue: 'Available by request',
      email: 'Email',
    },
    footer: {
      line:
        'Cross-border sales and local deployment partner for enterprise intelligent service solutions.',
      disclaimer:
        'Partner names are referenced for business context. Trademarks belong to their respective owners.',
      copyright: '(c) 2026 UnboundOcean. All rights reserved.',
    },
    a11y: {
      homeLink: 'UnboundOcean home',
      primaryNav: 'Primary navigation',
      partnerWebsites: 'Partner websites',
      switchLanguage: 'Switch language to Chinese',
    },
  },
  zh: {
    languageLabel: '中文 / EN',
    nav: [
      { label: '业务范围', href: '#connect' },
      { label: '东南亚市场', href: '#markets' },
      { label: '方案能力', href: '#partners' },
      { label: '服务方式', href: '#services' },
      { label: '联系我们', href: '#contact' },
      { label: 'AI 助手', href: '/zh/chat' },
    ],
    cta: {
      contact: '联系销售',
      assistant: '打开 AI 助手',
    },
    hero: {
      title: '未界寻洋',
      subtitle: '企业智能服务方案的东南亚市场拓展伙伴。',
      body:
        '未界寻洋（UnboundOcean）为企业级智能服务方案进入东南亚提供销售拓展与本地落地支持，推进市场判断、客户沟通、方案说明、部署协调和持续服务。',
    },
    connect: {
      kicker: '业务范围',
      title: '让技术方案在东南亚形成销售、交付和服务闭环。',
      items: [
        {
          title: '技术出海',
          description:
            '为企业服务厂商梳理目标市场、客户画像、销售材料和合作路径。',
          points: ['市场判断', '客户画像', '销售材料', '渠道合作'],
        },
        {
          title: '客户拓展',
          description:
            '面向当地企业客户进行需求沟通、方案介绍、厂商匹配和商务推进。',
          points: ['需求沟通', '方案介绍', '厂商匹配', '商务推进'],
        },
        {
          title: '落地支持',
          description:
            '在实施、培训、服务支持和本地伙伴协同中持续跟进项目进展。',
          points: ['实施协调', '培训采用', '客户支持', '伙伴协同'],
        },
      ],
    },
    markets: {
      overline: '东南亚市场',
      title: '先聚焦重点市场，再推进区域扩展。',
      body:
        '我们优先服务新加坡、马来西亚、印度尼西亚、越南、泰国和菲律宾，按市场成熟度、语言环境、客户行业和交付习惯制定进入节奏。',
      items: [
        {
          name: '新加坡',
          role: '区域决策与采购中心',
          detail: '适合 SaaS、金融科技、企业服务与区域总部客户沟通。',
        },
        {
          name: '马来西亚',
          role: '多语言业务市场',
          detail: '覆盖英文、中文和本地团队，适合伙伴渠道与企业客户拓展。',
        },
        {
          name: '印度尼西亚',
          role: '规模增长市场',
          detail: '面向电商、运营、客户服务和企业数字化需求。',
        },
        {
          name: '越南',
          role: '制造与科技增长市场',
          detail: '关注制造、科技服务和快速成长的运营团队。',
        },
        {
          name: '泰国',
          role: '服务与流程升级市场',
          detail: '适合客户运营、服务管理和流程优化场景。',
        },
        {
          name: '菲律宾',
          role: '英语服务运营市场',
          detail: '具备英语支持、BPO 和客户服务运营基础。',
        },
      ],
    },
    partners: {
      overline: '方案能力',
      title: '用成熟方案能力匹配本地客户需求。',
      body:
        '未界寻洋定位为商业与落地伙伴，而非单一软件平台。我们代表并协调 GNWAY、Bangwo8 等相关企业服务能力，帮助客户理解适用场景、评估价值，并推进销售、部署和服务协同。',
      items: [
        {
          title: 'GNWAY 企业软件经验',
          description:
            '借助 GNWAY 体系在企业软件和服务管理领域的经验，支持方案梳理和商业沟通。',
        },
        {
          title: 'Bangwo8 服务管理能力',
          description:
            '帮助客户理解 AI 客服、工单协同、知识运营、数据分析等服务管理能力。',
        },
        {
          title: '本地协同',
          description:
            '把厂商、客户、本地伙伴放在同一条推进线上，减少跨境沟通和交付摩擦。',
        },
      ],
    },
    services: {
      overline: '服务方式',
      title: '围绕进入市场后的关键动作提供支持。',
      body: '我们把工作聚焦在能推动项目向前走的环节：找客户、讲清方案、建立合作、协调落地。',
      items: [
        '目标市场判断',
        '客户与渠道拓展',
        '销售材料本地化',
        '需求沟通与方案说明',
        '商务推进与伙伴协调',
        '实施、培训与客户支持衔接',
      ],
    },
    contact: {
      overline: '联系我们',
      title: '告诉我们你想进入哪个市场。',
      body:
        '请说明目标国家、客户类型、方案方向或当前阶段。我们会先判断适合的进入路径，再安排销售或项目沟通。',
      whatsapp: '邮件索取 WhatsApp',
      whatsappLabel: 'WhatsApp',
      whatsappValue: '请通过邮件索取',
      email: '邮箱',
    },
    footer: {
      line: '未界寻洋（UnboundOcean）专注企业智能服务方案在东南亚的销售拓展与本地落地。',
      disclaimer:
        '合作伙伴名称仅用于业务语境说明，相关商标归各自权利方所有。',
      copyright: '(c) 2026 未界寻洋（UnboundOcean）。保留所有权利。',
    },
    a11y: {
      homeLink: '未界寻洋首页',
      primaryNav: '主导航',
      partnerWebsites: '合作伙伴网站',
      switchLanguage: '切换到英文',
    },
  },
}
