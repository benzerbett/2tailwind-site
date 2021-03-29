import React from 'react'
import Head from 'next/head'

function SEO({ children, title, description, index = true, image }) {
  const siteDescription = description
    ? description
    : 'We\'ll help migrate your project to Tailwind CSS'
  const socialImage = image ? image : '/logo.svg'
  return (
    <Head>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content="2Tailwind" />
      <meta name="robots" content={index ? 'index' : 'noindex'} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:site_name" content="2Tailwind" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@totailwind" />
      <meta name="twitter:image" content={socialImage} />

      <title>{title}</title>
      {children}
    </Head>
  )
}

export default SEO
