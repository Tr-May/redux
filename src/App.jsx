import React from "react";

const App = () => {
  return (
    <div className="container my-3 d-flex flex-column align-items-center">
      <h1 className="my-3">React Redux</h1>
      <div className="border shadow-sm p-5 text-center">
        <h2>Count : 0</h2>
        <div className="mt-4">
          <button className="btn btn-outline-primary me-2">Increment</button>
          <button className="btn btn-outline-warning me-2">Decrement</button>
          <button className="btn btn-outline-danger me-2">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
