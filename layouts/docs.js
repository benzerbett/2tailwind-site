import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import pages from '../pages.json'
import { ThemeContext } from '../context/ThemeContext'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'

const mdComponents = {
  pre: (props) => <div className="my-4" {...props} />,
  code: CodeBlock,
}

import MoonIcon from '../icons/moon.svg'
import SunIcon from '../icons/sun.svg'
import SEO from '../components/SEO'

const DocsLayout = ({ children, frontMatter }) => {


  return (
    <MDXProvider components={mdComponents}>
    </MDXProvider>
  )
}

export default DocsLayout
