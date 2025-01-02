import {   useAccount, useConnect, useConnectors, useDisconnect, WagmiProvider } from 'wagmi'
import { createconfig } from './config'
import {  QueryClient , QueryClientProvider} from '@tanstack/react-query'
import './App.css'
import totalSupply from './totalSupply'
import Account from './Account'

function App() {

 const client = new QueryClient();
  return (
    <WagmiProvider config={createconfig}>   
    <QueryClientProvider  client={client}>   
       <ConnectWallet />
       <totalSupply />
       <Account/>
    </QueryClientProvider>
    </WagmiProvider>
  )
}

function ConnectWallet(){
  const connectors = useConnectors();
  const {address} =  useAccount();
  const { disconnect } = useDisconnect();
  const {connect} = useConnect();
 
  if (address) {
    return <div>
      you are connected {address}  
      <button onClick={() => {
        disconnect()
      }}>
        disconnect guys
      </button> 
    </div>     // if use is connected this wil render and if not .. then it will not connect... all buttons to connect will be displayed. 

  }


  return (
    <div>
      {connectors.map(connector => (
      <button onClick={() => {
        connect({connector : connector})
      }}>
        Connect via {connector.name}      
         </button>)
         )}
    </div>
  )
}

export default App
