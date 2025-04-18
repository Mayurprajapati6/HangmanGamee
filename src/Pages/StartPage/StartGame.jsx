import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterKeyboard from "../../Components/Letterkeyboard/LetterKeyboard";
import Modal from "../../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import HangMan from "../../Components/Hangman/Hangman";
import Button from "../../Components/Buttons/Button";

function StartGame({
    value, 
    guessedLetter, 
    isGameOver, 
    isGameWon, 
    onLetterClickHandler, 
    defination, 
    incorrectGuessedLetter, 
    onCloseHandler,
    onUndoHandler,
    showChangeWord
}) {
    let navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Left Section */}
                <div className="lg:w-3/5 space-y-8">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-5xl text-white font-bold tracking-wider animate-pulse">
                            Guess The Word
                        </h1>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <h2 className="text-xl md:text-2xl text-white">
                                <span className="text-yellow-400 font-semibold">Hint: </span> 
                                {defination.toUpperCase()}
                            </h2>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <MaskedText
                            originalWord={value}
                            guessedLetter={guessedLetter}
                        />
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <LetterKeyboard
                            originalWord={value}
                            guessedLetter={guessedLetter}
                            onLetterButtonClick={onLetterClickHandler}
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-2/5 flex flex-col items-center justify-center space-y-4">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                        <HangMan step={incorrectGuessedLetter} />
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full max-w-xs">
                        <Button
                            text="Change Word"
                            buttonType="warning"
                            onClickHandler={onCloseHandler}
                            className="transform hover:scale-105 transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg"
                        />
                        <Button
                            text="Undo Last Guess"
                            buttonType="secondary"
                            onClickHandler={onUndoHandler}
                            disabled={guessedLetter.length === 0}
                            className="transform hover:scale-105 transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={isGameWon}
                onClose={onCloseHandler}
                redirectToHome={() => {navigate('/')}}
                title="🎉 Congratulations!"
                message="You have won the game!"
            />
            <Modal
                isOpen={isGameOver}
                onClose={onCloseHandler}
                redirectToHome={() => {navigate('/')}}
                title="😔 Game Over"
                message={`You have lost the game. Try again!\nThe word was "${value.toUpperCase()}"`}
            />

            {showChangeWord ? (
                <button onClick={onCloseHandler}>
                    Change Word
                </button>
            ) : null}
        </div>
    );
}

export default StartGame;