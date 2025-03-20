import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film and animation",
    "How-to and style",
    "Music",
    "News and politics",
    "People and blogs",
    "Pets and animals",
    "Science and technology",
    "Sports",
    "Travel and events"
];

/**
 * 为数据库categories表提供初始化数据
 * 运行脚本：bun .\src\scripts\seed-categories.ts
 */
async function generateVideCategoriesData() {
    try {
        const value = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name.toLowerCase()}`
        }))

        await db.insert(categories).values(value)

        console.log('Categories seeded successfully!');
    } catch (error) {
        console.log('Erroe seeding categoties:', error);
        process.exit(1)
    }
}

generateVideCategoriesData()