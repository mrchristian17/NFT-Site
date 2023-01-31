import React from "react";

const StartMinting = (props) => {
  return (
    <div className="mt-10 flex items-center gap-x-6">
      <div
        className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer transition ease-in hover:scale-110 hover:text-white delay-70"
        onClick={props.mint}
      >
        MINT
      </div>
      <div
        className="text-base font-semibold leading-7 text-white cursor-pointer hover:scale-110 transition ease-in delay-75"
        onClick={props.logout}
      >
        START OVER <span aria-hidden="true">⟳</span>
      </div>
    </div>
  );
};

export default StartMinting;
