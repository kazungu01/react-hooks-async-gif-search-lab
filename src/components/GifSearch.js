import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  const [Search, setSearch] = useState("");

 
  function handleSearch(e) {
    e.preventDefault();
    onSubmitQuery(Search);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;