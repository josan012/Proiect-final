import Style from "./styled";
import { Button } from "@mui/material";

const Calculator = () => {
  return (
    <Style>
      <div className="center">
        <div className="blue-short">
          <p id="earn">Check how much you can earn</p>
          <p id="check">
            Lets check your hash rate to see how much you will earn today,{" "}
            <br />
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <div className="calculator">
            <input
              type="text"
              name="enter"
              id="enter"
              placeholder="Enter your hash rate"
            />
            <select name="coins" id="coins">
              <option value="TH/s">TH/s</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Litecoin">Litecoin</option>
            </select>
            <Button id="calculate" variant="contained">
              Calculate
            </Button>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Calculator;
