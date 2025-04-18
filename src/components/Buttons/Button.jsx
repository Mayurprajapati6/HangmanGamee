import getStyles from "./getButtonStyle";
function Button({text, onClickHandler, buttonType = 'primary', work = "button"}) {
  return (
    <button type={work} className={`rounded-md px-4 py-2 ${getStyles(buttonType)} text-xl h-full` } onClick={onClickHandler}  >{text}</button>
  );
}
export default Button;  
