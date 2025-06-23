#!/bin/sh

echo "⏳ Applying Prisma schema to database..."
npx prisma db push

echo "🚀 Starting API server..."
npm run start
