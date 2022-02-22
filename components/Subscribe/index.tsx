import Style from "./styled";
import { Button } from "@mui/material";
const Subscribe = () => {
  return (
    <Style>
      <div className="center">
        <div className="gradient">
          <div className="email">
            <div className="email-left">
              <p id="now">Start mining now</p>
              <p id="join">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </div>
            <div className="email-right">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <Button id="subscribe">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Subscribe;
