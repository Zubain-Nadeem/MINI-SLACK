import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import UserPanel from "../components/UserPanel";

export default function ChatPage() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onSelectChannel={setSelectedChannel} />
      <ChatWindow selectedChannel={selectedChannel} />
      <UserPanel />
    </div>
  );
}
