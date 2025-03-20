'use client'

import { Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useTRPC } from '@/trpc/client'
import { FilterCarousel } from '@/components/filter-carousel'

interface CategoriesSectionProps {
    categoryId?: string
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
    return (
        <Suspense fallback={<CategoriesSkeleton />}>
            <ErrorBoundary fallback={<p>Error...</p>}>
                <CategoriesSectionSuspense categoryId={categoryId} />
            </ErrorBoundary>
        </Suspense>
    )
}

const CategoriesSkeleton = () => {
    return <FilterCarousel isLoading onSelect={() => {}} data={[]} />
}

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
    const trpc = useTRPC()
    const router = useRouter()

    const categories = useSuspenseQuery(trpc.categories.getMany.queryOptions()).data

    const data = categories.map(category => ({
        value: category.id,
        label: category.name,
    }))

    const onSelect = (value: string | null) => {
        const url = new URL(window.location.href)

        if (value) {
            url.searchParams.set('categoryId', value)
        } else {
            url.searchParams.delete('categoryId')
        }

        router.push(url.toString())
    }

    return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />
}
