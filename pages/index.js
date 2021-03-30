import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import React, { useEffect, useState } from 'react'

export default function Home({act_Pg, frm_sbd, subdomain}) {
  
  const dTools = [
    {name:'Figma', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'pink-600'},
    {name:'Adobe XD', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'pink-700'},
    {name:'Sketch', icon:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-figma\"><path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path></svg>', color:'yellow-500'}
  ]

  const [activeDT, setActiveDT] = useState(act_Pg)

  useEffect(() => {
    let mounted = true
    if(mounted){
      if(!frm_sbd){
        setTimeout(() => {
          if(activeDT + 1 < dTools.length){setActiveDT(activeDT+1)}else{setActiveDT(0)}
        }, 5000);
      }
    }
    return () => {
      mounted = false
    }
  }, [activeDT])
  return (
    <div className="flex flex-col max-w-screen max-w-900z items-center">
      <SEO title={(!frm_sbd?("Figma / Sketch / AdobeXD"):(dTools[activeDT].name))+" To Tailwind CSS"} image="/logo.svg" />
      <div className="bg-pattern w-full">
        <Nav />
        <Container className="flex flex-col items-center">
          <header className="max-w-4xl py-20 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              We will help you migrate your {(<span className={"ml-2 text-"+dTools[activeDT].color}>
                {dTools[activeDT].name}
              </span>)} project to Tailwind CSS
            </h1>
            <h5 className="text-xl mt-5 font-mono">
              <span className="hidden">For as little as <a href="/pricing" title="Pricing starts at $50. Click to see full pricing" className="font-bold hover:underline active:underline focus:underline text-xl">$100</a><sup>*</sup>. </span>
              <a href="/start" className=" ml-2 mt-10 text-xl border-b-2 border-primary hover:border-black hover:text-primary active:border-black active:text-primary focus:border-black focus:text-primary transition-colors ease-in-out duration-300 font-bold">Start now</a>
            </h5>
            <i className="text-pink-600"></i><i className="text-pink-700"></i><i className="text-yellow-500"></i>
          </header>
        </Container>
      </div>

      <div className="flex flex-col md:flex-row relative w-fullz px-5 md:px-16 my-8 md:my-12 items-center">
        <Container className="my-1">
          <div className="grid gap-10 md:gap-16 md:grid-rows-3">
            <div className="text-gray-700">
              <p className="mb-2 font-mono text-lg font-semibold">1. Share the design with us</p>
              <p className="mb-2">Share the design with us. We will honour any disclosure agreements & procedures you have</p>
              <Link href="/start">
                <a className="border-b border-primary">start now</a>
              </Link>
            </div>
            <div className="text-gray-700">
              <p className="mb-2 font-mono text-lg font-semibold">2. We jointly review the work to be done</p>
              <p className="mb-2">We will discuss the work to be done and plan the scope of work.</p>
              <Link href="https://twitter.com/2tailwind">
                <a target="_blank" rel="noopener noreferrer" className="border-b border-primary" title="Twitter @2tailwind">twitter</a>
              </Link>
            </div>
            <div className="text-gray-700">
              <p className="mb-2 font-mono text-lg font-semibold">3. We get to work</p>
              <p className="mb-2">
                We will get to work & build the design as per the agreed format & guidelines, then deliver it to you
              </p>
              <Link href="/start">
                <a className="border-b border-primary">start now</a>
              </Link>
            </div>
            <div className="text-gray-700 py-5">
                <a href="/start" className="bg-white border-2 border-primary rounded px-4 py-2 hover:bg-primary transition ease-in-out duration-100">start now</a>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  )
}

Home.getInitialProps = async ({req}) => {
  let act_Pg = 0
  let frm_sbd = false
  const subdomain = req.headers.host.split('.')[0];
  if(subdomain != undefined && !subdomain.includes('127') && !subdomain.includes('0') && !subdomain.includes('localhost')){
    frm_sbd = true
    if(subdomain == 'figma'){
      act_Pg = 0
    }else if(subdomain == 'xd' || subdomain == 'adobexd'){
      act_Pg = 1
    }else if(subdomain == 'sketch'){
      act_Pg = 2
    }
  }else{
    frm_sbd = false;
    act_Pg = 0;
  }
  return {act_Pg, frm_sbd, subdomain};
}