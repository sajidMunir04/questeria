import { multipleChoiceQuestionAlias, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import QuestionInputField from "./QuestionInputField";
import MCQAnswerInputField from "./MCQAnswerInputField";
import YesNoAnswerField from "./YesNoAnswerField";

interface Props{
    inputQuestion : string
}


function QuizQuestion(props: Props) {
    const questionInfo = props.inputQuestion.split('#');
    const questionData : any = JSON.parse(questionInfo[0]).question;
    console.log(questionData);

    return (<div>
        {questionInfo[1] === simpleQuestionAlias && <div>
            <p>{questionData.questionText}</p>
            <input type='text' value={questionData.answerText}/>
        </div>}
        {questionInfo[1] === multipleChoiceQuestionAlias && <div>
            <QuestionInputField defaultValue={questionData.questionText}/>
            {questionData.answers.map((item : string,index : number) => 
            <MCQAnswerInputField defaultValue={item} isCorrectAnswer={questionData.correctAnswerIndex === index}/>)}
        </div>}
        {questionInfo[1] === yesNoQuestionAlias && <div>
            <QuestionInputField defaultValue={questionData.questionText}/>
            <YesNoAnswerField value={'Yes'} isCorrect={questionData.answerIsYes} onClick={() => {}}/>
            <YesNoAnswerField value={'No'} isCorrect={questionData.answerIsNo} onClick={() => {}}/>
            </div>}
    </div>);
}


export default QuizQuestion;
