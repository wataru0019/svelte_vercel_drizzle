import { db } from '$lib/db';
import { users } from '$lib/schema';
// import type { PageServerLoad } from './$types';

export const load = async () => {
  const allUsers = await db.select().from(users);
  
  return {
    users: allUsers
  };
};