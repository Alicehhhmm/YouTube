import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UserCircle } from 'lucide-react'
import { Button } from '@/components/ui'

export const AuthButton = () => {
    // TODO: Add different auth states

    return (
        <>
            <SignedIn>
                <UserButton />
                {/* add menu items for studio and user profile */}
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <Button
                        variant='outline'
                        className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5'
                    >
                        <UserCircle />
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    )
}
