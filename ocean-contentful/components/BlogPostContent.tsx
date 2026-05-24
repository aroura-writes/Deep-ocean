'use client'

import type { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface BlogPostContentProps {
  content: Document | null
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content) return null

  return (
    <div className="prose prose-invert max-w-none">
      {documentToReactComponents(content)}
    </div>
  )
}