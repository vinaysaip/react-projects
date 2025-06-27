import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const RestaurantMenu = ({ menuItems }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (menuItems) {
      const initialCategories = menuItems
        ?.filter((item) => item?.card?.card?.title)
        .map((item) => ({
          ...item,
          isOpen: false,
        }));
      setCategories(initialCategories);
    }
  }, [menuItems]);

  const handleToggleCategory = (titleToToggle) => {
    setCategories(
      categories.map((cat) =>
        cat.card.card.title === titleToToggle
          ? { ...cat, isOpen: !cat.isOpen }
          : cat
      )
    );
  };

  console.log(categories);

  if (categories.length === 0) return <Shimmer />;

  return (
    <div>
      {categories.map((category) => {
        const items = [
          ...(category.card?.card?.carousel || []),
          ...(category.card?.card?.itemCards || []),
          ...(category.card?.card?.categories || []),
        ];
        const uniqueItems = Array.from(
          items
            .reduce((map, item) => {
              const id = item?.dish?.info?.id || item?.card?.info?.id;
              if (id && !map.has(id)) {
                map.set(id, item);
              }
              return map;
            }, new Map())
            .values()
        );

        return (
          <div
            key={category?.card?.card?.title}
            className="menu-category"
            onClick={() => handleToggleCategory(category.card.card.title)}
          >
            <h5 className="menu-header">
              <div>
                {category.card?.card?.itemCards ? (
                  <p>
                    {category?.card?.card?.title +
                      " (" +
                      category.card?.card?.itemCards.length +
                      ")"}
                  </p>
                ) : (
                  <p>{category?.card?.card?.title}</p>
                )}
              </div>
              <div className="indicator">
                {category.isOpen ? (
                  <img
                    height={16}
                    width={16}
                    src="https://www.svgrepo.com/show/100942/up-arrow.svg"
                  />
                ) : (
                  <img
                    height={16}
                    width={16}
                    src="https://www.svgrepo.com/show/145159/down-arrow.svg"
                  />
                )}
              </div>
            </h5>

            {/* Conditionally render the menu items based on category.isOpen */}
            {category.isOpen && (
              <div className="menu-items">
                {uniqueItems.length > 0 ? (
                  uniqueItems.map((item) => {
                    const info = item?.dish?.info || item?.card?.info;
                    return (
                      <div className="item-info" key={info?.id}>
                        <div className="item-description">
                          <h4 className="item-name">{info?.name}</h4>
                          {info?.price ? (
                            <p>{"Rs." + info?.price / 100}</p>
                          ) : (
                            <p>{"Rs." + info?.defaultPrice / 100}</p>
                          )}
                          <p>{info?.description}</p>
                        </div>
                        <div className="menu-item-img">
                          <img
                            src={
                              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                              info?.imageId
                            }
                            alt="menu-item"
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No Items Found</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
