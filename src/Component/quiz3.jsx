import React, { useState } from 'react';
import { getQuizData } from '../data.js'; // Import the function properly
import './quiz1.css';

const Quiz1 = () => {
    const quizData = getQuizData(); // Call the function to get data
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [responses, setResponses] = useState([]);

    const handleAnswerClick = (answer) => {
        const updatedResponses = [...responses];
        updatedResponses[currQuestion] = answer;
        setResponses(updatedResponses);

        if (answer === quizData.Avoiding_Food_Crisis[currQuestion].answer) {
            setScore(score + 1);
        }

        if (currQuestion < quizData.Avoiding_Food_Crisis.length - 1) {
            setCurrQuestion(currQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const handleResultShow = () => {
        setShowScore(true);
    };

    return (
        <div className='quiz'>
            {showScore ? (
                <div className='scoreSection'>
                    <p>You scored {score} out of {quizData.Avoiding_Food_Crisis.length}.</p>
                    <ul>
                        {quizData.Avoiding_Food_Crisis.map((question, index) => (
                            <li key={index} style={{ color: responses[index] === question.answer ? 'green' : 'red' }}>
                                {question.question} - Your Answer: {responses[index]}
                                {responses[index] !== question.answer && (
                                    <span> (Correct Answer: {question.answer})</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='quizSection'>
                    <div className='question-count'>
                        <span>Question {currQuestion + 1}</span>/{quizData.Nutrition.length}
                    </div>
                    <div className='question-text'>
                        {quizData.Avoiding_Food_Crisis[currQuestion].question}
                    </div>
                    <div className='question-options'>
                        {quizData.Avoiding_Food_Crisis[currQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(option)}
                                className='answer-button'
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className='check-score'>
                        {currQuestion === quizData.Avoiding_Food_Crisis.length - 1 && (
                            <button onClick={handleResultShow} className='check-score-button'>
                                Check Score
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz1;
