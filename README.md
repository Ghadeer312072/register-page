# User Authentication System

A web application implementing user registration, login, and authentication flow using React, Vite, and Tailwind CSS. Features persistent user sessions through browser localStorage and responsive UI components.

## Features

- **Reusable Layout Component**: Consistent header/footer across all pages
- **Landing Page**: Dynamic redirect based on authentication status
- **Form Validation**:
  - Required field checks
  - Password confirmation matching
  - Error message handling
- **User Session Management**:
  - LocalStorage persistence for registered users
  - Automatic login state detection
- **Responsive Navigation**:
  - Conditional rendering of auth buttons
  - Dynamic header updates post-login
- **Security Considerations**:
  - Client-side credential validation

## Technologies

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+
- **Routing**: React Router DOM 6+
- **Form Handling**: HTML5 Validation

## Screenshots

![Landing Page](./screenshots/home.png)
![Landing Page](./screenshots/homebeforlogin.png)
![Registration Page](./screenshots/signup.png)
![Login Page](./screenshots/signin.png)
![Home Page](./screenshots/homewithUser.png)
