import React from 'react';

const ScoreboardItem = ({
  className,
  terminal,
  localTime,
  destination,
  status,
  airline,
  flight,
}) => (
  <tr className={className}>
    <th align="center">{terminal}</th>
    <th>{localTime}</th>
    <th>{destination}</th>
    <th>{status}</th>
    <th>{airline}</th>
    <th>{flight}</th>
  </tr>
);

export default ScoreboardItem;
