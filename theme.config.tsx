import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Jack Wiki :: 杰克百科</span>,
  faviconGlyph: '📖',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  project: {
    link: 'https://github.com/jacklearntech/documentation-starter-kit',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Jack Learns to Code, all Rights Reserved',
  },
}

export default config
