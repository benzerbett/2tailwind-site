import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Backdrop } from '@windmill/react-ui'
import Container from './layout/Container'
import MenuIcon from '../icons/menu.svg'

function Nav({ menu }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  function handleMenuClose(e) {
    if (e.target.id === 'backdrop') {
      setIsOpen(false)
    }
  }

  return (
    <Container className="py-4">
      {menu ? (
        <>
          <div className="flex items-center justify-between -mt-1 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 -ml-1">
              <MenuIcon className="w-6 h-6" />
            </button>
            {isOpen && (
              <Backdrop id="backdrop" onClick={handleMenuClose}>
                {menu}
              </Backdrop>
            )}
            <Link href="/">
              <a className="block font-mono font-semibold text-right text-gray-700">
                <span className="text-gray-700">2Tailwind</span>
              </a>
            </Link>
            <Link href="/start">
              <a className="block font-mono font-semibold text-right text-gray-700">
                <span className="text-gray-700">start</span>
              </a>
            </Link>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="block font-mono font-semibold text-left text-gray-700">
              <span className="text-teal-800">2Tailwind</span>
            </a>
          </Link>
          <Link href="/start">
            <a className="block font-mono font-semibold text-right text-gray-700">
              <span className="text-teal-600">start</span>
            </a>
          </Link>
        </div>
      )}
    </Container>
  )
}

export default Nav
