import { FaTrash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";

const List = ({
  listTransactions,
  setListTransactions,
  filterListTransactions,
  setFilterListTransactions,
}) => {
  const allTranstions = () => setFilterListTransactions(listTransactions);

  const entryTrasantions = () => {
    const listFilter = listTransactions.filter(
      (transation) => transation.type === "entrada"
    );

    return setFilterListTransactions(listFilter);
  };

  const exitTransations = () => {
    const listFilter = listTransactions.filter(
      (transation) => transation.type === "saída"
    );

    return setFilterListTransactions(listFilter);
  };

  const deleteTransation = (index) => {
    const listFilter = listTransactions.filter((transation, i) => i !== index);

    setListTransactions(listFilter);
    return setFilterListTransactions(listFilter);
  };

  return (
    <div className="containerCards">
      <div className="headerCards">
        <p>Resumo financeiro</p>
        <div className="divButtonsFilter">
          <button className="buttonListAll" onClick={allTranstions}>
            Todos
          </button>
          <button onClick={entryTrasantions}>Entradas</button>
          <button onClick={exitTransations}>Despesas</button>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {listTransactions.length > 0 ? (
          <motion.div
            key={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul>
              {filterListTransactions.map((transation, index) => (
                <li key={index}>
                  <div>
                    <p className="titleDescription">{transation.description}</p>
                    <p className="valueTransation">R$ {transation.value},00</p>
                    <button
                      className="buttonDeleteTransation"
                      onClick={() => deleteTransation(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <span
                    className="cardFooter"
                    style={{
                      backgroundColor:
                        transation.type === "entrada" ? "#03B898" : "#868E96",
                    }}
                  >
                    {transation.type}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="divTransationsEmpty">
              <img
                className="imgTransationsEmpty"
                src={require("../../assets/imgs/DefaultLancamentos.png")}
                alt=""
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default List;
