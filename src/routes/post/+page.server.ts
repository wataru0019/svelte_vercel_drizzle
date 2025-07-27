import { db } from '$lib/db'
import { users, posts } from '$lib/schema'
import { eq } from 'drizzle-orm'

export async function load() {
    const user = await db.select()
        .from(users)
        .where(eq(users.id, 1))

    const user_one = user[0]

    const post_list = await db.select()
        .from(posts)
        .where(eq(posts.userId, 1))

    return {
        user: user_one,
        posts: post_list
    }
}