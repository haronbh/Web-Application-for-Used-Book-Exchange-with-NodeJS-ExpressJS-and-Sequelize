# Web Application for Used Book Exchange

## Description

This project is a responsive web application for exchanging used books. It allows users to register, log in, and manage book exchanges through an intuitive interface. The backend is developed using NodeJS, ExpressJS, Sequelize, and SQLite, while the frontend utilizes Bootstrap and jQuery for a responsive and interactive experience.

## Tools and Technologies

- **Backend**: NodeJS, ExpressJS, Sequelize, SQLite
- **Frontend**: Bootstrap, jQuery, Cropper.js
- **Other**: API Fetch, MVC Model, ORM

## Project Structure and Setup

### Backend Setup

1. **Initialize Project**:
   - Create a new NodeJS project in a folder called `back-end`.
   - Install necessary packages: Sequelize and SQLite3.

2. **Project Structure**:
   - Create folders: `models`, `data`, and `config`.
   - Configure SQLite database in `config` folder.

3. **Define Models**:
   - Create `author.js`, `book.js`, and `authorbook.js` in `models` folder.
   - Establish relationships using Sequelize.

4. **Setup Server**:
   - Create an ExpressJS server in `server.js`.
   - Include database configuration, connect to the database, and sync models.

5. **API Routes**:
   - Add routes to handle CRUD operations for authors and books.
   - Test with frontend.

## Project Features

- User Authentication
- Book Management (CRUD)
- Author Management (CRUD)
- Responsive Design
- Image Upload and Cropping
- LocalStorage
