import Buyers from '../components/Buyers/index';
import Provide from '../components/Provide/index';
import Why from '../components/Why/index';
import Network from '../components/Network/index';
import Clientsay from '../components/Clientsay/index';
import Wallet from '../components/Wallet/connectWallet';



export default function Page2() {
  return (
    <main>
     
      <Wallet />
      <Buyers />
      <Provide />
      <Why />
      <Network />
      <Clientsay />
      
    </main>
  )
}