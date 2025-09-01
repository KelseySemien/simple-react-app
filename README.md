# React Simple App — Login + List + Detail

This is a small React application built to demonstrate:

- Functional components and Hooks
- Context API for simple authentication
- Fetching data from a public REST API (`jsonplaceholder.typicode.com`)
- Client-side routing with React Router
- Responsive UI with custom CSS 
- One unit test using Jest + React Testing Library

## Pages
1. **Login** — Phone input with basic validation (`+254` required). Mock login accepts `+254712345678`.
2. **Main** — List of posts fetched from the public API with a live search.
3. **Detail** — Shows full post details and author info; back link to main page.

## Setup

```bash
npx create-react-app react-simple-app
cd react-simple-app
npm install react-router-dom
# Replace src/ with provided files
npm start
