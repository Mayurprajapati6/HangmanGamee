import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Multiplayer() {
    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.trim() && hint.trim()) {
            navigate('/start', {
                state: {
                    word: { inputValue: word },
                    defination: { desValue: hint }
                }
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
            <div className="max-w-lg w-full p-8 bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-4">
                        Multiplayer
                    </h1>
                    <p className="text-xl text-white/80">
                        Challenge your friend with a word! 🎮
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <label className="block text-white text-lg font-medium">
                            Word to Guess
                        </label>
                        <input 
                            type="text"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            required
                            className="w-full px-6 py-4 bg-white/5 border-2 border-white/30 rounded-xl text-white text-lg 
                                     placeholder-white/30 focus:outline-none focus:border-purple-500"
                            placeholder="Type your challenge word..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-white text-lg font-medium">
                            Hint
                        </label>
                        <input 
                            type="text"
                            value={hint}
                            onChange={(e) => setHint(e.target.value)}
                            required
                            className="w-full px-6 py-4 bg-white/5 border-2 border-white/30 rounded-xl text-white text-lg 
                                     placeholder-white/30 focus:outline-none focus:border-purple-500"
                            placeholder="Give a helpful hint..."
                        />
                    </div>

                    <div className="space-y-4 pt-6">
                        <button 
                            type="submit"
                            className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white text-xl 
                                     font-bold rounded-xl shadow-lg transition-colors"
                        >
                            Start Game
                        </button>
                        <button 
                            type="button"
                            onClick={() => navigate('/')}
                            className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 text-white 
                                     text-lg font-medium rounded-xl border border-white/10"
                        >
                            Back to Menu
                        </button>
                    </div>
                </form>

                <p className="text-white/60 text-center text-lg mt-10">
                    🤫 Don't let your friend see the word!
                </p>
            </div>
        </div>
    );
}

export default Multiplayer;