import { ClerkProvider } from '@clerk/nextjs'

export const JWTProvider = ({ children }: { children: React.ReactNode }) => {
    return <ClerkProvider afterSignOutUrl='/'>{children}</ClerkProvider>
}
