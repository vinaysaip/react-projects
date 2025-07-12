const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, locality, cloudinaryImageId } =
    resData;
  return (
    <div>
      <div className="p-4 m-4 rounded-lg w-[250px] bg-gray-100 hover:bg-gray-300 hover:m-6 ease-in">
        <div className="h-40 w-[220px]">
          <img
            className="rounded-lg h-full w-full"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
              cloudinaryImageId
            }
            alt="Restaurant"
          ></img>
        </div>
        <h3 className="p-2 font-semibold text-xl">{name}</h3>
        <div className="p-2 flex justify-between">
          <p className="text-sm text-gray-700">
            {cuisines.slice(0, 2).join(" .")}
          </p>
          <p className="text-sm text-gray-700">{locality}</p>
        </div>
        <div className="p-2 flex justify-between">
          <p className="text-sm text-gray-700">{costForTwo}</p>
          <p className="text-sm text-gray-700">{avgRating + "⭐"}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
