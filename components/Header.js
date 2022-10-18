import Image from 'next/image'
import React from 'react'
import { SearchIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

// Link to Real Instagram Logo - https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  console.log(session);

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
    
        <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image 
          src='https://i.ibb.co/fvvDhQf/Insta-Bros-Logo-Correct-Width-2-0.png" alt="Insta-Bros-Logo-Correct-Width'
          layout='fill'
          objectFit='contain'
          />
        </div>

        <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image 
          src='https://cdn-icons-png.flaticon.com/512/174/174855.png'
          layout='fill'
          objectFit='contain'
          />
        </div>

        {/* Middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' 
            type='text' 
            placeholder='Search' />
          </div>
        </div>
        
        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push('/')} className='navBtn' />
          {session ? (
            <>
              <MenuIcon className='h-6 md:hidden cursor-pointer' onClick={() => setOpen(true)} />
            </>
          ) : (
            <>
              <MenuIcon className='h-6 md:hidden cursor-pointer' />
            </>
          )}
          

          {session ? (
          <>
            <div className='relative navBtn'>
              <PaperAirplaneIcon className='navBtn rotate-45' />
              <div className='absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
            </div>
            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
            <UserGroupIcon className='navBtn' />
            <HeartIcon className='navBtn' />
            
            <img
            onClick={signOut} 
            src={session.user.image} 
            alt='Profile Pic' 
            className='h-10 w-10 rounded-full cursor-pointer'
            />
          </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
          
        </div>
        
      </div>
    </div>
  )
}

export default Header;