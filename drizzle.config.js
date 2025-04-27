import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_wNtYd10aQrpT@ep-empty-scene-a4unjj1y-pooler.us-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
