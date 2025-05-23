import { Mermaid } from '@/app/components/mdx/mermaid'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import defaultComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Mermaid,
    img: (props) => <ImageZoom {...props} />,
    ...components,
  }
}
