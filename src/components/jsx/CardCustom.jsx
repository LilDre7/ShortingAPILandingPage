import infoCard from "../../utils/infoCard";

const Card = () => {
  return (
    <article>
      {infoCard.map((card, index) => (
        <CardCustom key={index} card={card} />
      ))}
    </article>
  );
};

const CardCustom = ({ card }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-red-500 h-screen">
      <div className="bg-white h-56 w-[310px] absolute rounded-lg shadow-lg shadow-gray-400">
        <div className="bg-violet-900 w-20 h-20 relative rounded-full mx-auto -translate-y-10">
          <img
            className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
