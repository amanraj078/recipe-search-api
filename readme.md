# Recipe Search API

A Node.js API that allows users to sign up, log in, search for recipes by ingredients, and manage favorite recipes using JWT authentication. This project uses external recipe APIs for fetching recipe data and MongoDB for user management and favorites storage.

## Features

- User signup and login with JWT authentication.
- Update user profile.
- Search for recipes based on ingredients via a third-party API (e.g., Spoonacular).
- Add and remove recipes from favorites.
- Retrieve a list of favorite recipes.
- Input validation using custom validation logic.
- Fully documented API.

## Technology Stack

- **Node.js**: Backend server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Token)**: Used for securing the API endpoints.
- **bcrypt**: Password hashing for user authentication.
- **axios**: HTTP client for calling third-party recipe API.
- **Swagger / Postman**: API documentation.

## Installation

1. Clone the repository:
   ```git clone https://github.com/amaraj078/recipe-search-api.git```

2. Navigate to the project directory:
   ```cd recipe-search-api ```

3.Install the dependencies:
    ```npm install```

4. Create a .env file in the root directory and configure the following environment variables:
    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/recipe-app
    JWT_SECRET=your_jwt_secret
    SPOONACULAR_API_KEY=your_spoonacular_api_key
    ``` 

5. Start the Server:
    ```npm start```

The server will start on http://localhost:5000.

## How to use
1. Register or login using the /api/auth/signup or /api/auth/login endpoints.
2. After successful login, you'll receive a JWT token. Use this token to authenticate further requests by adding it to the Authorization header:
```Authorization: Bearer <your_jwt_token>```

3.Use the recipe search endpoint to search for recipes by ingredients.

4.Add or remove recipes from your favorites using the respective endpoints.

## Postman Documentation
You can import the provided Postman collection to easily interact with the API:

[Download Postman Collection](https://web.postman.co/workspace/774db83b-64e5-41cc-87ea-5a423a970a5c/documentation/27369418-b04f9c3e-f8b3-44f3-aa60-640e9e9aef15)

