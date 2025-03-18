import type { FC, PropsWithChildren } from 'react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { HomeNavbar, HomeSidebar } from '@/views/home'

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <SidebarProvider>
            <nav className='w-full'>
                <HomeNavbar />
                <div className='flex min-h-screen pt-[4rem]'>
                    <HomeSidebar />
                    <main className='flex-1 overflow-y-auto'>{children}</main>
                </div>
            </nav>
        </SidebarProvider>
    )
}
