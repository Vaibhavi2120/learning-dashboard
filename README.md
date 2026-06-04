# Learning Dashboard

## Overview
A modern learning dashboard built using Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features
- Dashboard layout with sidebar navigation
- Course progress cards
- Activity section
- Responsive UI
- Supabase integration for course data

## Architecture
- Next.js App Router
- Reusable React components
- Tailwind CSS for styling
- Supabase as backend database

## Server / Client Component Split
- Page layout is handled using Next.js App Router.
- UI is divided into reusable components such as Sidebar, HeroTile, CourseCard, and ActivityTile.
- Data can be fetched from Supabase and rendered through components.

## Challenges Faced
- Setting up Supabase environment variables
- GitHub and Vercel deployment configuration
- Component structure and build error resolution

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=