import CSSModules from "react-css-modules";
import Card from "../../../components/Card/Card";
import styles from "./TechStackCard.module.css";
import logo from "../../../assets/heart_copyright.jpg"
import hansaLogo from "../../../assets/hansa.png"
function escalate(){
  alert("Developer is on vacation.");
}

const TechStackCard: React.FC = () => {
  return (
    <Card>
      <div styleName="tech-stack">
        <img src={hansaLogo} style={{width:"100%",height:"140px",borderRadius:"3px"}}></img>
        <br/>
        <br/>
        <div>
          <h4>Hack Stack</h4>
        </div>
        <br/>
        <div styleName="techs">
          
          <a
            href="https://reactjs.org/"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Badam Milk
          </a>
          <a
            href="https://firebase.google.com/"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Mango Juice
          </a>
          <a
            href="https://reactrouter.com/en/main"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Sweet Lassi
          </a>
          <a
            href="https://redux.js.org/"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Pineapple Delight
          </a>
          
        </div>

        <div>
          <h4>Team Stack</h4>
        </div>
        <br/>
        <div styleName="techs">
          <a
            href="https://inside-apps.mathworks.com/Facebook/FaceBookSearch?details=Y&emplid=116261"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Abhishek Singh(HYD)
          </a>
          <a
            href="https://inside-apps.mathworks.com/Facebook/FaceBookSearch?details=Y&emplid=115067"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
             Pranjal Saxena
          </a>
          <a
            href="https://inside-apps.mathworks.com/Facebook/FaceBookSearch?details=Y&emplid=116249"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Piyush Patil
          </a>
          <a
            href="https://inside-apps.mathworks.com/Facebook/FaceBookSearch?details=Y&emplid=116167"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
          >
            Shushant Singh
          </a>

          <a
            href="https://inside-apps.mathworks.com/Facebook/FaceBookSearch?details=Y&emplid=116185"
            styleName="tech"
            target="_blank"
            rel="noreferrer"
            style={{marginLeft:"50%",width:"max-content"}}
          >
            Sachin Khandelwal
          </a>


        </div>
        
        <p styleName="copyright">MATLAB Mavericks © 2023. All rights reserved</p>
        <br/>
        <div style={{alignContent:"center"}}>
        <p  style={{textAlignLast:"center"}}  styleName="built">Crafted with <img  src={logo} style={{width:"15px",height:"15px",borderRadius:"3px",left:"50%"}}></img> in Golconda 2, FL2</p>
        <p style={{textAlignLast:"center"}} > MathWorks, Hyderabad</p>
        </div>
        <br/>
        <div style={{textAlign:"center"}}>
        <button  style={{borderEndEndRadius:"15px",borderStartStartRadius:"15px",borderStartEndRadius:"15px",borderEndStartRadius:"15px",alignItems:"center",height:"40px",width:"313px",fontSize:"20px",fontWeight:"bold",cursor:"pointer"}}  onClick={escalate}> Escalate to Developer </button>
        </div>
        
        
      </div>
    </Card>
  );
};

export default CSSModules(TechStackCard, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
