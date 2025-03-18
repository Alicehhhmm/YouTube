import Image from 'next/image'
import Link from 'next/link'

import { SidebarTrigger } from '@/components/ui/sidebar'
import { AuthButton } from '@/views/auth'
import { SearchInput } from './search-input'

export const HomeNavbar = () => {
    return (
        <nav className='border-b border-gray-100 fixed top-0 left-0 right-0 h-14 bg-white flex items-center z-50'>
            <div className='flex items-center justify-between gap-4 w-full px-4'>
                {/* Menu and logo */}
                <div className='flex items-center shrink-0'>
                    <SidebarTrigger className='size-10 rounded-full p-2' />
                    <Link href={'/'}>
                        <div className='flex items-center pt-4.5 pr-3.5 pb-4.5 pl-4'>
                            <Image src='./logo-text.svg' alt='logo' width={93} height={20} />
                        </div>
                    </Link>
                </div>

                {/* search bar */}
                <div className='flex-1 flex justify-center max-w-[720px] max-auto'>
                    <SearchInput />
                </div>

                {/* use auth */}
                <div className='flex shrink-0 items-center gap-4'>
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}
