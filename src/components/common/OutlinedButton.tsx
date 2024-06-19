

function OutlinedButton(props : ButtonProps) {
    return (<button className='w-full border-2 rounded-full text-purple-background bg-transparent border-purple-background' onClick={props.onClick}>{props.buttonText}</button>);
}

export default OutlinedButton;