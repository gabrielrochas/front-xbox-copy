import React, { useState } from "react";

export default function CreateGame() {
  const [fields, setFields] = useState("");

  const handleChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.id] = e.target.value;
    setFields(auxFields);
  };

  return (
    <div>
      <h1>Crate new game</h1>
      <form>
        <input
          type="text"
          id="title"
          placeholder="Game name"
          onChange={handleChange}
        />
        <input
          type="text"
          id="cover"
          placeholder="Game cover"
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          placeholder="Game description"
          onChange={handleChange}
        />
        <input
          type="text"
          id="lauch-year"
          placeholder="Launch year"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
