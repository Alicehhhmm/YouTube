# YouTube

This is a YouTube Colne app that uses nextjs15 and TRPC

# Config localtion

-   `.env.local`

```env
# 权限认证：clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='you clerk key'
CLERK_SECRET_KEY='you clerk key'
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
CLERK_SIGNING_SECRET='your clerk webhook key'

# 数据库服务端地址配置
DATABASE_URL='postgresql://your_nextjs_neondb_url'

# 中间件云平台：upstash redis
UPSTASH_REDIS_REST_URL=<YOUR_URL>
UPSTASH_REDIS_REST_TOKEN=<YOUR_TOKEN>

```

# DataBase command

-   [pnpm neno dcos](https://orm.drizzle.team/docs/kit-overview)

```shell
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
pnpm drizzle-kit push
pnpm drizzle-kit pull
pnpm drizzle-kit check
pnpm drizzle-kit up
pnpm drizzle-kit studio
```
