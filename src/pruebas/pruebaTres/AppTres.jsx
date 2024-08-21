import React, { useState } from "react";

const style = {
  container: {
    padding: "20px",
    border: "2px solid #000000",
    borderRadius: "15px",
    width: "auto",
    marginBottom: "20px",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  options: {
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  feedback: {
    marginTop: "20px",
    fontSize: "16px",
  },
};

const AppTres = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
    {
      question: "What is the capital of Spain?",
      options: ["Madrid", "Barcelona", "Valencia", "Seville"],
      correct: "Madrid",
    },
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Milan", "Naples", "Turin"],
      correct: "Rome",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [prevFeedback, setPrevFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false); // Nuevo estado para saber si el quiz ha terminado

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    let updatedScore = score;
    let newFeedback = "";

    if (selectedOption === currentQuestion.correct) {
      updatedScore += 1;
      newFeedback = "Correct!";
    } else {
      newFeedback = "Incorrect.";
    }

    // Actualizar feedback previo y score solo si no es la última pregunta
    if (currentQuestionIndex < questions.length - 1) {
      setPrevFeedback(
        `The previous answer was ${newFeedback.toLowerCase()}. Your current score is ${updatedScore}.`
      );
    } else {
      setPrevFeedback("");
    }

    setScore(updatedScore);
    setFeedback(newFeedback);

    // Avanzar a la siguiente pregunta después de una pausa
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback("");
        setSelectedOption("");
      } else {
        setQuizCompleted(true); // Marcar el quiz como completado
        setPrevFeedback("");
        setSelectedOption("");
        setFeedback(
          `Quiz completed! Your final score is ${updatedScore} out of ${questions.length}.`
        );
      }
    }, 500);
  };

  return (
    <div style={style.container}>
      {prevFeedback && !quizCompleted && (
        <div>
          <p>{prevFeedback}</p>
        </div>
      )}
      {!quizCompleted && (
        <>
          <div style={style.question}>
            <p>{questions[currentQuestionIndex].question}</p>
          </div>
          <div style={style.options}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            style={style.button}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit
          </button>
        </>
      )}
      <div style={style.feedback}>{feedback}</div>
    </div>
  );
};

export default AppTres;
