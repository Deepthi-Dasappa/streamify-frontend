# Tech Stack

## Front End

### React.js and Core Dependencies

React (App Router + Server Actions) - For SSR, ISR and API routes
React - For building UI components and API routes
React DOM - React rendering for the DOM

### UI and Styling

ShadCn - Style UI Components
Tailwind CSS - For rapid styling and responsive design
Postcss - Required for Tailwind processing
Autoprefixer - Ensures CSS compatibility

### State Management

Redux toolkit - State management for global user/auth state
React Redux - Connection between react and redux
Zustand - Lightweight state management for UI like video control

### API data fetching and Backend Communication

React Query - For efficient API data fetching and caching
Next-Auth - Authentication handling (Google, Credentials, JWT etc.)
MongoDB - MongoDB driver for database connection

### Animations and UI Enhancements

Framer Motion - For animations, pager transitions, hover effects

### Video Playback and Streaming

Plyr - For video playback
React Player - For multiple formats like MP4 etc.

### Deployment and Performance Optimization

EC2 - For deployment
.env - Managing environment variables

## Back End

Node Js with Express js - For building API
Database -> Mongo DB - For flexible video meta data storage

## Authentication and Security

NextAuth.Js - For Authentication
JWT - For session management
RBAC - Role Based Access Control

## Deployment

EC2 - For Front End + Back End

## Streaming and Video Optimization

Vimeo APIs - For Video Processing and Delivery
Live Streaming - https based livestreaming for optimizing the video playbacks

## Features

### Light API Handling using Next.Js

Fetching Videos ("/api/v1/movies"), (/api/v1/tv-shows)
Basic Authentication ("/api/v1/auth")
UI related data (watch history, likes, comments)

### Heavy Backend Processing

User Profiles
Payment processing (Stripe)
HLS (Video encoding and streaming)
