import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";
import useMainRows from "../../hooks/useMainRows";
import DesktopNav from "../navs/desktopNav/DesktopNav";

//imgBorder={row?.lists?[index].type=='artist' ? 50 :50}
export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const rows = useMainRows();

  return (
    <div className="mainPage">
      <DesktopNav></DesktopNav>
      {rows.map((row, index) => {
        return (
          <CardsRows
            key={index}
            imgBorder={row.lists && row.lists[index].type == "artist" ? 50 : 2}
            title={row.name}
            lists={row.lists}
            description={row.description}
            seeAll={true}
          ></CardsRows>
        );
      })}
    </div>
  );
}
