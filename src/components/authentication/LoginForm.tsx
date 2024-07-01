import { FormEvent, FormEventHandler } from "react";
import { loginFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormInputField from "./FormInputField";
import FormHeading from "./FormHeading";

function LoginForm() {

    const handleFormSubmit = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            username : 'asad',
            password : 'adasd'
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
        <FormInputField inputType={"text"} placeHolder={"Enter your e-mail"} label={"Email"}/>
        <FormInputField inputType={'password'} placeHolder="Your Password" label="Password"/>
        <FormButton buttonText={"Login"} onClick={() => {}}/>
        </div>
        </form>);
}

export default LoginForm;