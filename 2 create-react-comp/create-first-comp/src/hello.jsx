function Hello() {
  let number = 456;
  let fullName = () => {
    return "Anchal Pandey";
  };
  return (
    <h3>
      hello this is {fullName()} {number}
    </h3>
  );
}

export default Hello;
