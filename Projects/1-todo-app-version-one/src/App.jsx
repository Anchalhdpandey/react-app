function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-6">
            <input type="text" placeholder="Enter Todo here.."/>
          </div>
          <div class="col-sm-2">
            <input type="date"/>
          </div>
          <div class="col-sm-2"><button type="button" class="btn btn-success">Add</button></div>
        </div>
      </div>
    </center>
  );
}

export default App;
