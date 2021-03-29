import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen max-w-900z items-center">
      <SEO title="2Tailwind" image="/logo.svg" />
      <div className="bg-pattern w-full">
        <Nav />
        <Container className="flex flex-col items-center">
          <header className="max-w-3xl py-10 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              New 2Tailwind project
            </h1>
            <h5 className="text-xl mt-4 font-mono">
              Please fill the form below to get started.
            </h5>
          </header>
        </Container>
      </div>

      <div className="flex flex-col md:flex-row relative w-fullz px-3 md:px-10 my-8 md:my-12 items-center">
        <div className="px-4 sm:px-2 sm:w-full my-1">
          <div className="grid gap-10 md:gap-16 md:grid-rows-3">
            <div 
            >
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4f3fyatDC-nlNPAZA72PuiXFxp1Sax-G9dvFPZh1AJTL8tA/viewform?embedded=true" 
              height="2413"
              width="370"
               frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
