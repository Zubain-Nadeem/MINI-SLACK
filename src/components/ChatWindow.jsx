import MessageBubble from "./MessageBubble";

export default function ChatWindow({ selectedChannel }) {
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
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <MessageBubble
            name="Ali Raza"
            time="2:30 PM"
            text={`Welcome to #${selectedChannel.name} channel!`}
            avatar="https://i.pravatar.cc/40"
          />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a channel to start chatting.
        </div>
      )}

      {/* Input */}
      {selectedChannel && (
        <div className="p-4 border-t bg-white flex items-center space-x-3">
          <input
            type="text"
            placeholder={`Message #${selectedChannel.name}`}
            className="flex-1 border rounded-lg p-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Send
          </button>
        </div>
      )}
    </main>
  );
}
