## :pushpin: Project Title

_Provide a brief description of your project here. Include what problem it solves or what it does._

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

- React
- Axios
- React Router DOM
- Tailwind CSS

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

- Node.js
- Express.js
- MySQL
- Other dependencies...

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
