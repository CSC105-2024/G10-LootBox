## :pushpin: Project Title

Our project is free loot-box project that want to help the people who is gambling addict that lost his money and many things in life,so play a free gambling in this website can make them fun and also save their money.

---

## :rocket: Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CSC105-2024/G10-LootBox.git
   cd G10-LootBox
   ```

---

## :hammer: Frontend - React

### :wrench: Tech Stack

| Technology                | Description                                                             | Version        |
| ------------------------- | ----------------------------------------------------------------------- | -------------- |
| **React**                 | JavaScript library for building user interfaces using components        | ^19.0.0        |
| **React Router DOM**      | Client-side routing for seamless navigation in single-page applications | ^7.4.0         |
| **Axios**                 | Promise-based HTTP client for API communication                         | ^1.9.0         |
| **Tailwind CSS**          | Utility-first CSS framework for custom UI development                   | ^4.1.3         |
| **Vite**                  | Fast build tool and development server for modern web projects          | ^6.2.0         |
| **TypeScript (optional)** | Type-safe support using React and Vite typings                          | via `@types/*` |


### :rocket: Getting Started - React Client

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The client will be running on [http://localhost:5173](http://localhost:5173) (or similar, depending on your setup).

---

## :wrench: Backend - Node.js

### :hammer_and_wrench: Tech Stack

| Technology                 | Purpose                                               | Version           |
| -------------------------- | ----------------------------------------------------- | ----------------- |
| **React**                  | UI library for building component-based interfaces    | ^19.0.0           |
| **React DOM**              | DOM-specific methods for React rendering              | ^19.0.0           |
| **React Router DOM**       | Routing library for SPA navigation                    | ^7.4.0            |
| **Axios**                  | Promise-based HTTP client for API requests            | ^1.9.0            |
| **React Hook Form**        | Performant form management and validation             | ^7.54.2           |
| **Zod**                    | Type-safe schema validation and parsing               | ^3.24.2           |
| **Tailwind CSS**           | Utility-first CSS framework for custom UI design      | ^4.1.3            |
| **@tailwindcss/vite**      | Tailwind integration plugin for Vite                  | ^4.0.15           |
| **Vite**                   | Fast development server and build tool                | ^6.2.0            |
| **ESLint**                 | Linting tool for code quality and consistency         | ^9.21.0           |
| **React Icons**            | Icon library for React apps                           | ^5.5.0            |
| **TypeScript Support**     | React types via `@types/react` and `@types/react-dom` | ^19.0.x           |
| **PostCSS & Autoprefixer** | CSS processing and vendor prefixing for Tailwind      | ^8.5.3 / ^10.4.21 |


### :electric_plug: API Endpoints

| Method | Endpoint                       | Description                              | Response Type     |
|--------|--------------------------------|------------------------------------------|-------------------|
| GET    | `/inventory/:username/keys`    | Get all keys owned by a specific user    | `UserKey[]`       |
| GET    | `/inventory/items`             | Get all base inventory items             | `Item[]`          |
| GET    | `/user/:username`              | Get user info by username                | `User`            |
| GET    | `/user/:username/pictures`     | Get user's profile and background pics   | `UserPic`         |
| GET    | `/user/:username/inventory`    | Get detailed inventory for user          | `ProfileItem[]`   |
| POST   | `/shop/buy`                    | Buy a key for a user                     | `null`            |
| POST   | `/shop/sell`                   | Sell an item from a user's inventory     | `null`            |
| POST   | `/summon`                      | Summon an item using a key               | `SummonResult`    |
| POST   | `/user/signup`                 | Create a new user account                | `User`            |
| POST   | `/user/login`                  | Log in an existing user                  | `User`            |
| GET    | `/user/name/:username`         | Check availability or info for username  | `User`            |
| DELETE | `/user/delete/:username`       | Delete a user's account                  | `null`            |
| GET    | `/user/pic/:username`          | Get user's profile and background images | `UserPic`         |
| POST   | `/user/upload-images`          | Upload profile and background images     | `null`            |
| GET    | `/user/profile/:username`      | Get full user profile data               | `User`            |


_Add, modify, or remove endpoints based on your project._

### :rocket: Getting Started - Node.js Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```
   PORT=5000
   DATABASE_URL="file:./dev.db"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on [http://localhost:5000](http://localhost:5000)
