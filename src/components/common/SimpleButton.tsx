
interface Props {
    buttonText: string,
    onClick: (arg: any) => void
}

function SimpleButton(props : Props) {
    return (<button className='w-full' onClick={props.onClick}>{props.buttonText}</button>);
}

export default SimpleButton;