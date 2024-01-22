# Task Manager App

Task Manager is a web application designed to help you efficiently manage your tasks. This project consists of a Laravel backend for handling data and a Next.js frontend for providing a user-friendly interface.

## Getting Started

### Backend Initialization (Laravel)

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

2. **Navigate to the Back-end Directory and Install Dependencies:**

   ```bash
   cd api
   ```
   (Make sure you are at "Task-Manager/api")
   ```bash
   composer install

4. **Create .env file:**
   Create a copy of the .env.example file and name it .env. Update the database credentials and any other necessary configurations.

5. **Generate Application Key:**
   
   ```bash
   php artisan key:generate

6. **Migrate Database:**
   
   ```bash
   php artisan migrate
7. **Seed Database (Optional):**
   If you want to populate the database with sample data, run:

   ```bash
   php artisan db:seed --class=dbSeeder

8. **Start Laravel Development Server:**

   ```bash
   php artisan serve
   ```
    The backend server will be available at http://localhost:8000.
   
### Frontend Initialization (Next.js)

1. **Navigate to the Frontend Directory:**

   ```bash
   cd client
   ```
   (Make sure you are at "Task-Manager/client")

2. **Install Dependencies:**

   ```bash
   npm install

3. **Start Next.js Development Server:**

   ```bash
   npm run dev
   ```
   The frontend server will be available at http://localhost:3000.

### Usage

1. Access the Task Manager application by opening your browser and navigating to http://localhost:3000.

2. Start managing your tasks by creating, updating, and deleting them.
