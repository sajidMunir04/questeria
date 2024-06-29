import { loginFormURL } from "../lib/constants";
import FormButton from "./FormButton";
import FormInputField from "./FormInputField";


function LoginForm() {

    

    return (
    <div className='w-full h-full absolute bg-zinc-900'>
    <form action={loginFormURL} className='flex flex-col w-2/5 m-auto'>
            <FormInputField inputType={"text"} placeHolder={"Enter your e-mail"} label={"Email"}/>
            <FormInputField inputType={'password'} placeHolder="Your Password" label="Password"/>
            <FormButton buttonText={"Login"} onClick={() => {}}/>
            </form>
    </div>);
}

export default LoginForm;