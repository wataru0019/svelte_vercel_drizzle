import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'driver' ではなく 'dialect' を使用
  dbCredentials: {
    url: process.env.DATABASE_URL!, // 'connectionString' ではなく 'url' を使用
  },
} satisfies Config;