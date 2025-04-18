import { useContext, useEffect, useState } from "react";
import SelectPlayer from "./SelectPlayer";
import { useNavigate } from "react-router-dom";
import { WordContext } from "../../Context/WordContext";
import { gameWords } from "../../data/wordsList";

function SelectPlayerContainer() {
    const [inputValue, setInputValue] = useState("apple");
    const [desValue, setDesValue] = useState("A fruit");
    let navigate = useNavigate();

    const [wordList, setWordList] = useContext(WordContext);

    useEffect(() => {
        // Set words from gameWords array
        setWordList(gameWords);
        const randomIndex = Math.floor(Math.random() * gameWords.length);
        setInputValue(gameWords[randomIndex].wordValue);
        setDesValue(gameWords[randomIndex].wordHint);
    }, []);

    function SinglePlayerClickHandler() {
        navigate('/start', { state: { word: { inputValue }, defination: { desValue } } });
    }

    function MultiPlayerClickHandler() {
        navigate('/multiplayer')
    }

    return (
        <SelectPlayer
            MultiPlayerClickHandler={MultiPlayerClickHandler}
            SinglePlayerClickHandler={SinglePlayerClickHandler}
        />
    );
}

export default SelectPlayerContainer;