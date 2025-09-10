import React from 'react'
import Image from 'next/image'
import { File } from 'lucide-react'
import { ContainerTextFlip } from './ui/container-text-flip'

// Constants for better maintainability
const PROFILE_DATA = {
  name: 'Ratan Rathod',
  title: 'Frontend Developer',
  imageUrl: 'https://images.unsplash.com/photo-1756747840159-f81cc8607ece?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  resumeUrl: 'https://docs.google.com/document/d/10b6XG-B2TKHeF5HQzY5bQ_OMeIV3y5AWv77NQtnsK2c/edit?usp=sharing'
}

const Header = () => {
  return (
    <header className="flex h-24 md:w-full w-screen lg:px-0 px-4 md:p-0 overflow-hidden border-b pb-4 border-zinc-900/10">
      <div className="flex w-full justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-4 overflow-hidden">
          <Image
            className="rounded-full md:h-18 md:w-18 h-14 w-14 object-cover"
            src={PROFILE_DATA.imageUrl}
            alt={`${PROFILE_DATA.name} profile picture`}
            width={40}
            height={40}
          />
          <div>
            <h1 className="md:text-3xl text-2xl font-semibold text-gray-900">
              {PROFILE_DATA.name}
            </h1>
              <ContainerTextFlip />
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex items-center mt-2">
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 transition-transform duration-150 ease-in-out hover:scale-105"
            aria-label="Download resume"
          >
            <span className='text-zinc-500 hover:text-black flex items-center gap-0.5'>Resume
              <File height={18} className='' />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header