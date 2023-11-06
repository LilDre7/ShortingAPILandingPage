import infoCard from "../../utils/infoCard";

const Card = () => {
  return (
    <article className="absolute left-0 right-0 z-50 ">
      {infoCard.map((card, index) => (
        <CardCustom key={index} card={card} />
      ))}
      <div className="w-[0.8rem] bg-violet-600 h-[27rem] absolute -z-10 left-0 right-0 top-[17rem] mx-auto"></div>
    </article>
  );
};

const CardCustom = ({ card }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-[21rem] z-50 ">
      <div className="bg-white h-56 w-[310px] absolute rounded-lg shadow-lg shadow-gray-400">
        <div className="bg-violet-900 w-20 h-20 relative rounded-full mx-auto -translate-y-10">
          <img
            className="text-white relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={card.img}
            alt={card.title}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mt-5">{card.title}</h1>
          <p className="text-center text-gray-500">{card.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
