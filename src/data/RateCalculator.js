import rateCalculatorPic from "../images/rateCalculator.JPG";
import rateCalculatorMobile from "../images/rateCalculatorMobile.JPG";

const rateCalculator = {
  link: "https://transcendent-starlight-1c33ff.netlify.app/",
  title: "Repayment Calculator",
  image: rateCalculatorPic,
  imageAlt: "Screenshot of repayment calculator",
  mobileImage: rateCalculatorMobile,
  text: (
    <div>
      <p>
        As part of my job I create graphs each month when the Reserve Bank of
        Australia decides whether to increase or decrease the cash rate.
      </p>
      <p>
        I have to work out current repayments on different home loan amounts,
        and then very quickly recalculate these repayments when the new rate is
        announced.
      </p>
      <p>
        I built this repayment calculator to do this for the range of possible
        increases. I copy the table into Flourish where I can quickly change
        which column is graphed when the rate is announced.
      </p>
      <p>It is built with React.</p>
    </div>
  ),
  buttonText: "Go to repayment calculator",
};
export { rateCalculator };
