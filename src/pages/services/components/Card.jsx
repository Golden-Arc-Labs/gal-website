import React from "react";

const Card = () => {
  return (
    <div className="w-full md:w-[75%] m-auto text-center">
      <h1 className="text-[1.5rem] text-left">Application name</h1>
      <h2 className="text-[0.8rem] text-left">
        this is the details.. which is shown in the This is the Heading and want
        to show on the top of it. card.
      </h2>
      <div className="flex items-center justify-between gap-8 flex-wrap">
        <div className="max-w-[85%] flex-1">
          <img
            src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJvb2t8ZW58MHx8MHx8fDA%3D"
            alt="product img"
            width={"100%"}
          />
        </div>
        <div className="flex flex-col items-center justify-around max-w-[50%] gap-8">
          {/* tag  */}
          <div className="border min-w-[12rem] mx-auto text-center relative">
            <div className=" text-white font-bold text-xl pb-[0.2rem]">
              Genre
            </div>
            <div className="bg-white text-black font-bold text-xl">
              Astrology
            </div>
            <div className="gradientBlack w-11 h-11 absolute top-2 -right-6 rotate-45 border-l-[1px]  "></div>
          </div>
          {/* tag  */}
          <div className="border min-w-[12rem] mx-auto text-center relative">
            <div className=" text-white font-bold text-xl pb-[0.2rem]">
              Genre
            </div>
            <div className="bg-white text-black font-bold text-xl">
              Astrology
            </div>
            <div className="gradientBlack w-11 h-11 absolute top-2 -right-6 rotate-45 border-l-[1px]  "></div>
          </div>
          {/* tag  */}
          <div className="border min-w-[12rem] mx-auto text-center relative">
            <div className=" text-white font-bold text-xl pb-[0.2rem]">
              Genre
            </div>
            <div className="bg-white text-black font-bold text-xl">
              Astrology
            </div>
            <div className="gradientBlack w-11 h-11 absolute top-2 -right-6 rotate-45 border-l-[1px]  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
