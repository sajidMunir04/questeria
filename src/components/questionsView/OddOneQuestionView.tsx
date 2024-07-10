import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionText: string,
    answers: string[]
}

function OddOneQuestionView (props : Props) {
    return (<div>
            <QuestionText questionText={props.questionText}/>
            <div>
                {props.answers.map((item) => <div className='bg-white mb-3 rounded-xl text-center font-poppinsSemiBold'><p className='text-2xl'>{item}</p></div>)}
            </div>
    </div>);
}

export default OddOneQuestionView;