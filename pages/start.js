import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import React, {useState, useEffect} from 'react'

const dTools = [
  {name:'Figma', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'pink-600'},
  {name:'Adobe XD', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'pink-700'},
  {name:'Sketch', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'yellow-500'}
]

export default function Start({act_Pg, frm_sbd}) {
  const [activeDT, setActiveDT] = useState(act_Pg)
  return (
    <div className="flex flex-col max-w-screen max-w-900z items-center">
      <SEO title={dTools[activeDT].name+" To Tailwind CSS"} image="/logo.svg" />
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

Start.getInitialProps = ({req}) => {
  let act_Pg = 0
  let frm_sbd = false
  const subdomain = req.headers.host.split('.')[0]; // || 'sketch'
  if(subdomain != undefined){
    frm_sbd = true
    if(subdomain == 'figma'){
      act_Pg = 0
    }else if(subdomain == 'xd' || subdomain == 'adobexd'){
      act_Pg = 1
    }else if(subdomain == 'sketch'){
      act_Pg = 2
    }
  }
  return {act_Pg, frm_sbd};
}