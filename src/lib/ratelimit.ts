import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

// Create a new ratelimiter, that allows 100 requests per 10 seconds
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '10s')
})