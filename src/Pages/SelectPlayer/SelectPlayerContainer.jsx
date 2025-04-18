import { useContext, useEffect,useState } from "react";
import SelectPlayer from "./SelectPlayer";
import { useNavigate } from "react-router-dom";
import { WordContext } from "../../Context/WordContext";
function SelectPlayerContainer() {
    const [inputValue, setInputValue] = useState("apple");
    const [desValue, setDesValue] = useState("A fruit");
    let navigate = useNavigate();

    const [wordList , setWordList] = useContext(WordContext);
    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();

        setWordList(data);
        const randomIndex = Math.floor(Math.random()*data.length);
        setInputValue(data[randomIndex].wordValue);
        setDesValue(data[randomIndex].wordHint);
    }

    useEffect(() => {
        fetchWords();
    }, []);
    function SinglePlayerClickHandler(){
        navigate('/start',{state:{word : {inputValue}, defination : {desValue}}});
    }
    function MultiPlayerClickHandler(){
        navigate('/multiplayer')
    }
  return (
    <SelectPlayer
        MultiPlayerClickHandler={MultiPlayerClickHandler}
        SinglePlayerClickHandler={SinglePlayerClickHandler}
    ></SelectPlayer>
  );
}
export default SelectPlayerContainer;