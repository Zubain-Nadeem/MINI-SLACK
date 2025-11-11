import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import { Paperclip, Smile, Send } from "lucide-react";

export default function ChatWindow({ selectedChannel }) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Dummy data for now
    if (selectedChannel) {
      setMessages([
        {
          id: 1,
          name: "Fatima",
          text: `Welcome to #${selectedChannel.name}!`,
          time: "2:30 PM",
          isOwn: false,
          avatar: "https://i.pravatar.cc/40",
        },
        {
          id: 2,
          name: "Ali Raza",
          text: "Hi Fatima, good to see you!",
          time: "2:32 PM",
          isOwn: true,
          avatar: "https://i.pravatar.cc/41",
        },
      ]);
    }
  }, [selectedChannel]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newMsg = {
      id: Date.now(),
      name: "Ali Raza",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
      avatar: "https://i.pravatar.cc/41",
    };
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
    setIsTyping(false);
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {selectedChannel ? `#${selectedChannel.name}` : "Select a channel"}
        </h2>
        <button className="text-sm text-blue-600">Members</button>
      </div>

      {/* Messages */}
      {selectedChannel ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-center">
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Today
            </span>
          </div>

          {messages.map((msg) => (
            <MessageBubble key={msg.id} {...msg} />
          ))}

          <div ref={bottomRef}></div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a channel to start chatting.
        </div>
      )}

      {/* Typing indicator */}
      {isTyping && (
        <div className="px-4 py-1 text-sm text-gray-500">You’re typing...</div>
      )}

      {/* Input */}
      {selectedChannel && (
        <form
          onSubmit={handleSend}
          className="p-4 border-t bg-white flex items-center space-x-3"
        >
          <button type="button" className="text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder={`Message #${selectedChannel.name}`}
            className="flex-1 border rounded-lg p-2 focus:outline-none"
          />

          <button type="button" className="text-gray-500 hover:text-gray-700">
            <Smile size={20} />
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Send size={18} className="mr-1" /> Send
          </button>
        </form>
      )}
    </main>
  );
}
