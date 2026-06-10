'use client'

import { IconSpeakerphone } from '@tabler/icons-react'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { defaultLanguage, getLocalizedUrl, type Language } from '@/i18n'

export function NewsChannel() {
  const params = useParams()
  const language = (params?.language || defaultLanguage) as Language

  return (
    <div
      className={clsx(
        'bg-fd-secondary',
        'border-b',
        'border-fd-accent',
        'py-1',
        'px-4',
        'flex',
        'items-center',
        'justify-center'
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 py-3">
          <IconSpeakerphone size={20} stroke={1.5} />
          <div className="text-sm text-fd-foreground">
            <Link
              href={getLocalizedUrl('/blog/v0.13', language)}
              className="underline font-semibold"
            >
              YAMLResume v0.13
            </Link>{' '}
            is here! New{' '}
            <Link
              href={getLocalizedUrl('/docs/layouts/docx', language)}
              className="underline"
            >
              DOCX rendering engine
            </Link>
            ,{' '}
            <Link
              href={getLocalizedUrl(
                '/docs/locale/brazilian-portuguese',
                language
              )}
              className="underline"
            >
              Brazilian Portuguese language support
            </Link>
            , and various bug fixes.
          </div>
        </div>
      </div>
    </div>
  )
}
