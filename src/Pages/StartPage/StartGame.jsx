import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterKeyboard from "../../Components/Letterkeyboard/LetterKeyboard";
import Modal from "../../Components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import HangMan from "../../Components/Hangman/Hangman";
import Button from "../../Components/Buttons/Button";

function  StartGame({value, guessedLetter , isGameOver , isGameWon , onLetterClickHandler, defination , incorrectGuessedLetter , onCloseHandler}) {
    let navigate = useNavigate();
    return(
        <div className="h-full p-8 w-full flex flex-row bg-black overflow-hidden">
            <div className="h-full w-[60%] pl-7 gap-10 flex flex-col mt-28 items-center">
                <h1 className="text-5xl text-white font-bold text-center right-[14px] relative tracking-widest">Guess The Word</h1>
                <h1 className="text-3xl text-black font-semibold text-center right-[14px] relative bg-blue-400 p-6 rounded-sm"><span className="text-white text-3xl ">Defination:</span> {(defination).toUpperCase()}</h1>
                <MaskedText
                    originalWord={value}
                    guessedLetter={guessedLetter}
                ></MaskedText>
                <div className="bg-yellow-500 w-[80%] flex justify-center mt-7 flex-wrap items-center rounded-xl pt-7 pb-7 px-5">
                    <LetterKeyboard
                        originalWord={value}
                        guessedLetter={guessedLetter}
                        onLetterButtonClick = {onLetterClickHandler}>
                    </LetterKeyboard>
                </div>
            </div>
            <div className="h-full w-[40%] mt-[10px] flex justify-center flex-col items-center">
                <HangMan
                    step={incorrectGuessedLetter}
                ></HangMan>
                <div>
                <Button
                    text="Change Word"
                    buttonType="warning"
                    onClickHandler={onCloseHandler}
                    className = {"mt-10 h-12 w-12"}
                ></Button>
                </div>
            </div>
            <div>
                <Modal
                        isOpen={isGameWon}
                        onClose={onCloseHandler}
                        redirectToHome={() => {navigate('/')}}
                        title="Congratulations!"
                        message="You have won the game!"
                    />
                    <Modal
                        isOpen={isGameOver}
                        onClose={onCloseHandler}
                        redirectToHome={() => {navigate('/')}}
                        title="Game Over"
                        message={`You have lost the game. Try again! 
                        \nThe word was "${value.toUpperCase()}"`}
                    />
            </div>
        </div>
    );
}

export default StartGame;