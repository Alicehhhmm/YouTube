import { Separator, Sidebar, SidebarContent } from '@/components/ui'
import { MainSection } from './main-section'
import { PersonalSection } from './personal-section'

type Props = {}
export const HomeSidebar = ({}: Props) => {
    return (
        <Sidebar className='pt-16 z-40 border-none' collapsible='icon'>
            <SidebarContent className='bg-background'>
                <MainSection />
                <Separator />
                <PersonalSection />
            </SidebarContent>
        </Sidebar>
    )
}
