
//import './App.css';
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="login-container">
    <h2 className="form-title">Log in with</h2>
    <SocialLogin />
    <p className="separator"><span>or</span></p>
  <form action="#" className='login-form'>
    <InputField type="email" placeholder="Email address" icon="mail" recuired/>
    <InputField type="password" placeholder="Password" icon="lock" recuired/>
    

    <a href="--" 
      className="forgot-password-link"
      role="button"
      onClick={(e) => e.preventDefault()}
      >
        Forgot password?
    </a>
    <button type="submit" className="login-button">Log In </button>
    </form>

    <p className="signup-prompt">      
      Don`t have an account? <a href="--" className="signup-link" >
        Sign Up</a>
        </p>
        </div>
  );
}

export default App;
