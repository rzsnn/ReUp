document.getElementById("connectWallet").addEventListener("click", async () => {
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            try {
                const resp = await provider.connect();
                alert("Wallet connected: " + resp.publicKey.toString());
            } catch (err) {
                console.error("Wallet connection failed", err);
            }
        }
    } else {
        alert("Phantom Wallet not found! Please install it.");
    }
});