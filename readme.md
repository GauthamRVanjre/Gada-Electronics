# Gada Electronics

Gada Electronics is a stock management solution designed to address the challenges faced by small businesses in managing their product inventory.

## Table of Contents

- [Gada Electronics](#gada-electronics)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)

## Description

Managing product stock is a common challenge for many small businesses. Gada Electronics aims to simplify this process by providing a comprehensive stock management solution. This project is built to address the following problems:

- **Inefficient product tracking:** Traditional methods of product tracking often involve manual processes, leading to errors and inefficiencies. Gada Electronics automates the tracking process, reducing errors and ensuring accurate stock information.

- **Difficulty in managing inventory levels:** Maintaining optimal inventory levels is crucial for business operations. Gada Electronics provides real-time insights into inventory levels, helping businesses avoid stockouts or overstock situations.

- **Lack of a centralized system for stock information:** Small businesses often struggle with scattered data and lack a centralized system for stock information. Gada Electronics offers a centralized platform where all stock-related data is stored, making it easily accessible and manageable.

- **User-Friendly Interface:** The intuitive and user-friendly interface of Gada Electronics makes it easy for both admin and regular users to navigate through the system.

- **Secure Authentication:** Protect your data with secure authentication mechanisms. The admin section is accessible only to authorized users, ensuring data privacy and integrity.

Gada Electronics is here to streamline these processes, making it easier for businesses to keep track of their products and maintain optimal inventory levels.

## Features

### Admin Section

The admin section is accessible only to authorized admin users. It includes features such as:

- **Product Management:** Add, edit, or remove products from the inventory.
- **Stock Tracking:** Monitor stock levels.
- **User Management:** Manage user accounts and permissions.

### User Section

The user section is accessible to all users and includes features like:

- **Product Search:** Search and view product details.
- **Order Placement:** Place orders for products.
- **Stock Availability:** Check real-time stock availability.

## Technologies Used

- **Frontend:**

  - React.js
  - Typescript
  - Redux Toolkit
  - Tailwind CSS
  - ShadCn

- **Authentication:**

  - Passport Auth

- **Backend:**

  - Node.js
  - Mongoose
  - Express
  - Passport Auth

- **Database:**
  - MongoDB

## Installation

To get started with Gada Electronics, follow these steps:

```bash
git clone https://github.com/your-username/gada-electronics.git
cd gada-electronics
npm install
```

## Usage

### Accessing the Application

**Sample Login Credentials:**

- **Admin User:**

  - username: admin
  - Email: admin@gmail.com
  - Password: admin

- **Non-admin User:**
  - username: test
  - Email: test@gmail.com
  - Password: test123

1. **Admin Section:**

   - Navigate to the admin login page.
   - Log in using your admin credentials.
   - Once logged in, you will have access to the admin dashboard.

2. **User Section:**
   - Users can access the main application page.
   - Explore the product catalog, search for items, filter through items, and add favorite products to the cart for checkout.

### Admin Section Features

1. **Product Management:**

   - Add a new product to the inventory.
   - Edit existing product details, such as name, description, and stock levels.
   - Remove a product from the inventory.

2. **Stock Tracking:**

   - Monitor real-time stock levels for each product.
   - Set up customizable alerts for low stock levels.

3. **User Management:**
   - Add new users with specific roles (admin or non-admin).

### User Section Features

1. **Product Search:**

   - Use the search functionality to find specific products quickly.
   - View detailed information about each product, including stock availability.

2. **Order Placement:**

   - Add products to the shopping cart.
   - Complete the checkout process to place an order.

3. **Stock Availability:**
   - Check real-time stock availability before placing an order.

### Additional Tips

- **Authentication:**

  - Ensure secure authentication by using strong and unique passwords.
  - Regularly update admin credentials for enhanced security.

- **Documentation:**

  - Refer to the provided documentation for in-depth instructions on using specific features.
  - Troubleshoot common issues using the troubleshooting section in the documentation.

- **Feedback:**
  - Provide feedback on your experience using the application.
  - Report any bugs or suggest new features through the designated channels.

### Example Commands

```bash
# Run the application
npm start

# Access admin section
http://localhost:3000/admin

# Access user section
http://localhost:3000/
```
