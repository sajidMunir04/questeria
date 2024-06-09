import { ChangeEvent, useEffect, useState } from "react";
import { MultipleChoiceQuestion } from "../utils/MultipleChoiceQuestion";
import { Question } from "../utils/Question";
import { YesNoQuestion } from "../utils/YesNoQuestion";
import QuizQuestion from "../common/QuizQuestion";
import { multipleChoiceQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import QuestionInputField from "../common/QuestionInputField";


function CreateQuiz() {

    const [addingQuestion, setQuestionAddStatus] = useState(false);
    const [multipleChoiceQuestion,setMultipleChoiceQuestion] = useState<MultipleChoiceQuestion | undefined>(undefined);
    const [yesNoQuestion,setYesNoQuestion] = useState<YesNoQuestion | undefined>(undefined);
    const [stateChange,setStateChange] = useState(false);
    const [questions,setQuestions] = useState<string[]>([]);

    const handleMultipleChoiceQuestionButton = () => {
        const newQuestion : MultipleChoiceQuestion = {
            questionText: "",
            answers: [],
            correctAnswerIndex: 0
        }
        setMultipleChoiceQuestion(newQuestion);
        setQuestionAddStatus(false);
    }

    const handleYesNoQuestionButton = () => {
        const newQuestion : YesNoQuestion = {
            questionText: "",
            answerIsYes: false,
            answerIsNo: false
        }
        setYesNoQuestion(newQuestion);
        setQuestionAddStatus(false);
    }


    return (<div>
        {<p>{questions.length}</p>}
        {
            questions.map((item) => (<QuizQuestion inputQuestion={item} />))
        }
        {multipleChoiceQuestion !== undefined && <div className='flex flex-col'>
            <QuestionInputField defaultValue={multipleChoiceQuestion.questionText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const question = multipleChoiceQuestion;
                    question.questionText = e.target.value;
                    setMultipleChoiceQuestion(question);
            }}/>
            {multipleChoiceQuestion.answers.map((item,index) => (
                <div className='flex items-center h-10'><p>{index + 1} - </p>
                <input className='bg-white border-4 border-slate-400' key={item + index} type='text' defaultValue={item} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const question = multipleChoiceQuestion;
                    question.answers[index] = e.target.value;
                    setMultipleChoiceQuestion(question);
                }}/>
                <label className='flex'  style={{color: 'white', border: 'none' , borderRadius: '50px'}}>
                <input type='checkbox' className='m-auto ml-5 bg-white w-8 h-8' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const question = multipleChoiceQuestion;
                    question.correctAnswerIndex = index;
                    setMultipleChoiceQuestion(question);
                }}/>
                </label>
                </div>
                ))}
            <button onClick={() => {
                const answerOption : string = ' ';
                const question = multipleChoiceQuestion;
                question.answers.push(answerOption);
                    setMultipleChoiceQuestion(question);
                    setStateChange(!stateChange);
                }}>Add Option</button>
            <button onClick={() => {
                const theQuestion : Question = {
                    question: multipleChoiceQuestion
                }
                const newQuestions = [...questions,JSON.stringify(theQuestion) +'#' + multipleChoiceQuestionAlias];
                setStateChange(!stateChange);
                setQuestions(newQuestions);
                setMultipleChoiceQuestion(undefined);
            }} className='mt-8'>Save Question</button>
        </div>}
        {yesNoQuestion !== undefined && <div>
            <input type='text' defaultValue={yesNoQuestion.questionText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                const question = yesNoQuestion;
                question.questionText = e.target.value;
            }}/>
            <div>
                <label>
                    <input onClick={() => {
                        const question = yesNoQuestion;
                        question.answerIsNo = false;
                        question.answerIsYes = true;
                    }} type='checkbox'/>Yes
                </label>
            </div>
            <div>
                <label>
                    <input onClick={() => {
                        const question = yesNoQuestion;
                        question.answerIsNo = true;
                        question.answerIsYes = false;
                    }} type='checkbox'/>No
                </label>
            </div>
            <button onClick={() => {
                const theQuestion : Question = {
                    question: yesNoQuestion
                }
                const newQuestions = [...questions,JSON.stringify(theQuestion) +'#' + yesNoQuestionAlias];
                setStateChange(!stateChange);
                setQuestions(newQuestions);
                setYesNoQuestion(undefined);
            }}>Save Question</button>
        </div>}
        {addingQuestion && <div>
        <div>
                <button onClick={handleMultipleChoiceQuestionButton}>Multiple Choice Question</button>
                <button onClick={handleYesNoQuestionButton}>Yes No Question</button>
            </div>
        </div>}
        <div className='mt-8'>
            <button onClick={() => setQuestionAddStatus(true)}>Add Question</button>
        </div>
        <div>

        </div>
    </div>);
}

export default CreateQuiz;