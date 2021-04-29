import React from 'react'
import Head from 'next/head'

function SEO({ children, title, description, index = true, image }) {
  description += " Figma to Tailwind CSS, Sketch to Tailwind CSS, Adobe XD to tailwind CSS, Bootstrap to Tailwind CSS, Tailwind CSS Experts, CSS Experts for hire"
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
      <meta property="og:site_name" content="Figma to Tailwind CSS" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@trybeapps" />
      <meta name="twitter:image" content={socialImage} />



      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />



      <title>{title}</title>
      {children}
    </Head>
  )
}

export default SEO
