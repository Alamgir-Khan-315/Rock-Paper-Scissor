import React, { useState } from "react";

export default function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  const playGame = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
      setResult(
        `It's a tie! ${icons[playerChoice]} ${playerChoice} vs ${icons[computerChoice]} ${computerChoice}`
      );
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult(
        `You win! ${icons[playerChoice]} ${playerChoice} beats ${icons[computerChoice]} ${computerChoice}`
      );
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult(
        `You lose! ${icons[computerChoice]} ${computerChoice} beats ${icons[playerChoice]} ${playerChoice}`
      );
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6">
      <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 backdrop-blur-md text-center w-full max-w-xs sm:max-w-lg">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
          Rock Paper Scissors
        </h1>
        
        <p className="text-gray-300 mb-6 text-sm sm:text-base">Choose your weapon</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
          {["rock", "paper", "scissors"].map((choice) => (
            <button
              key={choice}
              onClick={() => playGame(choice)}
              className="flex flex-col items-center bg-gray-900 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-lg hover:scale-110 hover:border-blue-500 hover:shadow-blue-500/50 transition-all"
            >
              <span className="text-4xl sm:text-5xl">{icons[choice]}</span>
              <span className="mt-2 capitalize text-white text-sm sm:text-base">{choice}</span>
            </button>
          ))}
        </div>

        <div className="text-gray-200 mb-4 text-sm sm:text-lg">
          {result && (
            <div className="bg-gray-900 bg-opacity-50 px-3 sm:px-4 py-2 rounded-lg border border-gray-700">
              {result}
            </div>
          )}
        </div>

        <div className="text-sm sm:text-lg font-semibold text-gray-300">
          Player: <span className="text-green-400">{playerScore}</span> | Computer:{" "}
          <span className="text-red-400">{computerScore}</span>
        </div>
      </div>
    </div>
  );
}
