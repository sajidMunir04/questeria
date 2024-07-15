import { FormEvent, FormEventHandler, useState } from "react";
import { loginFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormInputField from "./FormInputField";
import FormHeading from "./FormHeading";
import FormOptionText from "./FormOptionText";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setToSignupForm } from "../../app/slices/authenticationSlice";

function LoginForm() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useAppDispatch();

    const handleFormSubmit = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            username : email,
            password : password
        }

        const response = await fetch (loginFormURL,
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                }
            });

        const data = await response.json();
        console.log(data);
    }

    return (<form onSubmit={handleFormSubmit} className='flex flex-col w-2/5 m-auto bg-white rounded-3xl'>
        <FormHeading text={"Login"}/>
        <div className='w-full p-10'>
        <FormInputField inputType={"text"} placeHolder={"Enter your e-mail"} label={"Email"} onChange={setEmail}/>
        <FormInputField inputType={'password'} placeHolder="Your Password" label="Password" onChange={setPassword}/>
        <FormButton buttonText={"Login"} onClick={() => {}}/>
        <FormOptionText infoText={"Don't have an account ?"}/>
        <FormButton buttonText={"Sign Up"} onClick={() => {dispatch(setToSignupForm())}}/>
        </div>
        </form>);
}

export default LoginForm;