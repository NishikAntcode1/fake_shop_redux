import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <Link href="https://flowbite.com" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </Link>
              <div className="flex items-center">
                  <Link href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
              </div>
          </div>
        </nav>
    </>
  )
}

export default Header
