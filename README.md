# E-Commerce Application

## Overview

This project is a full-stack web application with a React frontend and a Node.js/Express.js backend. It includes features for user authentication, product management, category management, and integration with the Braintree payment gateway.

## Features

- **User Authentication**: Register, login, and update profiles. Secure routes with JWT and role-based access.
- **Category Management**: Create, update, delete, and list product categories.
- **Product Management**: CRUD operations for products, including image upload, filtering, and pagination.
- **Order Management**: Place orders, view order details, and update order status.
- **Payment Integration**: Process payments using Braintree.
- **Search and Filters**: Search products by keyword and filter by category and price range.

## Technologies Used

- **Frontend**: React (assumed from the client folder)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Braintree
- **File Upload**: Formidable
- **Environment Variables**: dotenv

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB
- Braintree account (for payment processing)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies**

   ```bash
   npm install
   
3. **Create a .env file**
   Create a .env file in the root directory and add the following environment variables:

   ```bash
   PORT=<your-port>
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   BRAINTREE_MERCHANT_ID=<your-braintree-merchant-id>
   BRAINTREE_PUBLIC_KEY=<your-braintree-public-key>
   BRAINTREE_PRIVATE_KEY=<your-braintree-private-key>

4. **Run the application**

   ```bash
   npm start
The server will be running on http://localhost:8080 (or your specified port).

## API Endpoints
Authentication

- POST /api/v1/auth/register: Register a new user.
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Braintree
- **File Upload**: Formidable
- **Environment Variables**: dotenv
