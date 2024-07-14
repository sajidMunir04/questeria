import Draggable from "react-draggable";

interface Props {
    text: string
}

function MatchingQuestionAnswerOption(props : Props) {
    return (
    <Draggable axis="y">
    <div className='bg-white rounded-lg text-center p-3 mb-2'>
        <p className='mb-0 font-poppinsSemiBold text-xl'>{props.text}</p>
    </div>
    </Draggable>
    );
}

export default MatchingQuestionAnswerOption;