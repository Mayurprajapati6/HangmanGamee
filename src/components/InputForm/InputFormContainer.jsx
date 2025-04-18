import { useState } from "react";
import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";
function InputFormContainer(){
    const[inputType , setInputType] = useState("password");
    const[inputValue, setInputValue] = useState();
    const[desValue, setDesValue] = useState();
    let navigate = useNavigate();
    function handleShowHideClick(){
        if(inputType == "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }
    function handleSubmition(event){
        event.preventDefault();
        if(inputValue && desValue){
            navigate('/start',{state:{word : {inputValue}, defination : {desValue}}});
        }else if(inputValue){
            alert("Please Provide Description");
        }else{
            alert("Please Provide a word");
        }
    }
    function inputChangeHandler(event){
        let value = event.target.value.trim();
        setInputValue(value);
    }
    function handleDescrptionChange(event){
        setDesValue(event.target.value);
    }
    return(
        <div className="flex items-center flex-col h-full w-full">
            <div className=" flex justify-center items-center flex-col gap-8 bg-yellow-400  p-16 rounded-md mt-32 shadow-lg">
                <h1 className="text-4xl font-semibold tracking-wide">HangMan Game</h1>
                <InputForm
                    inputType = {inputType}
                    showHidePasswordHandler={handleShowHideClick}
                    onSubmitHandler={handleSubmition}
                    handleInputChange={inputChangeHandler}
                    handleDescrptionChange={handleDescrptionChange}
                ></InputForm>
            </div>
        </div>
    );
}
export default InputFormContainer;