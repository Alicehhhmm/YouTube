import { pgTable, text, uuid, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

/**
 * 本项目的所有 PostgreSQL 数据库表结构定义
 * #==============================================#
 * | 表名          | 说明                          |
 * |---------------|------------------------------|
 * | users         | 存储用户注册及基本信息         |
 * #==============================================#
 */
export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    clerkId: text('clerk_id').unique().notNull(),
    name: text('name').notNull(),
    imageUrl: text('image_url').notNull(),
    // TODO: add banner fields

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (t) => [uniqueIndex('clerk_id_idx').on(t.clerkId)])