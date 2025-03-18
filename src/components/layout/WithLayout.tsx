import type { FC, PropsWithChildren } from 'react'
import type { Layouts } from '@/types'

import { HomeLayout } from '@/components/layout'

const layouts = {
    home: HomeLayout,
} satisfies Record<Layouts, FC>

type WithLayoutProps<Layouts> = PropsWithChildren<{ layout: Layouts }>

export const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
    const LayoutComponent = layouts[layout] ?? HomeLayout

    return <LayoutComponent>{children}</LayoutComponent>
}

export default WithLayout
