import "./artistCard.css";
import { IoPlaySharp } from "react-icons/io5";

interface props {
  mainContant: string;
  secondaryContant: string;
  image: {
    imgUrl: string;
    borderRadius: number | string;
  };
}
export default function ArtistCard({
  mainContant,
  secondaryContant,
  image,
}: props) {
  return (
    <div className="artistCard">
      <div className="artistCard_Main">
        <img
          className="artistCard_img"
          style={{ borderRadius: `${image.borderRadius}%` }}
          src={image.imgUrl}
          alt={mainContant}
        ></img>
        <button>
          <IoPlaySharp></IoPlaySharp>
        </button>
      </div>

      <h3>{mainContant}</h3>
      <p>{secondaryContant}</p>
    </div>
  );
}
