import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import "./style.css";

const Form = ({
  listTransactions,
  setListTransactions,
  filterListTransactions,
  setFilterListTransactions,
}) => {
  const [descriprionCard, setDescriptionCard] = useState("");

  const [valueCard, setValueCard] = useState("");

  const [selectCard, setSelectCard] = useState("entrada");

  const addTransation = () => {
    const transation = {
      description: descriprionCard.trim(),
      type: selectCard,
      value: valueCard.trim(),
    };

    if (transation.description === "") {
      modalErrDescription();
    }
    if (transation.value === "") {
      modalErrValue();
    }
    if (transation.description !== "" && transation.value !== "") {
      setListTransactions([...listTransactions, transation]);
      setFilterListTransactions([...filterListTransactions, transation]);

      setDescriptionCard("");
      setValueCard("");
    }
  };

  const modalErrDescription = () => toast.error("Insira uma descrição");
  const modalErrValue = () => toast.error("Insira um valor");

  return (
    <form className="containerForm">
      <label className="labelDescription" htmlFor="inputDescription">
        Descrição
      </label>
      <input
        type="text"
        id="inputDescription"
        required
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescriptionCard(event.target.value)}
        value={descriprionCard}
      />

      <span>Ex: Compra de roupas</span>

      <div className="divValue">
        <label htmlFor="inputValue">valor</label>
        <input
          type="number"
          id="inputValue"
          required
          placeholder="0"
          onChange={(event) => {
            setValueCard(event.target.value);
          }}
          value={valueCard}
        />
      </div>
      <div className="divSelect">
        <label htmlFor="selectTypeTransation">Tipo de valor</label>
        <select
          name="selectTypeTransation"
          id="selectTypeTransation"
          onChange={(event) => setSelectCard(event.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saída">Saida</option>
        </select>
      </div>

      <button
        className="buttonInserirValor"
        onClick={(event) => {
          event.preventDefault();
          addTransation();
        }}
      >
        Inserir valor
      </button>
      <Toaster />
    </form>
  );
};

export default Form;
