import { useEffect, useState } from "react";
import { MultipleChoiceQuestion } from "../utils/MultipleChoiceQuestion";
import { Question } from "../utils/Question";
import { YesNoQuestion } from "../utils/YesNoQuestion";


function CreateQuiz() {

    const [addingQuestion, setQuestionAddStatus] = useState(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [multipleChoiceQuestion,setMultipleChoiceQuestion] = useState<MultipleChoiceQuestion | undefined>(undefined);

    const handleMultipleChoiceQuestionButton = () => {
        const newQuestion : MultipleChoiceQuestion = {
            question: "",
            answers: [],
            correctAnswerIndex: 0
        }
        setMultipleChoiceQuestion(newQuestion);
    }

    const handleYesNoQuestionButton = () => {
        const newQuestion : YesNoQuestion = {
            question: "",
            answerIsYes: false,
            answerIsNo: false
        }
    }

    return (<div>
        <div>
            <button onClick={() => setQuestionAddStatus(true)}>Add Question</button>
        </div>
        {addingQuestion && <div>
        <div>
                <button onClick={handleMultipleChoiceQuestionButton}>Multiple Choice Question</button>
                <button onClick={handleYesNoQuestionButton}>Yes No Question</button>
            </div>
        </div>}
        {multipleChoiceQuestion !== undefined && <div>
            <input type='text' defaultValue={multipleChoiceQuestion.question} placeholder="Question ?"/>
            {multipleChoiceQuestion.answers.map((item,index) => (<input key={item} type='text' defaultValue={item}/>))}
            <button onClick={() => {
                const answerOption : string = ' ';
                const question = multipleChoiceQuestion;
                question.answers.push(answerOption);
                setMultipleChoiceQuestion(question);
                console.log(question);
            }}>Add Option</button>
        </div>}
        <div>

        </div>
    </div>);
}

export default CreateQuiz;