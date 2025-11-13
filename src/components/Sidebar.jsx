// src/components/Sidebar.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { workspaces } from "../data";

export default function Sidebar({ onSelectChannel, selectedChannel }) {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
  const navigate = useNavigate();

  // 🔹 Auto-select first channel if none selected
  useEffect(() => {
    if (!selectedChannel && selectedWorkspace.channels?.length > 0) {
      onSelectChannel(selectedWorkspace.channels[0]);
    }
  }, [selectedChannel, selectedWorkspace, onSelectChannel]);

  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Workspaces</h2>
      <select
        value={selectedWorkspace.id}
        onChange={(e) => {
          const ws = workspaces.find((w) => w.id === e.target.value);
          setSelectedWorkspace(ws);
          if (ws.channels?.length > 0) {
            onSelectChannel(ws.channels[0]);
          }
        }}
        className="border rounded-lg p-2 mb-4"
      >
        {workspaces.map((w) => (
          <option key={w.id} value={w.id}>
            {w.name}
          </option>
        ))}
      </select>

      <h3 className="text-lg font-medium mb-2">Channels</h3>
      <ul className="flex-1 overflow-y-auto">
        {selectedWorkspace.channels.map((ch) => (
          <li
            key={ch.id}
            onClick={() => onSelectChannel(ch)}
            className={`p-2 rounded cursor-pointer ${
              selectedChannel?.id === ch.id
                ? "bg-blue-100"
                : "hover:bg-gray-200"
            }`}
          >
            #{ch.name}
          </li>
        ))}
      </ul>

      {/* Profile button */}
      <button
        onClick={() => navigate("/profile")}
        className="mt-4 text-blue-600 hover:text-blue-800 text-left"
      >
        Profile
      </button>
    </aside>
  );
}
