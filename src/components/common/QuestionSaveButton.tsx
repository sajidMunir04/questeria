
interface Props {
    buttonText: string,
    onClick: (arg: any) => void
}

function QuestionSaveButton(props : Props) {
    return (<button className='mt-8' onClick={props.onClick}>{props.buttonText}</button>);
}

export default QuestionSaveButton;