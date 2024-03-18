function Addtodo() {
  return (
    <div class="container text-center">
      <div class="row" style={{ margin: "10px 5px" }}>
        <div class="col-sm-6">
          <input
            type="text"
            style={{ width: "72%" }}
            placeholder="Enter Todo here.."
          />
        </div>
        <div class="col-sm-2">
          <input type="date" style={{ width: "100%" }} />
        </div>
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-success"
            style={{ minWidth: "80px" }}
          >
            Add
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">Go to gym</div>
        <div class="col-sm-2">11/03/2024</div>
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-danger"
            style={{ minWidth: "80px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
