function SelectPlayer({ SinglePlayerClickHandler, MultiPlayerClickHandler }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
                        Hangman
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Test your vocabulary and save the hanging man!
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={SinglePlayerClickHandler}
                        className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                    >
                        Single Player
                    </button>

                    <button
                        onClick={MultiPlayerClickHandler}
                        className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    >
                        Multiplayer
                    </button>
                </div>

                <p className="text-gray-400 text-center text-sm mt-8">
                    Choose your game mode and start playing!
                </p>
            </div>
        </div>
    );
}

export default SelectPlayer;