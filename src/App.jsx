import React from 'react'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-semibold mb-4">Workspaces</h2>
        <ul>
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">General</li>
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Development</li>
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Design</li>
        </ul>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <h2 className="text-lg font-semibold">#general</h2>
          <button className="text-sm text-blue-600">Members</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="flex items-start space-x-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Ali Raza <span className="text-xs text-gray-500">2:30 PM</span></p>
              <p className="bg-gray-200 inline-block p-2 rounded-lg">Hello everyone!</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white flex items-center space-x-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg p-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send</button>
        </div>
      </main>

      {/* User Panel */}
      <aside className="hidden lg:block w-64 bg-white border-l p-4">
        <h3 className="text-lg font-semibold mb-3">Members</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Ali Raza</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span>Fatima</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
