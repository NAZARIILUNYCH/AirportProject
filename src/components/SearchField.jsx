import React from 'react';

const SearchField = () => (
  <form>
    <input
      className="flights__search-field"
      type="text"
      placeholder="Airline, destination or flight"
    />
    <i className="fas fa-search"></i>
    <button className="flights__search-btn">SEARCH</button>
  </form>
);

export default SearchField;
