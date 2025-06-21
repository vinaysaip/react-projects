import Shimmer from "./Shimmer";
import { useState, useEffect } from "react"; // Import hooks

const RestaurantMenu = ({ menuItems }) => {
  // State to manage categories and their open/closed status
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // This effect runs when the menuItems prop changes
    if (menuItems) {
      const initialCategories = menuItems
        ?.filter((item) => item?.card?.card?.title)
        .map((item) => ({
          ...item,
          isOpen: false, // Initialize all categories as closed
        }));
      setCategories(initialCategories);
    }
  }, [menuItems]); // The dependency array ensures this runs only when menuItems changes

  // Function to toggle the isOpen state of a specific category
  const handleToggleCategory = (titleToToggle) => {
    setCategories(
      categories.map((cat) =>
        cat.card.card.title === titleToToggle
          ? { ...cat, isOpen: !cat.isOpen } // Flip the isOpen value for the clicked category
          : cat
      )
    );
  };

  if (categories.length === 0) return <Shimmer />;

  return (
    <div>
      {categories.map((category) => {
        // De-duplication logic remains the same
        const items = [
          ...(category.card?.card?.carousel || []),
          ...(category.card?.card?.itemCards || []),
        ];
        const uniqueItems = Array.from(
          items.reduce((map, item) => {
            const id = item?.dish?.info?.id || item?.card?.info?.id;
            if (id && !map.has(id)) {
              map.set(id, item);
            }
            return map;
          }, new Map()).values()
        );

        return (
          <div key={category?.card?.card?.title} className="menu-category" onClick={() => handleToggleCategory(category.card.card.title)}>
            {/* Add an onClick handler to the header */}
            <h5
              className="menu-header"
            >
              {category?.card?.card?.title}
              {/* Optional: Add an arrow icon to indicate state */}
              <span className="arrow">{category.isOpen ? " 🔼" : " 🔽"}</span>
            </h5>

            {/* Conditionally render the menu items based on category.isOpen */}
            {category.isOpen && (
              <div className="menu-items">
                {uniqueItems.length > 0 ? (
                  uniqueItems.map((item) => {
                    const info = item?.dish?.info || item?.card?.info;
                    return <p key={info?.id}>{info?.name}</p>;
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