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
    title: string
    body: string
    items: MarketItem[]
  }
  partners: {
    title: string
    body: string
    items: PartnerItem[]
  }
  services: {
    title: string
    body: string
    items: string[]
  }
  contact: {
    title: string
    body: string
    whatsapp: string
    whatsappLabel: string
    email: string
  }
  footer: {
    line: string
    disclaimer: string
  }
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    languageLabel: 'EN / 中文',
    nav: [
      { label: 'Platform Partners', href: '#partners' },
      { label: 'Markets', href: '#markets' },
      { label: 'Services', href: '#services' },
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
      title: 'Start with the market you want to reach.',
      body:
        'Tell us which Southeast Asian market, buyer segment, or service technology you are working with. We will route the conversation to the right next step.',
      whatsapp: 'Request WhatsApp by email',
      whatsappLabel: 'WhatsApp',
      email: 'Email',
    },
    footer: {
      line:
        'Cross-border sales and local deployment partner for enterprise intelligent service solutions.',
      disclaimer:
        'Partner names are referenced for business context. Trademarks belong to their respective owners.',
    },
  },
  zh: {
    languageLabel: '中文 / EN',
    nav: [
      { label: '平台伙伴', href: '#partners' },
      { label: '市场', href: '#markets' },
      { label: '服务', href: '#services' },
      { label: 'AI 助手', href: '/chat' },
    ],
    cta: {
      contact: '联系销售',
      assistant: '打开 AI 助手',
    },
    hero: {
      title: 'UnboundOcean',
      subtitle:
        '企业智能服务方案进入东南亚市场的跨境销售与本地落地伙伴。',
      body:
        '我们帮助企业服务技术进入东南亚，通过本地化销售、实施协调和面向客户的支持，连接技术方与企业买家。',
    },
    connect: {
      kicker: '我们连接什么',
      title: '连接合适的技术、合适的买家，以及真正可落地的交付。',
      items: [
        {
          title: '技术厂商',
          description:
            '我们代表企业服务技术进入东南亚市场，协助梳理伙伴、信息表达和 GTM 路径。',
          points: ['市场进入与 GTM', '伙伴与渠道拓展', '本地化建议', '方案定位'],
        },
        {
          title: '企业买家',
          description:
            '我们帮助企业评估、选择并采用智能服务方案，让采购和落地更清晰。',
          points: ['方案评估', '厂商匹配', '商务支持', '实施协调'],
        },
        {
          title: '本地交付',
          description:
            '我们协调实施、集成、培训和客户支持，帮助项目从销售走向持续使用。',
          points: ['实施管理', '集成与定制', '培训与采用', '持续支持'],
        },
      ],
    },
    markets: {
      title: '面向东南亚真实经营环境进行本地化。',
      body:
        '六个重点市场，一条清晰的买家路径。我们围绕语言、销售方式、部署预期和支持流程做本地适配。',
      items: [
        {
          name: '新加坡',
          role: '区域总部',
          detail: '面向 SaaS、金融科技和企业采购的可信入口。',
        },
        {
          name: '马来西亚',
          role: '双语市场',
          detail: '覆盖英文与中文业务团队的商业沟通场景。',
        },
        {
          name: '印度尼西亚',
          role: '规模市场',
          detail: '电商、运营和企业服务需求持续增长。',
        },
        {
          name: '越南',
          role: '增长走廊',
          detail: '科技、制造和服务团队数字化进程快速。',
        },
        {
          name: '泰国',
          role: '数字采用',
          detail: '客户运营和企业服务场景具备明确转型需求。',
        },
        {
          name: '菲律宾',
          role: '服务中心',
          detail: '英语支持运营和 BPO 能力成熟。',
        },
      ],
    },
    partners: {
      title: '以本地语境承接企业级能力。',
      body:
        'UnboundOcean 是商业桥梁：我们介绍、定位并协调企业智能服务能力，帮助东南亚买家更容易理解和采用。',
      items: [
        {
          title: 'GNWAY 生态经验',
          description:
            '借助 GNWAY 生态的企业软件经验，同时保持本地销售动作清晰、可信、可负责。',
        },
        {
          title: 'Bangwo8 能力理解',
          description:
            '帮助买家理解 AI 客服、流程协同、知识运营、数据分析等服务管理能力。',
        },
        {
          title: '本地协调',
          description:
            '在评估、部署和采用过程中协调厂商、本地伙伴和客户关键角色。',
        },
      ],
    },
    services: {
      title: '服务聚焦市场进入与买家成功。',
      body:
        '官网首期保持简洁。随着业务增长，每一项服务都可以扩展为独立页面。',
      items: [
        '跨境销售代表',
        '东南亚伙伴与渠道拓展',
        '买家发现与方案匹配',
        '本地化信息和材料',
        '实施协调',
        '客户支持协同',
      ],
    },
    contact: {
      title: '从你想进入的市场开始聊。',
      body:
        '告诉我们你的目标东南亚市场、买家类型或服务技术方向，我们会把沟通推进到合适的下一步。',
      whatsapp: '邮件索取 WhatsApp',
      whatsappLabel: 'WhatsApp',
      email: '邮箱',
    },
    footer: {
      line: '企业智能服务方案进入东南亚市场的跨境销售与本地落地伙伴。',
      disclaimer:
        '合作伙伴名称仅用于业务语境说明，相关商标归各自权利方所有。',
    },
  },
}
