# Netflix Movies 🎬

A full-stack Netflix clone built with React, Node.js, Express, MongoDB, and Tailwind CSS. Features user authentication, movie/TV show browsing, search functionality, and a responsive design.

![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-red?style=for-the-badge&logo=netflix)

## 🚀 Features

- **User Authentication** - Secure signup, login, and logout with JWT tokens
- **Browse Content** - Discover trending movies and TV shows
- **Search Functionality** - Search for movies, TV shows, and people
- **Search History** - Keep track of your search history
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Video Streaming** - Watch trailers and content
- **Protected Routes** - Authentication-based route protection

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **React Player** - Video player

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cookie Parser** - Cookie handling
- **Nodemon** - Development server

### External APIs
- **TMDB API** - Movie and TV show data

## 📁 Project Structure

```
netflix/
├── backend/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── envVars.js         # Environment variables
│   ├── controllers/
│   │   ├── auth.controller.js # Authentication logic
│   │   ├── movie.controller.js # Movie API logic
│   │   ├── tv.controller.js   # TV show API logic
│   │   └── search.controller.js # Search functionality
│   ├── middleware/
│   │   └── protectRoute.js    # Authentication middleware
│   ├── models/
│   │   └── user.model.js      # User schema
│   ├── routes/
│   │   ├── auth.route.js      # Auth routes
│   │   ├── movie.route.js     # Movie routes
│   │   ├── tv.route.js        # TV routes
│   │   └── search.route.js    # Search routes
│   ├── services/
│   │   └── tmdb.service.js    # TMDB API integration
│   ├── utils/
│   │   └── generateToken.js   # JWT token generation
│   └── server.js              # Express server setup
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── pages/             # Page components
│   │   ├── store/             # State management
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # App entry point
│   ├── package.json
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── postcss.config.js      # PostCSS configuration
│   └── vite.config.js         # Vite configuration
├── .env                       # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rahul-tech24/netflix.git
   cd netflix
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   TMDB_API_KEY=your_tmdb_api_key
   ```

5. **Get TMDB API Key**
   - Visit [TMDB](https://www.themoviedb.org/)
   - Create an account and get your API key
   - Add it to your `.env` file

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

#### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/authCheck` - Check authentication status

### Movies
- `GET /api/v1/movie/trending` - Get trending movies
- `GET /api/v1/movie/:id/trailers` - Get movie trailers
- `GET /api/v1/movie/:id/details` - Get movie details
- `GET /api/v1/movie/:id/similar` - Get similar movies
- `GET /api/v1/movie/:category` - Get movies by category

### TV Shows
- `GET /api/v1/tv/trending` - Get trending TV shows
- `GET /api/v1/tv/:id/trailers` - Get TV show trailers
- `GET /api/v1/tv/:id/details` - Get TV show details
- `GET /api/v1/tv/:id/similar` - Get similar TV shows
- `GET /api/v1/tv/:category` - Get TV shows by category

### Search
- `GET /api/v1/search/person/:query` - Search for people
- `GET /api/v1/search/movie/:query` - Search for movies
- `GET /api/v1/search/tv/:query` - Search for TV shows
- `GET /api/v1/search/history` - Get search history
- `DELETE /api/v1/search/history/:id` - Delete search history item

## 🔐 Authentication

The application uses JSON Web Tokens (JWT) for authentication:
- Tokens are stored in HTTP-only cookies for security
- Protected routes require authentication
- Automatic token verification on each request

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Responsive design** for all screen sizes
- **Dark theme** with Netflix-inspired color scheme
- **Custom animations** and transitions

## 🌟 Key Features Implementation

### State Management
- **Zustand** for lightweight state management
- **Auth store** for user authentication state
- **Content store** for content type selection

### Error Handling
- Comprehensive error handling on both frontend and backend
- User-friendly error messages
- Toast notifications for user feedback

### Security
- Password hashing with bcryptjs
- HTTP-only cookies for token storage
- Protected API routes
- Input validation and sanitization

## 🚀 Deployment

### Using Railway/Heroku

1. **Set environment variables** in your deployment platform
2. **Build command**: `npm install && cd frontend && npm install && npm run build`
3. **Start command**: `npm start`

### Using Vercel (Frontend) + Railway (Backend)

1. Deploy backend to Railway
2. Deploy frontend to Vercel
3. Update API endpoints in frontend to point to your backend URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie and TV show data
- [Netflix](https://netflix.com) for design inspiration
- [React](https://reactjs.org/) and [Express](https://expressjs.com/) communities

## 📧 Contact

Rahul - [@Rahul-tech24](https://github.com/Rahul-tech24)

Project Link: [https://github.com/Rahul-tech24/netflix](https://github.com/Rahul-tech24/netflix)

---

⭐ If you found this project helpful, please give it a star!