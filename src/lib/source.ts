import { blog, docs } from '@/.source'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const docsSource = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
})

export const blogSource = loader({
  baseUrl: '/blog',
  source: createMDXSource(blog),
})
