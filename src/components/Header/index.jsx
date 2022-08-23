import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="containerHeader">
        <img src={require("../../assets/imgs/NuKenzieBlack.png")} alt="" />
        <Link className="buttonInit" to={"/"}>
          Início
        </Link>
      </div>
    </header>
  );
};

export default Header;
