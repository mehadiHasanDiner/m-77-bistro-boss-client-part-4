const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <>
      <div className="card card-compact w-full bg-base-300  rounded-none">
        <figure>
          <img className="w-full rounded-none" src={image} alt="" />
        </figure>
        <p className="bg-slate-800 text-white absolute right-0 px-[2px] mr-4 mt-4 rounded">
          ${price}
        </p>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="my-button ">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
