import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const calculationTotal = () =>
    listTransactions.reduce((acc, atual) => {
      if (atual.type === "entrada") {
        if (atual.value < 0) {
          return acc + Number(atual.value * -1);
        } else {
          return acc + Number(atual.value);
        }
      } else if (atual.type === "saída") {
        if (atual.value < 0) {
          return acc - Number(atual.value * -1);
        } else {
          return acc - Number(atual.value);
        }
      }
    }, 0);

  return listTransactions.length > 0 ? (
    <div className="containerTotal">
      <div className="totalInformation">
        <span className="spanLetterTotal">Valor total</span>
        <span className="spanNumbersTotal">R$ {calculationTotal()},00</span>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default TotalMoney;
