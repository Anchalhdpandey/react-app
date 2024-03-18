import Item from "./Item";
const FoodItems = ({items}) => {
    // upr array destructure {items} i.e items humne parent se liya h app.js se data ko pass krya j
//   let foodItems = ["DAL", "RICE", "PANEER", "ROTI", "MILK"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditem={item} handleBuyButton={()=>console.log(`${item} bought`)}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
