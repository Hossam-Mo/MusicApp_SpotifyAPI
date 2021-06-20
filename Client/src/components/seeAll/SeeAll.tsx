import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./seeAll.css";

interface prames {
  pageName: string;
}

export default function SeeAll() {
  const { pageName } = useParams<prames>();

  useEffect(() => {
    console.log(pageName);
  }, [pageName]);

  return <div className="seeAll">heloo</div>;
}
