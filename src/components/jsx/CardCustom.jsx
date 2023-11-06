import React from "react";

const CardCustom = () => {
  // Este es el array de las cartas 🚀
  const infoCard = {
    Brand: [
      {
        title: "Brand Recognition",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
      },
      {
        title: "Detailed Records",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
      },
      {
        title: "Fully Customizable",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
      },
    ],
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center bg-red-500 h-screen">
      <div className="bg-white h-56 w-[310px] absolute rounded-lg shadow-lg shadow-gray-400">
        <div className="bg-violet-900 w-20 h-20 relative rounded-full mx-auto flex">
          <img
            className=""
            src="/public/images/icon-brand-recognition.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardCustom;
