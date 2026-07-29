# MERN E-Commerce Platform


A full-stack MERN E-Commerce Platform built using React, Vite, Node.js, Express.js and MongoDB. The application provides authentication, product management, shopping cart, order management and an AI-powered product assistant using Google's Gemini API.


---


## Features


### Authentication


- User Registration
- User Login
- JWT Authentication
- HTTP-only Cookie Authentication
- Protected Routes


### Product Management


- Product CRUD
- Category CRUD
- Product Catalog
- Product Details


### AI Integration


- Gemini API
- AI Product Assistant
- Product Description Generation


### Security


- Helmet
- CORS
- Compression
- Rate Limiting
- Cookie Parser


---


## Technology Stack


### Frontend


- React
- Vite
- React Router DOM
- Axios
- CSS


### Backend


- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser


### AI


- Google Gemini API


---


## Folder Structure


```
client/
server/
```


---


## Installation


### Clone Repository


```bash
git clone <repository-url>
```


### Install Backend


```bash
cd server


npm install
```


### Install Frontend


```bash
cd ../client


npm install
```


---


## Run Backend


```bash
cd server


npm run dev
```


---


## Run Frontend


```bash
cd client


npm run dev
```


---


## Production Build


```bash
cd client


npm run build
```


---


## Environment Variables


### Backend


```
PORT=


NODE_ENV=


CLIENT_URL=


MONGODB_URI=


JWT_SECRET=


JWT_EXPIRES_IN=


COOKIE_SECRET=


GEMINI_API_KEY=
```


### Frontend


```
VITE_API_BASE_URL=
```


---


## Deployment


### Backend


- Render


### Frontend


- Vercel


### Database


- MongoDB Atlas


---


## License


MIT