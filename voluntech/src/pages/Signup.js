import LoginHeader from "../components/LoginHeader";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <LoginHeader
              heading="Sign up to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
    )
}