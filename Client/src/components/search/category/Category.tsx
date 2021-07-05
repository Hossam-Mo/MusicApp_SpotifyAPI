import React from "react";
import { Link } from "react-router-dom";
import categories from "../../../types/categories";
import "./category.css";

export default function Category({ id, name, icons }: categories) {
  return (
    <Link
      to={`/category/${id}`}
      className="category"
      style={{ backgroundImage: `url(${icons[0].url})` }}
    >
      <h3>{name}</h3>
    </Link>
  );
}
