import React from 'react';

const Dialog = ({ isOpen, onClose, message, type }) => {
  if (!isOpen) return null; // Don't render anything if the dialog is not open

  // Define styles for success and failure types
  const dialogStyle = type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-100 text-red-700';

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className={`bg-white p-6 rounded-lg shadow-lg w-96 ${dialogStyle}`}>
        <h2 className="text-xl font-semibold text-center mb-4">
          {type === 'success' ? 'Success!' : 'Error!'}
        </h2>
        <p className="text-center">{message}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
