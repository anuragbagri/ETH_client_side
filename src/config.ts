import { createConfig , http} from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected } from "wagmi";

export const createconfig = createConfig({
    chains : [mainnet],
    transports : {
        [mainnet.id] : http("https://eth-sepolia.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs")
    },
    connectors : [injected()],         // this is the connector that helps inejct code to connect to wallet of the webpage 
})