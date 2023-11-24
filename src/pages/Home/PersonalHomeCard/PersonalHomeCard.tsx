import CSSModules from "react-css-modules";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card/Card";
import mwinsidelogo from "../../../assets/MWinside.png"
import {
  selectCommunityData,
  selectCommunityModalState,
  toggleCommunityModalState,
} from "../../../features/subreddit/subredditSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import styles from "./PersonalHomeCard.module.css";

const PersonalHomeCard: React.FC = () => {
  const { name } = useAppSelector(selectCommunityData);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleCommunityClick() {
    dispatch(toggleCommunityModalState());
  }

  function navigateToCreatePostPage() {
    if (name) {
      navigate(`/r/${name}/submit`);
    }
  }

  return (
    <Card>
      <div styleName="personal-home-card">
        <div styleName="personal-home-card__banner"></div>
        <div styleName="personal-home-card__title">
          <img
            styleName="personal-home-card__image"
            src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"
            
            alt="redditor"
          />
          <span styleName="personal-home-card__text">MW Inside</span>
        </div>
        <p styleName="personal-home-card__description">
          A platform where you can post your issues.
        </p>
        <div styleName="personal-home-card__buttons">
          <button
            styleName="personal-home-card__button personal-home-card__button_type_create-post"
            onClick={navigateToCreatePostPage}
          >
            Create Issue
          </button>
          <button
            styleName="personal-home-card__button personal-home-card__button_type_create-community"
            onClick={handleCommunityClick}
          >
            Create Component
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CSSModules(PersonalHomeCard, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
