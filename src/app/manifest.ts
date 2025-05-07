import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YAMLResume',
    short_name: 'YResume',
    description: [
      'YAMLResume allows you to create and version control your resumes',
      'using YAML and generate pixel perfect PDFs',
      'with professional layout and typesetting in a breeze.',
    ].join(' '),
    icons: [
      {
        src: '/static/favicons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/static/favicons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  }
}
