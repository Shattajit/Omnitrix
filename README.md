# E-Commerce Application

## Overview

This project is a full-stack e-commerce application built with Node.js, Express, and MongoDB. It features user authentication, product management, category management, and integration with the Braintree payment gateway.

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
