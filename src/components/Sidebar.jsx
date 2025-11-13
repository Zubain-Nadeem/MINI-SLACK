// src/components/Sidebar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { workspaces } from "../data";

export default function Sidebar({ onSelectChannel }) {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
  const [activeChannel, setActiveChannel] = useState(null);
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Workspaces</h2>
      <select
        value={selectedWorkspace.id}
        onChange={(e) =>
          setSelectedWorkspace(
            workspaces.find((w) => w.id === e.target.value)
          )
        }
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
            onClick={() => {
              setActiveChannel(ch);
              onSelectChannel(ch);
            }}
            className={`p-2 rounded cursor-pointer ${
              activeChannel?.id === ch.id ? "bg-blue-100" : "hover:bg-gray-200"
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
