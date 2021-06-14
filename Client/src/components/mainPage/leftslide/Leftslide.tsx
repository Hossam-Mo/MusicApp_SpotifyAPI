import React from "react";
import "./leftslide.css";

import { IoAdd } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { AiTwotoneHeart, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import LeftContant from "./leftContant/LeftContant";
import db from "../../../firebase";

export default function Leftslide() {
  const addNewList = () => {};

  return (
    <div className="leftslide">
      <img className="leftslid_logo" src="/asset/logo.png" alt="Logo"></img>
      <LeftContant Icon={AiOutlineHome} contant="Home"></LeftContant>
      <LeftContant Icon={AiOutlineSearch} contant="Search"></LeftContant>
      <LeftContant Icon={VscLibrary} contant="Your library"></LeftContant>
      <LeftContant
        Icon={IoAdd}
        contant="Add your list"
        marginTop={true}
      ></LeftContant>
      <LeftContant Icon={AiTwotoneHeart} contant="Your favorite"></LeftContant>
      <div className="leftSlide_line"></div>
    </div>
  );
}
