import { auth, provider } from "../../config/firebase-config";
import "./login.css";
import logo from "../../images/logo.png";
import wavefooter from "../../images/wavefooter.png";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/smartwallet");
  };

  return (
    <div className="login-page">
      <div className="logo">
        <a href="/">
          <img src={logo} alt=""></img>
        </a>
      </div>
      <div className="login-text">
        <h1>Welcome to SmartWallet</h1>
        <p>Join now to get your expenses on track!</p>
      </div>
      <div className="login-button">
        <button className="login-btn" onClick={signInWithGoogle}>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          ></img>
          <p>
            <b>Sign up with Google</b>
          </p>
        </button>
        
      </div>
      
      <footer>
        <img src={wavefooter} alt=""></img>
      </footer>
    </div>
  );
};
