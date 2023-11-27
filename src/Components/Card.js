const Card = ({ name, rarity, image }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3>{name}</h3>
        <h5>{rarity}</h5>
      </div>
      <img src={image} alt={name} />
    </>
  );
};

export default Card;
