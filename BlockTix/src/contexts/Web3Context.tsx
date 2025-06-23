import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Web3 from 'web3';

interface Web3ContextType {
  web3: Web3 | null;
  account: string | null;
  balance: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  error: string | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const useWeb3 = (): Web3ContextType => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        return web3Instance;
      } catch (error) {
        setError('Failed to load Web3. Please refresh the page and try again.');
        console.error(error);
      }
    } else {
      setError('MetaMask is not installed. Please install MetaMask to use this application.');
    }
    return null;
  };

  const loadAccount = async (web3Instance: Web3) => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        return accounts[0];
      }
    } catch (error) {
      setError('Failed to connect to your wallet. Please check your MetaMask and try again.');
      console.error(error);
    }
    return null;
  };

  const loadBalance = async (web3Instance: Web3, account: string) => {
    try {
      const balanceWei = await web3Instance.eth.getBalance(account);
      const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether');
      setBalance(parseFloat(balanceEth).toFixed(4));
    } catch (error) {
      setError('Failed to load your balance. Please refresh and try again.');
      console.error(error);
    }
  };

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      const web3Instance = await loadWeb3();
      if (!web3Instance) {
        setIsConnecting(false);
        return;
      }

      const account = await loadAccount(web3Instance);
      if (!account) {
        setIsConnecting(false);
        return;
      }

      await loadBalance(web3Instance, account);
      setIsConnected(true);
    } catch (error) {
      console.error('Connection error:', error);
      setError('Failed to connect to your wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWeb3(null);
    setAccount(null);
    setBalance(null);
    setIsConnected(false);
  };

  // Handle account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          disconnectWallet();
        } else if (accounts[0] !== account) {
          // Account changed
          setAccount(accounts[0]);
          if (web3) {
            loadBalance(web3, accounts[0]);
          }
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [account, web3]);

  // Auto-connect if previously connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const web3Instance = await loadWeb3();
            if (web3Instance) {
              setAccount(accounts[0]);
              await loadBalance(web3Instance, accounts[0]);
              setIsConnected(true);
            }
          }
        } catch (error) {
          console.error('Auto-connect error:', error);
        }
      }
    };
    
    checkConnection();
  }, []);

  const contextValue: Web3ContextType = {
    web3,
    account,
    balance,
    isConnected,
    isConnecting,
    connectWallet,
    disconnectWallet,
    error,
  };

  return <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>;
};

// Add TypeScript interface for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}