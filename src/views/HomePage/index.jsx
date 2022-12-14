import Form from "../../components/Form";
import { useState } from "react";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Header from "../../components/Header";
import "./style.css";
import AnimationPages from "../../components/AnimationTransitionPages";

const Homepage = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterListTransactions, setFilterListTransactions] =
    useState(listTransactions);

  return (
    <AnimationPages>
      <div className="Container">
        <Header />
        <div className="containerMain">
          <div className="containerFormAndInformation">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              filterListTransactions={filterListTransactions}
              setFilterListTransactions={setFilterListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <div className="containerListTransations">
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              filterListTransactions={filterListTransactions}
              setFilterListTransactions={setFilterListTransactions}
            />
          </div>
        </div>
      </div>
    </AnimationPages>
  );
};

export default Homepage;
