import styles from "./Item.module.css";
const Item = ({ fooditem, handleBuyButton}) => {
    // const handleBuyButtonClicked=(event)=>{  
    //     console.log(event)
    //     console.log(`${fooditem} being bought`);
    // }
  // let {fooditem}=props; array destrcting mtlb yeh fooditems k argumet m fooditem ka sara array ka data lega
  return (
    <li className={`list-group-item`}>
      <span className={styles["kg-span"]}>{fooditem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;


// here event is a SyntheticBaseEvent 