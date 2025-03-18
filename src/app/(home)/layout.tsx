import { WithLayout } from '@/components/layout'

interface HomeMainLayoutProps {
    children: React.ReactNode
}

const HomeMainLayout = ({ children }: HomeMainLayoutProps) => {
    return (
        <>
            <WithLayout layout={'home'}>{children}</WithLayout>
        </>
    )
}

export default HomeMainLayout
