import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import StartGame from "./StartGame";
import { WordContext } from "../../Context/WordContext";

function StartGameContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    const [wordList, setWorldList] = useContext(WordContext);
    const [value, setValue] = useState(location.state.word.inputValue);
    const [defination, setDefination] = useState(location.state.defination.desValue);
    const [guessedLetter, setGuessedLetter] = useState('');
    const [incorrectGuessedLetter, setIncorrectGuessedLetter] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    
    // Determine if we're in multiplayer mode by checking if the word is from wordList
    const isMultiplayerMode = !wordList.some(word => word.wordValue === value);
    
    const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let AlphabetsSet = new Set(Alphabets);

    function onLetterClickHandler(letter) {
        if (!isGameOver && !isGameWon && !guessedLetter.includes(letter)) {
            setGuessedLetter(prev => prev + letter);
            
            if (!value.toUpperCase().includes(letter)) {
                setIncorrectGuessedLetter(prev => prev + 1);
            }
        }
    }

    function onCloseHandler() {
        if (isMultiplayerMode) {
            // For multiplayer, redirect back to multiplayer page
            navigate('/multiplayer');
        } else {
            // For single player, get new random word
            let data = wordList[Math.floor(Math.random() * wordList.length)];
            while (data.wordValue === value) {
                data = wordList[Math.floor(Math.random() * wordList.length)];
            }
            setValue(data.wordValue);
            setDefination(data.wordHint);
            setGuessedLetter('');
            setIncorrectGuessedLetter(0);
            setIsGameOver(false);
            setIsGameWon(false);
        }
    }

    const onUndoHandler = () => {
        if (guessedLetter.length > 0) {
            setGuessedLetter(prevLetters => prevLetters.slice(0, -1));
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            let letter  = e.key.toUpperCase();
            if (AlphabetsSet.has(letter)) {
                onLetterClickHandler(letter);
            }
        };
        if (!isGameOver && !isGameWon) {
            window.addEventListener('keydown', handleKeyPress);
        }else{
            window.removeEventListener('keydown', handleKeyPress);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isGameOver, isGameWon, guessedLetter]);
    
    useEffect(() => {
        const originalWordSet = new Set(value.toUpperCase());
        const guessedLetterSet = new Set(guessedLetter.toUpperCase());
        if ([...originalWordSet].every(letter => guessedLetterSet.has(letter))) {
            setIsGameWon(true);
        }
        if (incorrectGuessedLetter > 6 && !isGameWon) {
            setIsGameOver(true);
        }
    }, [guessedLetter]);

    return (
        <StartGame
            value={value}
            guessedLetter={guessedLetter}
            isGameOver={isGameOver}
            isGameWon={isGameWon}
            onLetterClickHandler={onLetterClickHandler}
            defination={defination}
            incorrectGuessedLetter={incorrectGuessedLetter}
            onCloseHandler={onCloseHandler}
            onUndoHandler={onUndoHandler}
            showChangeWord={!isMultiplayerMode} // Only show change word button in single player mode
        >
        </StartGame>
    );
}

export default StartGameContainer;