# Top-Flop — Backend

Node.js + Express 5 + Sequelize/PostgreSQL API for Top-Flop.

## Prerequisites

- Node.js
- Docker (for running PostgreSQL)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a `.env` file** at the repo root with your Postgres credentials:

   ```
   POSTGRES_DB=top_flop
   POSTGRES_USER=top_flop
   POSTGRES_PASSWORD=top_flop
   ```

3. **Start PostgreSQL** (requires Docker to be running):

   ```bash
   docker-compose up -d
   ```

4. **Create the database tables**

   ```bash
   node src/sequelize.js
   ```

   This connects to Postgres and syncs every model registered in `src/models/index.js` (`users`, `teams`, `team_members`, `lobbies`, `participants`, `votes`).

5. **Run the server**

   ```bash
   node src/app.js
   ```

   The API is available at `http://localhost:3000`.
