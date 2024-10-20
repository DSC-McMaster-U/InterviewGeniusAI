import React, { useState } from 'react';

function InterviewSimulation() {
    const [simulationStarted, setSimulationStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
        "Tell me about yourself.",
        "What are your strengths?",
        "Why should we hire you?"
    ];

    const startSimulation = () => {
        setSimulationStarted(true);
        setCurrentQuestion(0);
    };

    const stopSimulation = () => {
        setSimulationStarted(false);
    };

    const nextQuestion = () => {
        setCurrentQuestion((prev) => (prev + 1) % questions.length);
    };

    return (
        <div>
            <h2>Interview Simulation</h2>
            {simulationStarted ? (
                <div>
                    <p>Question: {questions[currentQuestion]}</p>
                    <button onClick={nextQuestion}>Next Question</button>
                    <button onClick={stopSimulation}>Stop Simulation</button>
                </div>
            ) : (
                <button onClick={startSimulation}>Start Simulation</button>
            )}
        </div>
    );
}

export default InterviewSimulation;
