import Button from "../../Components/Buttons/Button";
function SelectPlayer({SinglePlayerClickHandler, MultiPlayerClickHandler}) {
  return (
    <div className="flex flex-col bg-black p-5 gap-20 justify-center items-center h-full">
        <div className="flex flex-col bg-yellow-500 rounded-md p-14 gap-20 justify-center items-center h-max">
            <h1 className="text-white tracking-wide font-semibold text-center text-7xl">HangMan - Game</h1>
            <h1 className="text-5xl  text-black font-semibold" >SELECT PLAYER</h1>
            <div className="flex gap-6">
            <Button
            text="Single Player"
            buttonType="primary"
            onClickHandler={SinglePlayerClickHandler}
            ></Button>
            <Button
            text="Multi Player"
            buttonType="warning"
            onClickHandler={MultiPlayerClickHandler}
            ></Button>
            </div>
        </div>
    </div>
  );
}
export default SelectPlayer;