import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleShow = () => {
    if (!isClicked) {
      setShowModal(true);
      setIsClicked(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded" 
        onClick={handleShow}
      >
        Open Modal
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">Modal Title</h2>
            <p className="mb-4">Woohoo, you're reading this text in a modal!</p>
            <button 
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleClose}
            >
              Close
            </button>
            <button 
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleClose}
            >
              Save Changes
            </button>
          </div>
          <div 
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;