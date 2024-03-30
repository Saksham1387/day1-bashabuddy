"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import { ArrowUp } from 'lucide-react';
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Placeholder for response from chatbot API
    setTimeout(() => {
      const botResponse: string = 'This is a response from the bot.';
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
      
        <div onClick={toggleChat} className="mr-5 mb-5 cursor-pointer p-2 rounded-full transition duration-300 flex items-center justify-center bg-sky-100 ring ring-sky-500 shadow-3xl shadow-sky-600">
  <Image src="/chat-bot.gif" height={60} width={60} alt="Chat with Admin Bot" className="rounded-full" />
</div>


      {isChatOpen && (
        <div className="fixed bottom-16 mb-10 mr-10 right-4 w-96">
          <div className="bg-white shadow-md rounded-3xl max-w-lg w-full">
            <div className="p-2 border-b bg-sky-400 text-white rounded-t-3xl flex flex-row justify-between items-center">
                <div>
              {/* <span className=''>Hello !</span> */}
              <Image src="/chat-bot-hello.gif" height={40} width={40} alt="Chat with Admin Bot" className="rounded-full" />
              </div>
              
              <button onClick={toggleChat} className=" hover:text-gray-400 flex items-center justify-center p-1 bg-white rounded-full">
  <Image src="/chat-bot-close.svg" height={25} width={25} alt="Chat with Admin Bot" />
</button>
            </div>



            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <span className={`inline-block px-4 py-2 rounded-lg bg-sky-300 ${message.sender === 'user' ? 'bg-sky -400 text-black' : 'bg-gray-300 text-gray-900'}`}>
                    {message.text}
                  </span>
                </div>
              ))}

            </div>
            <form onSubmit={handleSend} className="p-4 border-t flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleInputChange}
                value={userInput}
              />
              <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-r-md hover:bg-sky-600 transition duration-300">
              <ArrowUp />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
