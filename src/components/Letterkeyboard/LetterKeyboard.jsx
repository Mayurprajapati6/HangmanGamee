const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function LetterKeyboard({originalWord, guessedLetter, onLetterButtonClick}) {
    let guessedLetterSet = new Set(guessedLetter.toUpperCase());
    let originalWordSet = new Set(originalWord.toUpperCase());
    
    function buttonStyle(letter){
        if(guessedLetterSet.has(letter)){
            if(originalWordSet.has(letter)){
                return "bg-green-500 cursor-pointer";
            }else{
                return "bg-red-500 cursor-pointer";
            }
        }else{
            return "bg-white hover:bg-gray-100 cursor-pointer";
        }
    }

    return(
        Alphabets.map((letter, index)=>{
            return(
                <button 
                    key={index}
                    disabled={guessedLetterSet.has(letter)}
                    className={`h-12 w-12 m-2 text-2xl text-amber-950 font-semibold rounded-lg shadow-inner ${buttonStyle(letter)}`}
                    onClick={()=>onLetterButtonClick(letter)}
                >
                    {letter}
                </button>
            );
        })
    );
}

export default LetterKeyboard;