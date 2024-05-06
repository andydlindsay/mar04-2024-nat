import React, { useState } from "react";

const Game = () => {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guesses, setGuesses] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [gameEnded, setGameEnded] = useState(false);
  const [gameResult, setGameResult] = useState(""); // New state variable for game result

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuesses([]);
    setAttempts(0);
    setUserGuess("");
    setGameEnded(false);
    setGameResult("");
  };

  const handleGuess = () => {
    const guessNumber = parseInt(userGuess, 10);
    const newGuess = { guess: guessNumber, result: "" };

    setAttempts(attempts + 1);

    if (guessNumber === secretNumber) {
      newGuess.result = "Correct!";
      setGuesses([...guesses, newGuess]);
      setGameEnded(true);
      return setGameResult("You won!"); // Set game result to "You won!"
    } else if (guessNumber < secretNumber) {
      newGuess.result = "Too low!";
      setGuesses([...guesses, newGuess]);
    } else if (guessNumber > secretNumber) {
      newGuess.result = "Too high!";
      setGuesses([...guesses, newGuess]);
    }

    if (attempts >= 4) {
      setGameEnded(true);
      setGameResult("You lost!"); // Set game result to "You lost!"
    }
  };

  return (
    <div>
      <h2>Guess the Number Game</h2>
      <p>Guess a number between 1 and 100.</p>
      {!gameEnded && (
        <>
          <input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={handleGuess}>Guess</button>
        </>
      )}
      {gameEnded && (
        <>
          <p>{gameResult}</p>
          <button onClick={resetGame}>Restart</button>
        </>
      )}
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>
            Guess: {guess.guess}, Result: {guess.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
