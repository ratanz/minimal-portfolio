import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='content flex overflow-hidden bg-red- w-full h-20'>
            <div className="flex px-4 p-2 justify-between w-full ">

                <div className="intro flex gap-3">
                    <Image
                        className='rounded-full object-cover'
                        src="https://images.unsplash.com/photo-1756747840159-f81cc8607ece?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="logo.png"
                        width={60}
                        height={50}
                    />
                    <div className="info">
                        <h1 className='text-3xl font-semibold'>Ratan Rathod</h1>
                        <p className='text-md'>Frontend Developer</p>
                    </div>

                </div>

                <div className="resume flex items-center w-fit  ">
                    <a
                     className='group' 
                      href="https://x.com/ratan7_" target='_blank'>
                        <button className=' text-black px-4 py-2 hover:cursor-pointer flex gap-1 group-hover:scale-105 transition-all duration-150 ease-in'>
                            Resume
                            <div className="icon group-hover:-rotate-10 transition-all duration-150 ease-in ">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2.90602 17.505L5.33709 3.71766C5.5289 2.62987 6.56621 1.90354 7.654 2.09534L19.4717 4.17912C20.5595 4.37093 21.2858 5.40824 21.094 6.49603L18.6629 20.2833C18.4711 21.3711 17.4338 22.0975 16.346 21.9057L4.52834 19.8219C3.44055 19.6301 2.71421 18.5928 2.90602 17.505Z" stroke="#000000" stroke-width="1.5"></path><path d="M8.92902 6.38184L16.8075 7.77102" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.23444 10.3213L16.1129 11.7105" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.53986 14.2607L12.4639 15.129" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path></svg>
                            </div>

                        </button>
                       
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Header
