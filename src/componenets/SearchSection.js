import React from 'react';

function SearchSection() {
  return (
    <div className="m-2 search-section d-flex flex-column justify-content-between p-3">
      
      <div className="chat-area flex flex-grow-1">
        <h2>Search</h2>
        {/* Add other elements here if needed */}
      </div>
      <div className="mt-auto d-flex justify-content-between align-items-end">
        <input type="text" className="form-control" placeholder="Search..." />
        &nbsp;
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}

export default SearchSection;