

interface Props{
    infoText: string
}


function FormOptionText(props : Props) {
    return (<p className='text-center font-poppinsSemiBold text-xl mb-3'>{props.infoText}</p>);
}

export default FormOptionText;