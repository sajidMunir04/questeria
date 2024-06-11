

interface Props {
    value: string,
    isCorrect: boolean,
    onClick: (arg: any) => void
}

function YesNoAnswerInputField(props : Props) {
    return (<div className='flex'>
        <div className='ml-2 rounded-full border-r-2 border-sky-500'>
        <p className='text-sky-500'>&#10004;</p>
        </div>
        <p className='ml-5'>{props.value}</p>
    </div>);
}

export default YesNoAnswerInputField;