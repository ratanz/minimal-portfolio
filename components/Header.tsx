import React from 'react'
import Image from 'next/image'

// Extract icon as a separate component for better organization
const DocumentIcon = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M2.90602 17.505L5.33709 3.71766C5.5289 2.62987 6.56621 1.90354 7.654 2.09534L19.4717 4.17912C20.5595 4.37093 21.2858 5.40824 21.094 6.49603L18.6629 20.2833C18.4711 21.3711 17.4338 22.0975 16.346 21.9057L4.52834 19.8219C3.44055 19.6301 2.71421 18.5928 2.90602 17.505Z" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <path 
      d="M8.92902 6.38184L16.8075 7.77102" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M8.23444 10.3213L16.1129 11.7105" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M7.53986 14.2607L12.4639 15.129" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
)

// Constants for better maintainability
const PROFILE_DATA = {
  name: 'Ratan Rathod',
  title: 'Frontend Developer',
  imageUrl: 'https://images.unsplash.com/photo-1756747840159-f81cc8607ece?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  resumeUrl: 'https://x.com/ratan7_'
}

const Header = () => {
  return (
    <header className="flex h-20 w-full overflow-hidden bg-white">
      <div className="flex w-full justify-between px-3">
        {/* Profile Section */}
        <div className="flex items-center gap-3 overflow-hidden">
          <Image
            className="rounded-full h-14 w-14 object-cover"
            src={PROFILE_DATA.imageUrl}
            alt={`${PROFILE_DATA.name} profile picture`}
            width={40}
            height={40}
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-gray-600">
              {PROFILE_DATA.title}
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex items-center">
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-gray-900 transition-transform duration-150 ease-in-out hover:scale-105"
            aria-label="Download resume"
          >
            <span>Resume</span>
            <DocumentIcon className="transition-transform duration-150 ease-in-out group-hover:-rotate-12" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header