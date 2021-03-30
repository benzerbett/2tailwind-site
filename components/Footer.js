import React from 'react'
import Container from '../components/layout/Container'

function Footer() {
  return (
    <footer className="my-20 font-mono">
      <Container>
        <p className="text-sm text-center text-gray-700">
          <a className="border-b border-primary" href="https://twitter.com/2tailwind" rel="noreferrer noopener">
            @2tailwind
          </a>
          {' '} on Twitter
        </p>
      </Container>
    </footer>
  )
}

export default Footer
