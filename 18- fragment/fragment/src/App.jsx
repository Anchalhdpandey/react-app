import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMess";
import Container from "./components/container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {

let [textToShow, setTextState] = useState();
let [foodItems, setFoodItems] =useState(["DAL", "RICE",  "VEGGIE"]);
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  console.log(`Current value of textstate:${textToShow}`);

  // let emptyMessage=foodItems.length===0?<h3>I am still hungry</h3>:null;
  const onKeyDown = (event) => {
    if (event.key === 'Enter'){
    let newFoodItem=event.target.value;
    console.log("Food value entered is" + newFoodItem);
  };
    // console.log(event);
    // setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          taste great!
        </p>
      </Container>
    </>
  );
}

export default App;
