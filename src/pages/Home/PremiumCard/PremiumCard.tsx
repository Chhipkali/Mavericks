import CSSModules from "react-css-modules";
import Card from "../../../components/Card/Card";
import styles from "./PremiumCard.module.css";
import redditShield from "../../../assets/reddit-shield.png";

const PremiumCard: React.FC = () => {
  return (
    <Card>
      <div styleName="premium-card">
        <div styleName="premium-card__content">
          
          <div styleName="premium-card__text">
            <strong styleName="premium-card__title" style={{fontSize:"18px"}}>MATLAB Mavericks</strong>
            <br/>
            <br/>
            <p styleName="premium-card__description" style={{fontSize:"15px"}}>
            Chhipkali, our top-secret hideout for all things non-worky and semi-serious. It's like the Yammer, but for "serious" issues, anonimously. Vote for us, because breaking the code of silence has never been this hilarious!
            </p>
          </div>
        </div>
      </div>
      <div styleName="premium-card__button-container">
      <button styleName="premium-card__button" onClick={() => { window.open("https://forms.office.com/pages/responsepage.aspx?id=ETrdmUhDaESb3eUHKx3B5hxpRtqVFJxOmrb9_de9rYpURDNDREpJOVNSRDdYSkxHUTdGT01QMk9YMC4u", "_blank")}}>Vote for Us!</button>
      </div>
    </Card>
  );
};

export default CSSModules(PremiumCard, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
