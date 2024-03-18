const ErrorMessage=({items})=>{
    // let foodItems=["DAL", "RICE","PANEER", "ROTI", "MILK"];
    return(
        <>{items.length===0 && <h3>I am still hungry</h3>}</>
    )
}
export  default ErrorMessage;