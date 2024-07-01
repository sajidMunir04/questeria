import { signupFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormInputField from "./FormInputField";


function SignupForm() {
    return (<form action={signupFormURL} className='flex flex-col w-2/5 m-auto'>
            <div className='w-full flex justify-between items-center'>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your First Name"} label={"First Name"}/>
            </div>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your Last Name"} label={"Last Name"}/>
            </div>
            </div>
            <FormInputField inputType={"text"} placeHolder={"Your Email Address"} label={"abc@abc.com"}/>
            <FormInputField inputType={"password"} placeHolder={""} label={"Password"}/>
            <FormInputField inputType={"password"} placeHolder={""} label={"Confirm Password"}/>
            <FormButton buttonText={"Sign Up"} onClick={() => {}}/>
            </form>);
}

export default SignupForm;