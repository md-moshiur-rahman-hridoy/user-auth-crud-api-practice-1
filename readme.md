# User Authentication and CRUD API

This is a simple API project built with TypeScript and Express.js that provides user registration, login, and CRUD (Create, Read, Update, Delete) operations on user data. It can serve as a foundation for building more complex web applications that require user management.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- MongoDB (or another database of your choice) installed and running.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/md-moshiur-rahman-hridoy/user-auth-crud-api-practice-1.git

   ```

2. Configure Environment Variables:

   Create a .env file in the root directory based on the .env.example template.
   Provide values for environment variables like PORT, DATABASE_URL, and SECRET_KEY.

#You can now access the API at http://localhost:PORT, where PORT is the value you set in your .env file.

#API Endpoints
POST /auth/register: Register a new user.
POST /auth/login: Log in as an existing user.
GET /users: Get all users.
GET /users/:id: Get user details by ID.
PATCH /users/:id: Update user details.
DELETE /users/:id: Delete a user account.
#Endpoint Details
#POST /auth/register:

`Registration endpoint.`
Use this endpoint to create a new user.
Example: http://localhost:8000/auth/register
POST /auth/login:

`Login endpoint.`
Use this endpoint to log in as an existing user.
Example: http://localhost:8000/auth/login
GET /users:

`Retrieve all users.`
Example: http://localhost:8000/users
GET /users/:id:

`Retrieve user details by ID.`
Example: http://localhost:8000/users/1
PUT /users/:id:

`Update user details by ID.`
Example: http://localhost:8000/users/1
DELETE /users/:id:

`Delete a user account by ID.`
Example: http://localhost:8000/users/1

`For detailed information about the request and response formats, refer to the API documentation in the code.`

#Technologies Used
-TypeScript
-Express.js
-MongoDB (or your database of choice)
-Other libraries as specified in the package.json file
