import React, { useState } from 'react';
import Button from './Button';

const connect = () => {
}

interface ConnectWalletProps {
    onConnect: (wallet: any) => void;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
    const [loading, setLoading] = useState(false);

    const handleConnect = async () => {
        setLoading(true);
        try {
            // Connect to wallet
            const wallet = await connect();
            onConnect(wallet);
        } catch (error) {
            // Handle error
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button onClick={handleConnect} disabled={loading}>
            {loading ? 'Connecting...' : 'Connect Wallet'}
        </Button>
    );
};
