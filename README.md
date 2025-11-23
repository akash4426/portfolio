# Portfolio Application

A full-stack portfolio application built with React (Vite) and Node.js (Express).

## Project Structure

-   `client/`: Frontend React application.
-   `server/`: Backend Node.js/Express application.

## Prerequisites

-   Node.js installed.
-   Gmail credentials for the contact form (add to `server/.env`).

## How to Run

### 1. Setup Environment Variables
Ensure `server/.env` has the following:
```env
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password
PORT=5001
```

### 2. Start the Server
Open a terminal and run:
```bash
cd server
npm install
node index.js
```
The server will start on **http://localhost:5001**.

### 3. Start the Client
Open a **new** terminal and run:
```bash
cd client
npm install
npm run dev
```
The client will start on **http://localhost:5173**.

## Features
-   Responsive UI with Framer Motion animations.
-   Contact form with email integration (Nodemailer).
