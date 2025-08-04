# Island Grill - Restaurant Website Product Specification

## Overview

**What:** This project will be a web application that serves as the digital landing page for my grandfather's restaurant. Visitors can explore the restaurant's story, see its menu offerings, meet the staff, and place an order for pickup. This website will combine storytelling with interactivity to create a welcoming experience that reflects the culture and personality of the restaurant.

## User Personas

| Persona | Goals | Motivators | Challenges | Info Sources |
|---------|-------|------------|------------|--------------|
| **John** (24, Male, Tech-savvy, $60K/yr, Master's Degree) | Find a new place to eat that fits his tastes | Hunger, exploring new food spots | Overwhelmed by too many choices | Google, Yelp |
| **Sarah** (45, Female, Less tech-savvy, $80K/yr, Bachelor's Degree) | Take the family somewhere new for dinner | Wants a reliable and welcoming experience | Not sure what's around, not a heavy internet user | Word of mouth |
| **Jason** (20, Male, Very tech-savvy, $80K/yr, HS Diploma) | Get a quick and consistent bite after work | Speed, price, taste | Doesn't know what's on the menu | Instagram, Maps, TikTok |

## User Journey Map

### 🗺️ User Journey Map – "John" the Food Explorer

| Stage | User Action | User Thought/Feeling | Opportunity/Feature |
|-------|-------------|---------------------|-------------------|
| **1. Discover** | John is hungry and opens Google to search for "best Caribbean food near me." | "I want something new but legit — nothing corporate." | - SEO-friendly page title and meta description<br>- Google Business link with website URL |
| **2. Explore** | He clicks your website link. The homepage loads with high-quality visuals and a brief intro. | "This looks dope — feels like a real family spot." | - Eye-catching landing page<br>- Tagline/story snippet to hook the user |
| **3. Check Menu** | He clicks into the menu page to see what food is offered. | "Jerk chicken? Plantains? Let's go!" | - Clean, readable menu layout<br>- Food pics + descriptions<br>- Optional filter (e.g. meat, vegetarian) |
| **4. Learn More** | Curious about the story, he visits the About page. | "Oh this has history — that's fire." | - Family story or timeline<br>- Photos of the space and people |
| **5. Order** | He heads to the Order page and submits a form for pickup. | "Hope this is easy. I'm starving." | - Simple, intuitive order form<br>- Confirmation message or screen |
| **6. Share** | After eating, he posts a photo on Instagram and tags the restaurant. | "Y'all need to try this place." | - Optional: social links or embedded feed<br>- Consistent branding for easy recognition |

## Product Requirements

### ✅ Must-Haves
- As a user, I can view all the available foods served at the restaurant.
- As a user, I can learn about the restaurant's history, location, and dining experience.
- As a user, I can get to know the people who work at the restaurant.
- As a user, I can place an order using a form.

### 🔐 Authentication Must-Haves
- As a user, I can create an account with my email and password.
- As a user, I can log in to my account using my email and password.
- As a user, I can log out of my account.
- As a user, I can view my order history when I'm logged in.
- As a user, I can save my contact information for faster future orders.
- As a user, I can reset my password if I forget it.

### 💡 Nice-to-Haves
- As a user, I can view the restaurant's social media links.
- As a user, I can read customer reviews or ratings.
- As a user, I can take a virtual tour (via image gallery or video).
- As a user, I can receive email confirmations for my orders.
- As a user, I can save favorite menu items to my profile.
- As a user, I can receive loyalty rewards for frequent orders.

## Technical Requirements & Feature Descriptions

| Feature | Description |
|---------|-------------|
| **🏠 Landing Page** | Includes buttons or nav links that route to Menu, About, and Order pages. |
| **🍽️ Menu Page** | Displays images and descriptions of the food offerings. |
| **👨‍🍳 About Page** | Highlights the restaurant's story, decor, and team. |
| **🧾 Order Page** | Contains a form where users can input food selections, pickup time, and contact info. Requires authentication for order history tracking. |
| **🔐 Authentication System** | JWT-based authentication with secure session management. Includes login, signup, logout, and password reset functionality. |
| **👤 User Profile** | Displays user information, order history, and saved preferences. Requires authentication to access. |

## Authentication Technical Requirements

### Backend Authentication
- **JWT Implementation**: Use JSON Web Tokens for stateless authentication
- **Session Management**: Implement secure session handling with refresh tokens
- **Password Security**: Hash passwords using bcrypt with salt rounds
- **Token Storage**: Store JWT tokens securely in HTTP-only cookies
- **Middleware**: Create authentication middleware for protected routes
- **Error Handling**: Proper error responses for authentication failures

### Frontend Authentication
- **Context Management**: React context for user authentication state
- **Protected Routes**: Route guards for authenticated-only pages
- **Token Management**: Secure token storage and automatic refresh
- **Form Validation**: Client-side validation for login/signup forms
- **Loading States**: Loading indicators during authentication processes

## Deployment Plan

This project requires a full-stack deployment with both frontend and backend services. Frontend can be deployed on Vercel/Netlify, backend on Heroku/Railway/DigitalOcean.

## Next Steps

| Task | Priority | Who | Notes |
|------|----------|-----|-------|
| Refine User Journey Map | High | Caleb | Can use a tool like LucidChart, Miro, or Google Drawings |
| Finish basic wireframes (mobile + desktop) | High | Caleb | We've done this before — start with layout blocks for each page |
| Build layout with React or vanilla HTML/CSS | Medium | Caleb | Start with one page at a time |
| Add interactivity (page routing + form) | Medium | Caleb | React Router if using React |
| Implement authentication system | High | Caleb | JWT + sessions, user management |
| Prep for deployment | Medium | Caleb + Instructor | Pick a platform and deploy MVP | 
