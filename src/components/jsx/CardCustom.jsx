import infoCard from "../../utils/infoCard";

const Card = () => {
  return (
    <article className="relative left-0 right-0 z-50 lg:flex lg:max-w-[1000px] lg:mx-auto ">
      {infoCard.map((card, index) => (
        <CardCustom key={index} card={card} />
      ))}
      <div className="w-[0.6rem] bg-[#2BD0D0] h-[27rem] absolute -z-10 left-0 right-0 top-[17rem] mx-auto lg:h-[0.6rem] lg:w-[27rem] lg:top-[10rem] "></div>
    </article>
  );
};

const CardCustom = ({ card }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-[21rem] z-50 lg:flex lg:flex-row ">
      <div className="bg-white h-56 w-[310px] absolute rounded-lg shadow-lg shadow-gray-400 lg:h-52">
        <div className="bg-violet-900 w-20 h-20 relative rounded-full mx-auto -translate-y-10 lg:-translate-x-24 ">
          <img
            className="text-white relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={card.img}
            alt={card.title}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mt-5 lg:-mt-4">
            {card.title}
          </h1>
          <p className="text-center text-gray-500">{card.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
