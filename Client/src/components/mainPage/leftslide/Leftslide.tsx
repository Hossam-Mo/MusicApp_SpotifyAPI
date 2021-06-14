import "./leftslide.css";
import { IoAdd } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { AiTwotoneHeart, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import LeftContant from "./leftContant/LeftContant";
import db, { serverTime } from "../../../firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

interface img {
  url: string;
}

interface user {
  display_name: string;
  email: string;
  id: string;
  images: img[];
}

interface lists {
  name: string;
  id: string;
}

export default function Leftslide() {
  const user = useSelector((user: user) => user);
  const [listsSize, setListsSize] = useState(0);
  const [lists, setLists] = useState<lists[]>();

  const addNewList = () => {
    if (user) {
      const lists = db.collection("users").doc(user.id).collection("lists");
      // get the size of the lists
      lists
        .get()
        .then((lists) => {
          setListsSize(lists.size);
        })
        .catch((err) => console.log(err));

      // add the lists to the firestore

      lists.add({
        name: `Music list N${listsSize + 1}`,
        timestamp: serverTime,
      });
    }
  };

  useEffect(() => {
    if (user) {
      const lists = db.collection("users").doc(user.id).collection("lists");

      lists.orderBy("timestamp", "asc").onSnapshot((s) => {
        setLists(
          s.docs.map((list) => {
            return { name: list.data().name, id: list.id };
          })
        );
      });
    }
  }, [user]);

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
        onClick={addNewList}
      ></LeftContant>
      <LeftContant Icon={AiTwotoneHeart} contant="Your favorite"></LeftContant>
      <div className="leftSlide_line"></div>

      <div className="leftslide_lists">
        {lists?.map((list) => {
          return <div key={list.id}>{list.name}</div>;
        })}
      </div>
    </div>
  );
}
