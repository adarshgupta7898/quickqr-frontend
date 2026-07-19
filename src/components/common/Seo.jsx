import { useEffect } from 'react'

const BASE_URL = 'https://quickqr-frontend-flame.vercel.app'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`
const DEFAULT_TITLE = 'Free QR Code Generator - Create Unlimited QR Codes Online | QuickQR'
const DEFAULT_DESCRIPTION = 'Generate unlimited QR codes for URLs instantly. Download high-quality QR codes for free. Fast, secure and mobile-friendly QR code generator.'

function setMeta(name, content, attr = 'name') {
  if (!content) return

  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return

  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function setStructuredData(structuredData) {
  const scriptId = 'quickqr-jsonld'
  let script = document.getElementById(scriptId)
  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': structuredData,
  })
}

export default function Seo({
  title,
  description,
  pathname = '/',
  image = DEFAULT_IMAGE,
  robots = 'index,follow',
  structuredData = [],
}) {
  const pageTitle = title || DEFAULT_TITLE
  const pageDescription = description || DEFAULT_DESCRIPTION
  const canonicalUrl = new URL(pathname, BASE_URL).toString()

  useEffect(() => {
    document.title = pageTitle
    setLink('canonical', canonicalUrl)
    setMeta('description', pageDescription)
    setMeta('robots', robots)
    setMeta('theme-color', '#0f172a')
    setMeta('og:title', pageTitle, 'property')
    setMeta('og:description', pageDescription, 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', pageTitle)
    setMeta('twitter:description', pageDescription)
    setMeta('twitter:image', image)
    setLink('manifest', '/manifest.json')

    if (structuredData.length > 0) {
      setStructuredData(structuredData)
    }
  }, [pageTitle, pageDescription, canonicalUrl, image, robots, structuredData])

  return null
}
