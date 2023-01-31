import React from "react";

const CompletedMinting = () => {
  const url = "https://testnets.opensea.io/collection/mickeyrat-v2";
  const viewOpensea = () => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col items-left place-items-start gap-y-6">
      <div className="mt-6 text-lg leading-8 text-gray-300">
        All set! You NFT has been minted.
      </div>
      <div
        className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer transition ease-in-out hover:scale-110 hover:text-white delay-75"
        onClick={viewOpensea}
      >
        VIEW OPENSEA
      </div>
    </div>
  );
};

export default CompletedMinting;
