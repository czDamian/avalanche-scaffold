# Avalanche Scaffold

This is a starter template for building decentralized applications (dApps) on the Avalanche blockchain. It comes pre-configured with RainbowKit for wallet connections, Wagmi for interacting with smart contracts, and Next.js for the frontend.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/czDamian/avalanche-scaffold.git
    cd avalanche-scaffold
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## File Structure

### `Provider.jsx`

This is a crucial file that sets up the context for your entire dApp. It wraps the application with the necessary providers from RainbowKit and Wagmi.

-   **`WagmiProvider`**: Provides the Wagmi client to your app, allowing you to interact with the blockchain.
-   **`QueryClientProvider`**: Provides the React Query client, which is used by Wagmi for caching and data fetching.
-   **`RainbowKitProvider`**: Provides the RainbowKit UI components for wallet connections.

You'll need to configure your `projectId` from WalletConnect Cloud in this file.

### `components/`

This directory contains the reusable React components for your dApp.

-   **`Home.jsx`**: The main component that brings together the other components. It includes the `ConnectButton` from RainbowKit and the `ReadData`, `ReadData2`, and `WriteData` components.

-   **`ReadData.jsx`**: A simple component that demonstrates how to read data from the blockchain using the `useAccount` hook from Wagmi. It displays the connected user's wallet address.

-   **`ReadData2.jsx`**: This component shows a more advanced example of reading data from a smart contract. It uses the `useReadContract` hook from Wagmi to fetch the token name, balance, and total supply from an ERC20 token contract.

-   **`WriteData.jsx`**: This component demonstrates how to write data to the blockchain by sending a transaction. It uses the `useWriteContract` hook from Wagmi to transfer a token to another address.

-   **`tokenAbi.js`**: This file contains the ABI (Application Binary Interface) and address of the smart contract you want to interact with. You'll need to replace the placeholder address and ABI with your own contract's information.

## Learn More

To learn more about the technologies used in this scaffold, see the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [RainbowKit Documentation](https://www.rainbowkit.com/docs) - learn about RainbowKit.
-   [Wagmi Documentation](https://wagmi.sh/) - learn about Wagmi hooks and API.
-   [Avalanche Documentation](https://docs.avax.network/) - learn about the Avalanche network.
