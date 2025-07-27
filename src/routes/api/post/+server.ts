import { db } from '$lib/db'
import { posts } from '$lib/schema'
import { json } from '@sveltejs/kit'

export async function POST({ request }) {
    const data = await request.json()
    console.log(data)
    try {
        const newPost = await db.insert(posts).values({
            title: data.title,
            content: data.content,
            userId: data.userId
        }).returning()
        console.log(newPost)
        return json({ post: newPost })
    } catch(error) {
        console.error(error)
    }
}


