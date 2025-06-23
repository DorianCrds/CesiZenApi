#!/bin/bash

echo "⏳ Waiting for MySQL at tcp:mysql:3306..."
npx wait-on tcp:mysql:3306

echo "✅ MySQL is up!"

echo "⏳ Applying Prisma schema to database..."
npx prisma db push

echo "🌱 Seeding database..."
node prisma/seed.js || echo "❌ Seed failed"

echo "🚀 Starting API server..."
npm start
