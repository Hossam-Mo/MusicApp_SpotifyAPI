import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";
import useMainRows from "../../hooks/useMainRows";

//imgBorder={row?.lists?[index].type=='artist' ? 50 :50}
export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const rows = useMainRows();

  return (
    <div className="mainPage">
      {rows.map((row, index) => {
        return (
          <CardsRows
            key={index}
            imgBorder={row.lists && row.lists[index].type == "artist" ? 50 : 2}
            title={row.name}
            lists={row.lists}
            description={row.description}
          ></CardsRows>
        );
      })}
    </div>
  );
}
