import { useAccount } from "wagmi";

export default function Account() {
    const address =useAccount()
    return (
        <div>
            {address ? "you are connected " + address : "you are not connected" }
        </div>
    )
}