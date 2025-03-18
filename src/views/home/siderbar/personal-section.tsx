'use client'

import Link from 'next/link'
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react'

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
    {
        title: 'History',
        url: '/playlists/history',
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: 'Liked videos',
        url: '/playlists/liked',
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: 'All',
        url: '/playlists',
        icon: ListVideoIcon,
    },
]

export const PersonalSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                isActive={false} // TODO: chang to look at current pathname
                                onClick={() => {}} //TODO: do something on click
                                asChild
                            >
                                <Link href={item.url} className='flex items-center gap-4'>
                                    <item.icon />
                                    <span className='text-sm'>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
