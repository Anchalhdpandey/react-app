function TodoItem({todoNAME, todoDate}) {
    // let todoNAME = "OFFICE";
    // let todoDate = "11/03/2024";
    return (
      <div class="container text-center">
        <div class="row" style={{ margin: "10px 5px" }}>
          <div class="col-sm-6">{todoNAME}</div>
          <div class="col-sm-2">{todoDate}</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger" style={{'margin-left':'19px', 'minWidth':'80px'}}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default TodoItem;
  