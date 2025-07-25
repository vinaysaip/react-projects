import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { toast } from "react-toastify";
const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeItem(item));
    toast.error("Item removed from cart successfully!!");
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error("Cleared cart successfully!!");
  };
  return (
    <div className="p-5 m-5 text-center mr-auto">
      <h1 className=" py-4 text-2xl font-bold">Cart</h1>
      {cartItems.length > 0 && (
        <button
          className="p-2 m-2 bg-orange-600 cursor-pointer text-white font-semibold rounded-lg"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      )}

      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          const info = item?.dish?.info || item?.card?.info;
          return (
            <div
              className="w-8/12  py-4 flex flex-wrap justify-between items-center border-b border-b-gray-300"
              key={info?.id}
            >
              <div className="flex flex-col w-4/5 p-2">
                <h4 className="">{info?.name}</h4>
                {info?.price ? (
                  <p className="text-[15px] font-medium">
                    {"Rs." + info?.price / 100}
                  </p>
                ) : (
                  <p className="text-[15px] font-medium">
                    {"Rs." + info?.defaultPrice / 100}
                  </p>
                )}
                <p className="text-[12px] font-medium text-gray-500">
                  {info?.description}
                </p>
              </div>
              <div className="h-30 pr-4 w-1/5">
                <div
                  className={
                    info?.imageId
                      ? "absolute mt-22 pl-8"
                      : "absolute mt-11 pl-8"
                  }
                >
                  <button
                    onClick={() => {
                      handleRemove(item);
                    }}
                    className="shadow-lg border-gray-200 rounded-lg text-md text-green-600 bg-white px-5 py-2 m-1 cursor-pointer"
                  >
                    {" "}
                    Remove
                  </button>
                </div>
                {info?.imageId && (
                  <img
                    className="h-full w-40 rounded-lg"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      info?.imageId
                    }
                    alt="menu-item"
                  />
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p className="p-5 m-5 text-xl font-semibold">Cart is Empty!! 🥲</p>
      )}
    </div>
  );
};
export default cart;
