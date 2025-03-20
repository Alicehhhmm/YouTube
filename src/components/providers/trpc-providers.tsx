import { TRPCReactProvider } from '@/trpc/client'

export const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
    return <TRPCReactProvider>{children}</TRPCReactProvider>
}
