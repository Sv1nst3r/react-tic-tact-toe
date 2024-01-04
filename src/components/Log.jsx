import { useState } from "react";
const Log = ({ turns }) => {
  const [gameLogs, setGameLogs] = useState("No logs for now");

  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.col}${turn.square.row}`}>
            {turn.player} selected {turn.square.col},{turn.square.row}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
