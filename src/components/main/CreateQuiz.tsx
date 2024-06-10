import { ChangeEvent, useState } from "react";
import { MultipleChoiceQuestion } from "../utils/MultipleChoiceQuestion";
import { Question } from "../utils/Question";
import { YesNoQuestion } from "../utils/YesNoQuestion";
import QuizQuestion from "../common/QuizQuestion";
import { multipleChoiceQuestionAlias, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import QuestionInputField from "../common/QuestionInputField";
import MCQAnswerInputField from "../common/MCQAnswerInputField";
import SimpleButton from "../common/SimpleButton";
import YesNoAnswerInputField from "../common/YesNoAnswerField";
import { SimpleQuestion } from "../utils/SimpleQuestion";
import AnswerInputField from "../common/AnswerInputField";


function CreateQuiz() {

    const [addingQuestion, setQuestionAddStatus] = useState(false);
    const [multipleChoiceQuestion,setMultipleChoiceQuestion] = useState<MultipleChoiceQuestion | undefined>(undefined);
    const [yesNoQuestion,setYesNoQuestion] = useState<YesNoQuestion | undefined>(undefined);
    const [simpleQuestion,setSimpleQuestion] = useState<SimpleQuestion | undefined>(undefined);
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


    const handleSimpleQuestion = () => {
        const newQuestion : SimpleQuestion = {
            questionText: "",
            answerText: ""
        }
        setSimpleQuestion(newQuestion);
        setQuestionAddStatus(false);
    }


    return (<div className='mt-4'>
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
                <div className='m-auto w-1/2 flex items-center'>
                    <MCQAnswerInputField canEdit={true} onDelete={() => {
                        const question : MultipleChoiceQuestion = multipleChoiceQuestion;
                        const filteredAnswers = question.answers.filter((answer,thisIndex) => thisIndex !== index);
                        question.answers = filteredAnswers;

                        if (question.correctAnswerIndex === index)
                            question.correctAnswerIndex = 0;

                        console.log(multipleChoiceQuestion.answers,filteredAnswers);

                        setMultipleChoiceQuestion(question);
                        setStateChange(!stateChange);
                    }} defaultValue={item} isCorrectAnswer={multipleChoiceQuestion.correctAnswerIndex === index} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const question = multipleChoiceQuestion;
                        question.answers[index] = e.target.value;
                        setMultipleChoiceQuestion(question);
                    }} onClick={() => {
                        const question = multipleChoiceQuestion;
                        question.correctAnswerIndex = index;
                        setMultipleChoiceQuestion(question);
                        console.log(question);
                        setStateChange(!stateChange);
                    }}
                    />
                </div>
            ))}
            <div className='flex items-center justify-center'>
            <SimpleButton buttonText={"Add Option"} onClick={() => {
                const answerOption : string = ' ';
                const question = multipleChoiceQuestion;
                question.answers.push(answerOption);
                    setMultipleChoiceQuestion(question);
                    setStateChange(!stateChange);
                }}/>
            <SimpleButton buttonText={"Cancel"} onClick={() => {
                setMultipleChoiceQuestion(undefined);
            }}/>
            <SimpleButton buttonText={"Save Question"} onClick={() => {
                const theQuestion : Question = {
                    question: multipleChoiceQuestion
                }
                const newQuestions = [...questions,JSON.stringify(theQuestion) +'#' + multipleChoiceQuestionAlias];
                setStateChange(!stateChange);
                setQuestions(newQuestions);
                setMultipleChoiceQuestion(undefined);
            }}/>
            </div>
        </div>}
        {yesNoQuestion !== undefined && <div>
            <QuestionInputField defaultValue={yesNoQuestion.questionText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                const question = yesNoQuestion;
                question.questionText = e.target.value;
            }}/>
            <YesNoAnswerInputField value={'Yes'} isCorrect={yesNoQuestion.answerIsYes} 
            onClick={() => {
                const question = yesNoQuestion;
                question.answerIsNo = false;
                question.answerIsYes = true;
                setYesNoQuestion(question);
            }} />
            <YesNoAnswerInputField value={'No'} isCorrect={yesNoQuestion.answerIsYes} 
            onClick={() => {
                const question = yesNoQuestion;
                question.answerIsNo = true;
                question.answerIsYes = false;
                setYesNoQuestion(question);
            }} />
            <SimpleButton buttonText={'Save Question'} onClick={() => {
                const theQuestion : Question = {
                    question: yesNoQuestion
                }
                const newQuestions = [...questions,JSON.stringify(theQuestion) +'#' + yesNoQuestionAlias];
                setStateChange(!stateChange);
                setQuestions(newQuestions);
                setYesNoQuestion(undefined);
            }}/>
        </div>}
        {simpleQuestion !== undefined && <div className='flex flex-col mb-6'>
            <QuestionInputField defaultValue={simpleQuestion.questionText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                const question = simpleQuestion;
                question.questionText = e.target.value;
            }}/>
            <AnswerInputField defaultValue={simpleQuestion.answerText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                const question = simpleQuestion;
                question.answerText = e.target.value;
            }}/>
            <div className='flex'>
            <div className='w-1/2'>
                <SimpleButton buttonText={'Save Question'} onClick={() => {
                    const theQuestion : Question = {
                        question: simpleQuestion
                    }
                    const newQuestions = [...questions,JSON.stringify(theQuestion) +'#' + simpleQuestionAlias];
                    setStateChange(!stateChange);
                    setQuestions(newQuestions);
                    setSimpleQuestion(undefined);
                }}/>
            </div>
            <div className='w-1/2'>
                <SimpleButton buttonText={"Cancel"} onClick={() => {
                    setSimpleQuestion(undefined);
                }}/>
            </div>
            </div>
        </div>}
        {addingQuestion && <div>
            <SimpleButton buttonText={"Multiple Choice Question"} onClick={handleMultipleChoiceQuestionButton}/>
            <SimpleButton buttonText={"Yes No Question"} onClick={handleYesNoQuestionButton}/>
            <SimpleButton buttonText={"Simple Question"} onClick={handleSimpleQuestion}/>
        </div>}
        <div className='mt-8'>
            <button onClick={() => setQuestionAddStatus(true)}>Add Question</button>
        </div>
        <div>

        </div>
    </div>);
}

export default CreateQuiz;