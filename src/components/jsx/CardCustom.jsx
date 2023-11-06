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
    <div className=" w-full flex flex-col justify-center items-center bg-red-500">
      <div className="bg-white h-52">
        <div className="bg-violet-900">
          <img src="/public/images/icon-brand-recognition.svg" alt="" />
        </div>
        <div>{CardCustom.map()}</div>
      </div>
    </div>
  );
};

export default CardCustom;
