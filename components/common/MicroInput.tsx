"use client";
import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { HERO_CALL } from "../../app/constants";
const MicroInput = () => {
  const [isListening, setIsListening] = useState(false);
  const handleMicrophoneClick = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'vi-VN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log('Đang bật micro');
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log('Kết quả:', transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Lỗi nhận dạng: ', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        console.log('Đã tắt micro!');
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Trình duyệt của bạn không hỗ trợ micro');
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6">
        <label htmlFor="userInput" className="mb-2 text-lg font-medium text-gray-700">
          {HERO_CALL}
        </label>
        <div className="relative w-full">
          <input
            id="userInput"
            type="text"
            placeholder="Mời bạn nhập thông tin, hoặc nhấn micro để bắt đầu."
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleMicrophoneClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            <FaMicrophone />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicroInput;
