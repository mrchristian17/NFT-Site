import { useEffect, useState } from "react";
import "../App.css";
import StartMinting from "../components/StartMinting";
import InProgressMinting from "../components/InProgressMinting";
import CompletedMinting from "../components/CompletedMinting";
import nftVideo from "../assets/nftvideo.mp4";
import backgroundVideo from "../assets/blue.mp4";
import nftImage from "../assets/Glowing Penguin.png";
// import nftImage from "./assets/Leo's Trex.png";
import ethereumLogo from "../assets/Ethereum-Logo.png";
import { ethers } from "ethers";
import abi from "../contracts/contract.json";
import { Link } from "react-router-dom";

import { ChevronRightIcon, ArrowPathIcon } from "@heroicons/react/20/solid";

// //web3.js
// //ethers.js

// function App() {
//   const [inProgress, setInProgress] = useState(false);
//   const [completed, setCompleted] = useState(false);
//   const [account, setAccount] = useState();
//   const [contract, setContract] = useState();
//   const [hash, setHash] = useState();
//   const [totalSupply, setTotalSupply] = useState();

//   const mint = async () => {
//     const transaction = await contract.safeMint(1, {
//       value: ethers.utils.parseEther("0.01"),
//     });
//     setInProgress(true);
//     setHash(transaction.hash);

//     await transaction.wait(3);

//     setInProgress(false);
//     setCompleted(true);
//   };
//   const getTotalSupply = async () => {
//     const totalSupply = await contract.totalSupply();
//     setTotalSupply(totalSupply.toNumber());
//   };

//   useEffect(() => {
//     if (contract) {
//       getTotalSupply();
//     }
//   }, [contract]);

//   const login = async () => {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       console.log(accounts);
//       setAccount(accounts[0]);

//       const address = "0x1479d35e219b72047a0d56fecc3d396647adcbcc";
//       // only allows to read function, doesn't allow to mint
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(address, abi, signer);
//       setContract(contract);
//     }
//   };

//   const logout = async () => {
//     setAccount(null);
//   };

//   const getState = () => {
//     if (inProgress) {
//       return <InProgressMinting hash={hash} />;
//     }

//     if (completed) {
//       return <CompletedMinting />;
//     }

//     return <StartMinting logout={logout} mint={mint} />;
//   };

//   return (
//     <div className="App">
//       {/* import it, add video component, display it */}
//       <video className="background-video" autoPlay loop muted>
//         <source src={backgroundVideo} type="video/mp4" />
//       </video>
//       <div className="card">
//         <div className="hero">
//           {/* <div className="nft-video"> */}
//           <div className="nft-image">
//             {/* <video width="400" height="400" autoPlay loop muted>
//               <source src={nftVideo} type="video/mp4" />
//             </video> */}
//             <img src={nftImage} alt="nft" width="300" height="300" />
//           </div>
//           <div className="nft-info">
//             <h1>NFT Collection: Zero Series</h1>
//             <div className="minted">
//               {totalSupply ? totalSupply : "--"} minted / 300
//             </div>
//             {account ? (
//               getState()
//             ) : (
//               <div className="actions">
//                 <div className="button" onClick={login}>
//                   CONNECT WALLET
//                 </div>
//                 <div className="button learn-more-button">LEARN MORE</div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="footer">MINTING NOW</div>
//       </div>
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [hash, setHash] = useState();
  const [totalSupply, setTotalSupply] = useState();

  const mint = async () => {
    const transaction = await contract.safeMint(1, {
      value: ethers.utils.parseEther("0.01"),
    });
    setInProgress(true);
    setHash(transaction.hash);

    await transaction.wait(3);

    setInProgress(false);
    setCompleted(true);
  };
  const getTotalSupply = async () => {
    const totalSupply = await contract.totalSupply();
    setTotalSupply(totalSupply.toNumber());
  };

  useEffect(() => {
    if (contract) {
      getTotalSupply();
    }
  }, [contract]);

  const login = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);

      const address = "0x1479d35e219b72047a0d56fecc3d396647adcbcc";
      // only allows to read function, doesn't allow to mint
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, abi, signer);
      setContract(contract);
    }
  };

  const logout = async () => {
    setAccount(null);
  };

  const getState = () => {
    if (inProgress) {
      return <InProgressMinting hash={hash} />;
    }

    if (completed) {
      return <CompletedMinting />;
    }

    return <StartMinting logout={logout} mint={mint} />;
  };
  return (
    <div className="relative isolate overflow-hidden bg-[#1a1919]">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img className="h-20" src={ethereumLogo} alt="Ethereum" />

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            NFT Collection: Zero Series
          </h1>
          <div className="mt-6 text-lg leading-8 text-gray-300">
            {totalSupply ? totalSupply : "--"} minted / 300
          </div>
          {account ? (
            getState()
          ) : (
            <div className="mt-10 flex items-center gap-x-6">
              <div
                onClick={login}
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer transition ease-in hover:scale-110 hover:text-white delay-75"
              >
                CONNECT WALLET
              </div>
              <Link
                to="learn-more"
                className="text-base font-semibold leading-7 text-white cursor-pointer hover:scale-110 transition ease-in delay-75"
              >
                LEARN MORE <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src={nftImage}
              alt="nft"
              className="w-3/5 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
