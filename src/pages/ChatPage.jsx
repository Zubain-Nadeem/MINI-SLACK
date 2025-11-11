import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import UserPanel from "../components/UserPanel";

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <ChatWindow />
      <UserPanel />
    </div>
  );
}
