// src/components/UserPanel.jsx
import { useEffect, useState } from "react";
import { listenPresence } from "../services/presenceService";

export default function UserPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = listenPresence(setUsers);
    return () => unsubscribe();
  }, []);

  return (
    <aside className="w-64 bg-white border-l p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Users</h2>
      <ul className="flex-1 overflow-y-auto space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-2">
            <span
              className={`w-3 h-3 rounded-full ${
                user.state === "online" ? "bg-green-500" : "bg-gray-400"
              }`}
            ></span>
            <span>{user.name || user.id.slice(0, 6)}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
