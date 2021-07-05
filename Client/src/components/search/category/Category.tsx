import React from "react";
import categories from "../../../types/categories";
import "./category.css";

export default function Category({ id, name, icons }: categories) {
  return (
    <div
      className="category"
      style={{ backgroundImage: `url(${icons[0].url})` }}
    >
      <h3>{name}</h3>
    </div>
  );
}
