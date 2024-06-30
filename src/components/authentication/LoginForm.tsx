import { loginFormURL } from "../../lib/constants";
import FormButton from "./FormButton";
import FormInputField from "./FormInputField";
import { AuthState } from "./authState";
import { FormProps } from "./formProps";

function LoginForm(props : FormProps) {

    return (<>{props.authState === AuthState.LoginForm &&
    <form action={loginFormURL} className='flex flex-col w-2/5 m-auto'>
            <FormInputField inputType={"text"} placeHolder={"Enter your e-mail"} label={"Email"}/>
            <FormInputField inputType={'password'} placeHolder="Your Password" label="Password"/>
            <FormButton buttonText={"Login"} onClick={() => {}}/>
            </form>}
    </>);
}

export default LoginForm;