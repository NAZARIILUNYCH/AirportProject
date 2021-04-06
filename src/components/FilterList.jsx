/* eslint-disable no-unused-expressions */
import React from 'react';

const FilterList = ({ scoreboardList }) => {
  let className;

  return scoreboardList.length !== 0 ? (
    <table className="scoreboard" cellSpacing="0" border="0">
      <tbody>
        <tr align="left">
          <th align="center">Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>

        {scoreboardList.map(el => {
          scoreboardList.indexOf(el) % 2 === 1
            ? (className += ' scoreboard-row_even')
            : (className = 'scoreboard-row');

          return (
            <tr key={el.id} className={className}>
              <th align="center">{el.terminal}</th>
              <th>{el.localTime}</th>
              <th>{el.destination}</th>
              <th>{el.status}</th>
              <th>{el.airline}</th>
              <th>{el.flight}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <span className="scoreboard no-flights__text">NO FLIGHTS</span>
  );
};

export default FilterList;
