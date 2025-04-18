import getAllMaskedChars from "./maskingUtility";

function MaskedText({originalWord , guessedLetter}){
    let maskedWord = getAllMaskedChars(originalWord, guessedLetter);
    return(
        <>
            <div className="text-center flex justify-center items-center">
                {maskedWord.split('').map((element, index)=>{
                    return(
                        <p key={index} className="text-3xl tracking-wider ml-[20px] font-semibold text-pink-100">{element}</p>
                    )
                })}
            </div>
            
        </>
    );
}

export default MaskedText;