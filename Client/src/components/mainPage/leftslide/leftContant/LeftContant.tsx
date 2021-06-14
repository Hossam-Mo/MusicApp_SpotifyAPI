import React from "react";
import "./leftContant.css";
interface props {
  Icon: any;
  contant: string;
  marginTop?: boolean;
  link?: string;
  onClick?: () => void;
}

export default function LeftContant({
  Icon,
  contant,
  marginTop,
  onClick,
}: props) {
  return (
    <div
      onClick={onClick}
      className={`leftContant ${marginTop && "leftContantTop"}`}
    >
      <Icon className="leftContant_icon"></Icon>
      <p>{contant}</p>
    </div>
  );
}
