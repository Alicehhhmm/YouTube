'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useTRPC } from '@/trpc/client'

export function ClientGreeting() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(
        trpc.hello.queryOptions({
            text: '222',
        })
    )

    return <div>{data.greeting}</div>
}
