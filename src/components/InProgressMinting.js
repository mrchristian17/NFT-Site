import React from "react";
import ReactLoading from "react-loading";

const InProgressMinting = (props) => {
  const checkEtherscan = () => {
    console.log(props.hash);
    const url = "https://goerli.etherscan.io/tx/" + props.hash;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-left place-items-start gap-y-6">
      <div className="text-lg leading-8 text-gray-300">
        Your NFT is being minted. Please wait.
      </div>
      <ReactLoading type="bubbles" color="#fff" />
      <div
        className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer transition ease-in-out hover:scale-110 hover:text-white delay-75"
        onClick={checkEtherscan}
      >
        CHECK ETHERSCAN
      </div>
    </div>
  );
};

export default InProgressMinting;
