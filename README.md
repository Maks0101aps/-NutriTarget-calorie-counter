# NutriTarget - Calorie Counter Application

A comprehensive nutrition tracking application that helps users monitor their food intake, track calories, and achieve their health goals.

## Features

- User authentication and profile management
- Food database with nutritional information
- Meal tracking and daily calorie monitoring
- Nutritional statistics and progress visualization
- Personalized health and fitness goals

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based authentication

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- PostgreSQL database

### Environment Setup

Create `.env` files in both the frontend and backend directories:

**Backend (.env)**:
```
DATABASE_URL="postgresql://username:password@localhost:5432/nutritarget"
JWT_SECRET="your_jwt_secret_key"
JWT_EXPIRES_IN="7d"
PORT=5000
```

**Frontend (.env)**:
```
VITE_API_URL=http://localhost:5000/api
```

## Installation & Setup

### Windows

1. Clone the repository:
```bash
git clone https://github.com/your-username/NutriTarget-calorie-counter.git
cd NutriTarget-calorie-counter
```

2. Install dependencies for backend:
```bash
cd backend
npm install
```

3. Set up the database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. Start the backend server:
```bash
npm run dev
```

5. In a new terminal, install frontend dependencies:
```bash
cd ../frontend
npm install
```

6. Start the frontend development server:
```bash
npm run dev
```

### macOS & Linux

1. Clone the repository:
```bash
git clone https://github.com/your-username/NutriTarget-calorie-counter.git
cd NutriTarget-calorie-counter
```

2. Install dependencies for backend:
```bash
cd backend
npm install
```

3. Set up the database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. Start the backend server:
```bash
npm run dev
```

5. In a new terminal, install frontend dependencies:
```bash
cd ../frontend
npm install
```

6. Start the frontend development server:
```bash
npm run dev
```

## Docker Setup (Alternative)

If you prefer using Docker:

1. Make sure Docker and Docker Compose are installed
2. Run:
```bash
docker-compose up
```

## Accessing the Application

- Frontend: http://localhost:5173 (or the port shown in your terminal)
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## API Documentation

The backend API endpoints are organized as follows:

- `/api/auth` - Authentication (login, register)
- `/api/users` - User profile management
- `/api/food` - Food items database
- `/api/meals` - Meal tracking
- `/api/stats` - Nutritional statistics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
