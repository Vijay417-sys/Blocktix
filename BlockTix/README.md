# BlockTix - Blockchain Ticketing Platform

A decentralized approach to event ticket management using Polygon blockchain and smart contracts.

## Project Overview

BlockTix is a modern ticketing platform that leverages blockchain technology to provide secure, transparent, and efficient ticket management for events. Built on the Polygon network, it enables users to purchase tickets as NFTs, eliminating fraud and providing verifiable ownership.

## Features

- **Blockchain Integration**: Connect your MetaMask wallet to interact with the Polygon network
- **Event Discovery**: Browse and search through various events
- **Secure Ticketing**: Purchase tickets as NFTs with transparent ownership
- **User Authentication**: Sign up and manage your account with Firebase
- **Responsive Design**: Beautiful UI that works across all devices

## Technology Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- Web3.js
- Firebase Authentication
- React Router DOM

### Backend
- Node.js
- Express
- TypeScript
- Firebase Firestore
- JWT Authentication
- Express Rate Limit

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MetaMask browser extension
- Polygon Mumbai testnet configured in MetaMask

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/blocktix.git
cd blocktix
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and fill in your Firebase credentials and other environment variables

4. Start the development server
```bash
npm run dev
```

5. In a separate terminal, start the backend server
```bash
npm run dev:server
```

## Project Structure

```
blocktix/
├── public/            # Static assets
├── src/               # Frontend source code
│   ├── components/    # React components
│   ├── contexts/      # React contexts (Auth, Web3)
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   └── firebase/      # Firebase configuration
├── backend/           # Backend source code
│   ├── server.ts      # Express server
```

## Deployment

### Frontend
The frontend can be deployed to Vercel:

1. Build the project
```bash
npm run build
```

2. Deploy the `dist` folder to Vercel

### Backend
The backend can be deployed to services like Heroku or Firebase Cloud Functions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.