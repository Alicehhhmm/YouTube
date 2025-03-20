import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'
import { ClientGreeting } from './client-greeting'

export default async function Home() {
    prefetch(
        trpc.hello.queryOptions({
            text: '11111',
        })
    )

    return (
        <HydrateClient>
            <div className='flex items-center justify-center bg-amber-100'>home page video </div>
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
                <Suspense fallback={<p>Loading...</p>}>
                    <div>Suspense center...</div>
                    <ClientGreeting />
                </Suspense>
            </ErrorBoundary>
        </HydrateClient>
    )
}
