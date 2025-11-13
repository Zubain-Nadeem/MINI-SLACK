// src/components/UserPanel.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";

export default function UserPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "presence"), async (snapshot) => {
      const presenceUsers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const usersWithProfile = await Promise.all(
        presenceUsers.map(async (pUser) => {
          const userDoc = await getDoc(doc(db, "users", pUser.id));
          const profile = userDoc.exists() ? userDoc.data() : {};
          return { ...pUser, ...profile };
        })
      );

      setUsers(usersWithProfile);
    });

    return () => unsub();
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
            {user.avatar && (
              <img src={user.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
            )}
            <span>{user.name || user.id.slice(0, 6)}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
