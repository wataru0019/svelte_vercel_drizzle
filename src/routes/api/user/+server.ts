import { db } from '$lib/db';
import { users } from '$lib/schema';
import { json } from '@sveltejs/kit'

export async function POST({ request }) {
    const  data = await request.json()
    try {
        const newUser = await db.insert(users).values({
            name: data.name,
            email: data.email
        }).returning()
        return json({ user: newUser[0] })
    } catch(error) {
        console.error(error)
        return json({ message: "Error" })
    }
}