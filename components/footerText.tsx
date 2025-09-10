import React from 'react'
import DecryptedText from './ui/DecryptedText'

const FooterText = () => {
    return (
        <>
            <div className='relative leading-none tracking-tighter mt-14  flex items-center justify-center text-[8vw] uppercase'>
                <DecryptedText text='Ratan Rathod' />
            <div className='absolute bg-white -bottom-1 blur-2xl h-10 w-full '/>
            </div>



        </>
    )
}

export default FooterText
