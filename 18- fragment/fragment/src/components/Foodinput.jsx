import styles from "./foodinput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  // const handleOnChange=(event)=>{
  //     console.log(event.target.value)
  // }
  return (
    <input
      type="text"
      placeholder="Enter food name here..."
      className={styles.foodinput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
