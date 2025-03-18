import { useAuth, useClerk } from '@clerk/nextjs'

export const useJWTAuth = () => {
    const { isSignedIn, userId, orgRole, getToken } = useAuth()

    const clerk = useClerk()

    const openSignIn = () => {
        return clerk.openSignIn()
    }

    return {
        clerk,
        openSignIn,
        isSignedIn,
        userId,
        orgRole,
        getToken
    }
}