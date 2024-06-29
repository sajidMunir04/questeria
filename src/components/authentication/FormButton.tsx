
interface Props {
    buttonText: string,
    onClick:() => void
}

function FormButton(props : Props) {
    return (<button onClick={props.onClick}>{props.buttonText}</button>);
}

export default FormButton;