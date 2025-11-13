// src/pages/ChatPage.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { setUserOnline, setUserOffline } from "../services/presenceService";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import UserPanel from "../components/UserPanel";
import { workspaces } from "../data";

export default function ChatPage() {
  const { user } = useAuth();
  const [selectedChannel, setSelectedChannel] = useState(null);

  // 🔹 Auto-select first channel on load
  useEffect(() => {
    if (!selectedChannel && workspaces[0]?.channels?.length > 0) {
      setSelectedChannel(workspaces[0].channels[0]);
    }
  }, [selectedChannel]);

  // 🔹 Presence setup
  useEffect(() => {
    if (!user) return;

    // Mark user online with name
    setUserOnline(user.uid, user.displayName || user.email);

    // When user leaves → mark offline
    const handleBeforeUnload = () => setUserOffline(user.uid);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      setUserOffline(user.uid);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
  onSelectChannel={setSelectedChannel}
  selectedChannel={selectedChannel}
/>
      <ChatWindow selectedChannel={selectedChannel} />
      <UserPanel />
    </div>
  );
}
