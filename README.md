# Multi-Product Shopcart

## Description

This is a multi-product shopping cart application built with Node.js, Express, TypeScript, and PostgreSQL. The application allows users to register, login, browse products, add products to their cart, and place orders.

## Project Structure

```
multi-product-shopcart/
  server/
  ├── src/
  │   ├── app.ts                 # Create and configure Express app (middlewares, routes)
  │   ├── server.ts              # Start the server (listen to port)
  │
  │   ├── controllers/           # Handle HTTP requests and responses
  │   │   ├── auth.controller.ts
  │   │   ├── product.controller.ts
  │   │   ├── cart.controller.ts
  │   │   └── order.controller.ts
  │
  │   ├── services/              # Business logic and interaction with DB
  │   │   ├── auth.service.ts
  │   │   ├── product.service.ts
  │   │   ├── cart.service.ts
  │   │   └── order.service.ts
  │
  │   ├── models/                # (PostgreSQL) or Prisma models
  │   │   ├── User.ts
  │   │   ├── Product.ts
  │   │   ├── Cart.ts
  │   │   └── Order.ts
  │
  │   ├── routes/                # Express routers
  │   │   ├── auth.routes.ts
  │   │   ├── product.routes.ts
  │   │   ├── cart.routes.ts
  │   │   └── order.routes.ts
  │
  │   ├── middlewares/           # Custom middleware (auth, error handling)
  │   │   ├── authMiddleware.ts
  │   │   └── errorHandler.ts
  │
  │   ├── utils/                 # Helper functions (e.g., generate JWT, validate input)
  │   │   ├── jwt.ts
  │   │   └── validator.ts
  │
  │   └── config/                # DB config, env config
  │       ├── database.ts
  │       └── env.ts
  │
  ├── .gitignore 
  ├── .env                       # Environment variables (DB_URL, JWT_SECRET)
  ├── tsconfig.json              # TypeScript config
  ├── package.json
  └── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```
     DB_URL=postgresql://localhost:5432/mydatabase
     JWT_SECRET=your_jwt_secret
     ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Build the project:
   ```
   npm run build
   ```

6. Start the production server:
   ```
   npm start
   ```

## Project Dependencies

- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- JSON Web Token (JWT)
- bcryptjs
- body-parser
- cors

## License

This project is licensed under the MIT License.
