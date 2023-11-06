import React from "react";

const infoCard = [
  {
    title: "Brand Recognition",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
    img: "URL_de_la_imagen_1",
  },
  {
    title: "Detailed Records",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
    img: "URL_de_la_imagen_2",
  },
  {
    title: "Fully Customizable",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate voluptatibus iust",
    img: "URL_de_la_imagen_3",
  },
];

const CardCustom = ({ infoCard }) => {
  // Este es el array de las cartas 🚀

  return (
    <div className="w-full flex flex-col justify-center items-center bg-red-500 h-screen">
      {infoCard.map((item, index) => (
        <div
          key={index}
          className="bg-white h-56 w-[310px] absolute rounded-lg shadow-lg shadow-gray-400"
        >
          <div className="bg-violet-900 w-20 h-20 relative rounded-full mx-auto -translate-y-10">
            <img
              className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={item.img}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center mt-5">
              {item.title}
            </h1>
            <p className="text-center text-gray-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCustom;
