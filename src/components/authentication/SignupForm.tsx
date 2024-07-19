import { FormEvent, useState } from "react";
import { signupFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormHeading from "./FormHeading";
import FormInputField from "./FormInputField";
import { useAppDispatch } from "../../app/hooks";
import { setToLoginForm } from "../../app/slices/authenticationSlice";
import FormOptionText from "./FormOptionText";
import { v7 as uuidv7 } from 'uuid';
import { SignUpData } from "./signupData";


function SignupForm() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const dispatch = useAppDispatch();

    const handleFormSubmit = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const uniqueUserId = uuidv7();

        const userData : SignUpData = {
            username: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            uniqueID: uniqueUserId,
            imageUrl: ""
        }

        const response = await fetch(signupFormURL,{
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(userData)
        })

        const data = await response.json();
        
        console.log(data);
    }

    return (<form onSubmit={handleFormSubmit} className='flex flex-col w-2/5 m-auto bg-white rounded-3xl'>
        <FormHeading text={""}/>
            <div className='w-full p-10'>
            <div className='w-full flex justify-between items-center'>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your First Name"} onChange={setFirstName} label={"First Name"}/>
            </div>
            <div className='w-5/12'>
            <FormInputField inputType={"text"} placeHolder={"Your Last Name"} onChange={setLastName} label={"Last Name"}/>
            </div>
            </div>
            <FormInputField inputType={"text"} placeHolder={"Your Email Address"} onChange={setEmail} label={"Email Address"}/>
            <FormInputField inputType={"password"} placeHolder={""} onChange={setPassword} label={"Password"}/>
            <FormInputField inputType={"password"} placeHolder={""} onChange={setConfirmPassword} label={"Confirm Password"}/>
            <FormButton buttonText={"Sign Up"} onClick={() => {}}/>
            <FormOptionText infoText={"Already have an account?"}/>
            <FormButton buttonText={"Login"} onClick={() => {dispatch(setToLoginForm())}}/>
            </div>
        </form>);
}

export default SignupForm;