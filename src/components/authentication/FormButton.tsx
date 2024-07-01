
interface Props {
    buttonText: string,
    onClick:() => void
}

function FormButton(props : Props) {
    return (<button className='mb-8 w-full bg-purple-background text-white font-poppinsMedium text-xl' 
        onClick={props.onClick}>{props.buttonText}</button>);
}

export default FormButton;