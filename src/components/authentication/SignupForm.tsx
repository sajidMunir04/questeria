import { FormEvent } from "react";
import { signupFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormHeading from "./FormHeading";
import FormInputField from "./FormInputField";


function SignupForm() {

    const handleFormSubmit = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }


    return (<form onSubmit={handleFormSubmit} className='flex flex-col w-2/5 m-auto bg-white rounded-3xl'>
        <FormHeading text={""}/>
            <div className='w-full p-10'>
            <div className='w-full flex justify-between items-center'>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your First Name"} label={"First Name"}/>
            </div>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your Last Name"} label={"Last Name"}/>
            </div>
            </div>
            <FormInputField inputType={"text"} placeHolder={"Your Email Address"} label={"Email Address"}/>
            <FormInputField inputType={"password"} placeHolder={""} label={"Password"}/>
            <FormInputField inputType={"password"} placeHolder={""} label={"Confirm Password"}/>
            <FormButton buttonText={"Sign Up"} onClick={() => {}}/>
            </div>
            </form>);
}

export default SignupForm;