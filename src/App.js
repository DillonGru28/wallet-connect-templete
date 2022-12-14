import { UseWalletProvider } from "use-wallet";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import BlockchainProvider from "./context"
import Home from "./views/home"

function App() {
    return (
        <div className="App">
            <UseWalletProvider
                autoConnect={true}
                connectors={{
                    walletconnect: { rpc: { 1: 'https://main-light.eth.linkpool.io/', 3: 'https://rpc-url', 4002: 'https://ftm-test.babylonswap.finance' } }
                }}>
                <BlockchainProvider>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </BlockchainProvider>
            </UseWalletProvider>
        </div>
    );
}

export default App;
