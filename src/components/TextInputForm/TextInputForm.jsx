import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType , handleFormSubmit , handleTextInputChange , handleShowHideClick , handleHintTextInputChange}) {

    return (
        <form >
            {/*Input for word/phrase* */}
            <div className="w-full">
                {/*For word/phrase* */}
                <TextInput 
                    type={inputType}
                    label="Enter a Word or Phrase"
                    placeholder="Enter a word of phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />

                {/*for hint to identify your word/phrase* */}
                <TextInput 
                    inputType="text"
                    label="Enter Game Hint"
                    placeholder="Optional Hint.."
                    onChangeHandler={handleHintTextInputChange}
                />
            </div>

            {/**Show/Hide button */}
            <div className="w-full flex justify-center">
                <Button 
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                    className="w-32"
                />
            </div>

            {/**Submit Button */}
            <div className="w-full flex justify-center">
                <Button 
                    type="submit"
                    styleType="primary"
                    text="submit"
                    className="w-32"
                />
            </div>

        </form>
    )

}

export default TextInputForm;