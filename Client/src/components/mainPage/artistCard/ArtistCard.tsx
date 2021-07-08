import "./artistCard.css";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface props {
  id: string;
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
  id,
}: props) {
  return (
    <Link className="artistCard" to={`/${secondaryContant}/${id}`}>
      <div className="artistCard_Main">
        <img
          className="artistCard_img"
          style={{ borderRadius: `${image.borderRadius}%` }}
          src={image.imgUrl || "/asset/defulatImage.png"}
          alt={mainContant}
        ></img>
        <button>
          <IoPlaySharp></IoPlaySharp>
        </button>
      </div>
      <h3>{mainContant}</h3>
      <p>{secondaryContant}</p>
    </Link>
  );
}
//   <Link to={`/${list.type}/{${list.id}}`}> </Link>
