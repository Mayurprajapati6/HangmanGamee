import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [word, setWord] = useState("");
    const [description, setDescription] = useState("");
    const [showWord, setShowWord] = useState(false); // Initialize as false to start with password type
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.trim() && description.trim()) {
            navigate('/start', {
                state: {
                    word: { inputValue: word },
                    defination: { desValue: description }
                }
            });
        }
    };

    const toggleWordVisibility = () => {
        setShowWord(!showWord);
    };

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            <div className="max-w-xl w-full p-8 bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                        Multiplayer Mode
                    </h1>
                    <p className="text-lg text-white/80">
                        Create a word challenge for your friend! 🎮
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-white/90 text-lg font-medium mb-2 ml-1">
                                Enter Word
                            </label>
                            <div className="relative">
                                <input 
                                    type={showWord ? "text" : "password"}
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-white/5 border-2 border-white/20 rounded-xl 
                                             text-white text-lg placeholder-white/30 focus:outline-none 
                                             focus:border-purple-500 transition-colors"
                                    placeholder="Type your challenge word..."
                                    required
                                />
                                {word && ( // Only show button if there's text
                                    <button 
                                        type="button"
                                        onClick={toggleWordVisibility}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                                 px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white/90 
                                                 text-sm font-medium rounded-lg border border-white/10 
                                                 transition-all duration-200 hover:border-white/20"
                                    >
                                        {showWord ? "Hide" : "Show"}
                                    </button>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-white/90 text-lg font-medium mb-2 ml-1">
                                Enter Description
                            </label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-5 py-3.5 bg-white/5 border-2 border-white/20 rounded-xl 
                                         text-white text-lg placeholder-white/30 focus:outline-none 
                                         focus:border-purple-500 transition-colors resize-none h-24"
                                placeholder="Give a helpful hint..."
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 
                                     hover:from-purple-700 hover:to-pink-700 text-white text-lg 
                                     font-semibold rounded-xl shadow-lg transform transition-all 
                                     duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Start Game
                        </button>
                    </div>
                </form>

                <p className="text-white/60 text-center text-base mt-8">
                    🤫 Keep the word secret from your friend!
                </p>
            </div>
        </div>
    );
}

export default Home;