import React, { useState } from "react";

export default function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const playGame = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
      setResult(`It's a tie! Both chose ${playerChoice}.`);
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult(`You win! ${playerChoice} beats ${computerChoice}.`);
      setPlayerScore(playerScore + 1);
    } else {
      setResult(`You lose! ${computerChoice} beats ${playerChoice}.`);
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-blue-500 drop-shadow-[0_0_8px_#3b82f6]">
        Rock Paper Scissors
      </h1>
      <p className="mt-2">Choose your weapon:</p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => playGame("rock")}
          className="bg-blue-900 px-4 py-2 rounded-lg shadow-[0_0_8px_#3b82f6] hover:bg-blue-700 hover:scale-110 transition-all"
        >
          ✊ Rock
        </button>
        <button
          onClick={() => playGame("paper")}
          className="bg-blue-900 px-4 py-2 rounded-lg shadow-[0_0_8px_#3b82f6] hover:bg-blue-700 hover:scale-110 transition-all"
        >
          ✋ Paper
        </button>
        <button
          onClick={() => playGame("scissors")}
          className="bg-blue-900 px-4 py-2 rounded-lg shadow-[0_0_8px_#3b82f6] hover:bg-blue-700 hover:scale-110 transition-all"
        >
          ✌️ Scissors
        </button>
      </div>

      <div className="mt-5 text-lg">{result}</div>
      <div className="mt-2 text-lg font-semibold">
        Player: {playerScore} | Computer: {computerScore}
      </div>
    </div>
  );
}
