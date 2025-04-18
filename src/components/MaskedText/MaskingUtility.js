function getAllMaskedChars(originalWord, guessedLetter){
    originalWord = originalWord.toUpperCase();
    guessedLetter = guessedLetter.toUpperCase();
    let maskedWord = '';
    const guessedLetterSet = new Set(guessedLetter);
    for(let i = 0 ; i < originalWord.length; i++){
        if(guessedLetterSet.has(originalWord[i])){
            maskedWord += originalWord[i];
        }else{
            maskedWord += '_';
        }
    }
    return maskedWord;
}

export default getAllMaskedChars;