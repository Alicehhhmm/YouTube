import { HydrateClient, prefetch, trpc } from '@/trpc/server'
import { HomeViews } from '@/views/home'

interface HomePageProps {
    searchParams: Promise<{
        categoryId?: string
    }>
}

const HomePage = async ({ searchParams }: HomePageProps) => {
    const { categoryId } = await searchParams

    prefetch(trpc.categories.getMany.queryOptions())

    return (
        <HydrateClient>
            <HomeViews categoryId={categoryId} />
        </HydrateClient>
    )
}

/**
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = 'force-dynamic'

export default HomePage
