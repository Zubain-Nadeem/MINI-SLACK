import React from 'react'
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  return (
      <main className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <h2 className="text-lg font-semibold">#general</h2>
        <button className="text-sm text-blue-600">Members</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <MessageBubble
          name="Ali Raza"
          time="2:30 PM"
          text="Hello everyone!"
          avatar="https://i.pravatar.cc/40"
        />
        <MessageBubble
          name="Fatima"
          time="2:31 PM"
          text="Hi Ali! How are you?"
          avatar="https://i.pravatar.cc/41"
        />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white flex items-center space-x-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg p-2 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </div>
    </main>
  )
}

export default ChatWindow
