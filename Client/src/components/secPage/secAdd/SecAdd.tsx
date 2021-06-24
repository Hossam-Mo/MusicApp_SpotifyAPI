import "./secAdd.css";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function SecAdd() {
  return (
    <div className="secAdd">
      <button>
        <IoPlaySharp />
      </button>
      <AiOutlineHeart></AiOutlineHeart>
      <BsThreeDots></BsThreeDots>
    </div>
  );
}
