import React from 'react';

function Modal({ isOpen, onClose, title, message , redirectToHome }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg flex justify-center flex-wrap flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-4 text-lg">{message}</p>
                <div className='flex justify-center gap-5'>
                    <button
                        onClick={redirectToHome}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Home
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;