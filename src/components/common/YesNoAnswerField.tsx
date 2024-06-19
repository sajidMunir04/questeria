import SimpleButton from "./SimpleButton";


interface Props {
    value: string,
    isCorrect: boolean,
    onClick: (arg: any) => void
}

function YesNoAnswerInputField(props : Props) {
    return (<div className='flex mb-3 items-center'>
        <div className='ml-2 rounded-full border-sky-500 border-solid border-2 w-8 h-8 flex'>
        <p className='text-sky-500 m-auto'>&#10004;</p>
        </div>
        <p className='ml-5'>{props.value}</p>
        {props.isCorrect && <p className='ml-10 text-green-400'>Correct Answer</p>}
        {!props.isCorrect && <div className='ml-5'>
        <SimpleButton buttonText={"Mark as Correct"} onClick={props.onClick}/>
        </div>}
    </div>);
}

export default YesNoAnswerInputField;