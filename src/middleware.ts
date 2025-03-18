import { clerkMiddleware, createRouteMatcher, } from '@clerk/nextjs/server'

// 创建守卫路由
const isProtectedRoute = createRouteMatcher(['/protected(.*)'])

export default clerkMiddleware(async (auth, req) => {

    // 符合条件的路由，均受保护（需要身份验证）
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}