import Input from "../TextInput/Input";
import Button from "../Buttons/Button";

function InputForm({onSubmitHandler, showHidePasswordHandler, inputType , handleInputChange , handleDescrptionChange}){
    return(
        <form className="flex flex-col justify-center items-center gap-4" onSubmit={onSubmitHandler}>
            <div className="flex justify-center items-center gap-2">
                <Input
                    inputType={inputType}
                    placeholder={"Enter the word"}
                    label = {"Enter the Word"}
                    inputChangeHandler={handleInputChange}
                ></Input>
                <Button 
                    text={inputType === "password"?"Show":"Hide"} 
                    buttonType="warning" 
                    onClickHandler={showHidePasswordHandler}
                ></Button>
            </div>
            <div className="flex justify-center items-center gap-2">
                <Input
                    inputType={"text"}
                    placeholder={"Enter the Description"}
                    label = {"Word Description"}
                    inputChangeHandler={handleDescrptionChange}
                ></Input>
                <Button 
                    text={"Submit"} 
                    work={"Submit"} 
                    buttonType="danger"
                ></Button>
            </div>
            <div>
            </div>
        </form>
    )
}

export default InputForm;