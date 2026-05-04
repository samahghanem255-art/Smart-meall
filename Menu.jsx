import foods from "../data/foodData";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="grid">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </>
  );
}
