/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ScoreboardItem from './ScoreboardItem';

const ScoreboardList = ({ scoreboardList }) => {
  let className;

  return (
    <table className="scoreboard" cellspacing="0" border="0">
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
          <ScoreboardItem
            className={className}
            terminal={el.terminal}
            localTime={el.localTime}
            destination={el.destination}
            status={el.status}
            airline={el.airline}
            flight={el.flight}
          />
        );
      })}
    </table>
  );
};

export default ScoreboardList;
