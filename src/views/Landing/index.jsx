import { Link } from "react-router-dom";
import "./style.css";

const Landing = () => {
  return (
    <main>
      <div className="containerLandingPage">
        <div className="containerInfoLanding">
          <img src={require("../../assets/imgs/NuKenzieWhite.png")} alt="" />
          <p>Centralize o controle das suas finanças</p>
          <span>de forma rápida e segura</span>
          <Link to="/homePage">Iniciar</Link>
        </div>
        <div className="containerImg">
          <img src={require("../../assets/imgs/ImgLandingPage.png")} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Landing;
