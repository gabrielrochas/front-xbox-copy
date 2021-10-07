/* eslint-disable no-sequences */
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGamesList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());
      const results = await response.json();
      setGames(results);
    };
    loadGamesList();
  }, []);

  console.log(`Games list: ${games}`);
  return (
    <div className="col">
      {games.map((game, index) => (
        <div key={`game-list-${index}`}>{game.title}</div>
      ))}
    </div>
  );
}
