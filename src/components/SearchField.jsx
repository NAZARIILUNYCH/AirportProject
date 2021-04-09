import React from 'react';
import { Link } from 'react-router-dom';

const SearchField = ({ onChangeText, onChange, titleStyle, depBtn, arvBtn, path, onClick }) => (
  <div className="flights">
    <h1 className={titleStyle}>SEARCH FLIGHT</h1>
    <form>
      <input
        className="flights__search-field"
        type="text"
        placeholder="Airline, destination or flight #"
        value={onChangeText}
        onChange={onChange}
      />
      <i className="fas fa-search"></i>
      <Link to={path}>
        <button type="button" className="flights__search-btn" onClick={onClick}>
          SEARCH
        </button>
      </Link>
    </form>

    <div className="flights-btns">
      <Link to="/departures">
        <button className={depBtn}>
          <span className="fas fa-plane-departure" />
          DEPARTURES
        </button>
      </Link>

      <Link to="/arrivals">
        <button className={arvBtn}>
          ARRIVALS
          <span className="fas fa-plane-arrival" />
        </button>
      </Link>
    </div>
  </div>
);

export default SearchField;
