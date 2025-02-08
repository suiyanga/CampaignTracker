# CampaignTracker

CampaignTracker is a full‑stack application designed to help influencers discover and submit content for marketing campaigns. The project features a modern **Next.js** frontend and a robust **NestJS** backend, with **MongoDB** (Atlas or local) as the database. Built entirely with TypeScript and styled with Tailwind CSS, CampaignTracker provides a sleek, responsive user interface along with a secure, scalable server‑side API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Sample Data Insertion](#sample-data-insertion)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

CampaignTracker is designed for influencers to:
- View available marketing campaigns.
- Get detailed information on each campaign.
- Submit their campaign content (e.g., links to social media posts).

The application uses a **monorepo** structure, where:
- The **frontend** is built with Next.js (React, TypeScript, Tailwind CSS) to deliver a modern, responsive user experience.
- The **backend** is built with NestJS (TypeScript, Mongoose) to provide RESTful API endpoints for retrieving campaign data and handling submissions.
- **MongoDB** is used as the database (via MongoDB Atlas or a local installation).

## Technologies Used

- **Frontend:**
  - [Next.js 13](https://nextjs.org/) with the App Router
  - React
  - TypeScript
  - Tailwind CSS
- **Backend:**
  - [NestJS](https://nestjs.com/)
  - TypeScript
  - Mongoose (for MongoDB integration)
- **Database:**
  - MongoDB (either via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local installation)
- **Version Control & Deployment:**
  - Git & GitHub

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (v6 or later)
- A MongoDB database (using MongoDB Atlas is recommended for production or shared development)
- Git

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/suiyanga/CampaignTracker.git
cd CampaignTracker
 ```

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/suiyanga/CampaignTracker.git
   cd CampaignTracker
   ```

2. **Install Dependencies for the Frontend**

   ```bash
   cd influencer-tracker-frontend
   npm install
   ```

3. **Install Dependencies for the Backend**

   Open a new terminal (or use the same one) and run:

   ```bash
   cd ../influencer-tracker-backend
   npm install
   ```

4. **Configure Environment Variables**

   - In the backend folder, create a `.env` file with your MongoDB connection string. For example:

     ```env
     MONGODB_URI=mongodb+srv://campaign:augustine@campaigntracker.fl2pz.mongodb.net/InfluencerTracker?retryWrites=true&w=majority&appName=CampaignTracker
     ```

5. **Start the Application**

   - **Backend:**  
     In the `influencer-tracker-backend` folder, run:
     ```bash
     npm run start:dev
     ```
   - **Frontend:**  
     In the `influencer-tracker-frontend` folder, run:
     ```bash
     npm run dev
     ```

---
