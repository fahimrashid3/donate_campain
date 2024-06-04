const HomeCard = ({ data, handelDonation }) => {
  const { id, picture, title, category, category_bg, card_bg } = data;
  return (
    <div>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        onClick={() => handelDonation(id)}
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p className={card_bg}>{category}</p>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
