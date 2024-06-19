

function SimpleButton(props : ButtonProps) {
    return (<button className='w-full bg-purple-background text-white rounded-full' onClick={props.onClick}>{props.buttonText}</button>);
}

export default SimpleButton;