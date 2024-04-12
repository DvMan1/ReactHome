import React, { Component } from "react";

const Filter = ({ filterText, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Фильтр"
        value={filterText}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
