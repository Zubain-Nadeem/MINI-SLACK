// src/components/ChatWindow.jsx
import { useEffect, useRef, useState } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../context/AuthContext";
import MessageBubble from "./MessageBubble";
import { Paperclip, Smile, Send } from "lucide-react";

export default function ChatWindow({ selectedChannel }) {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // 🔹 Fetch messages for selected channel
  useEffect(() => {
    if (!selectedChannel) return;
    const q = query(
      collection(db, "messages"),
      where("channelId", "==", selectedChannel.id),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [selectedChannel]);

  // 🔹 Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Send a message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedChannel || !user) return;

    await addDoc(collection(db, "messages"), {
      text: message.trim(),
      userId: user.uid,
      name: user.displayName || user.email,
      avatar: user.photoURL || "https://i.pravatar.cc/40",
      channelId: selectedChannel.id,
      createdAt: serverTimestamp(),
    });

    setMessage("");
  };

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
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              name={msg.name}
              text={msg.text}
              time={
                msg.createdAt?.toDate
                  ? msg.createdAt.toDate().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
              avatar={msg.avatar}
              isOwn={msg.userId === user?.uid}
            />
          ))}
          <div ref={bottomRef}></div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a channel to start chatting.
        </div>
      )}

      {/* Input */}
      {selectedChannel && (
        <form
          onSubmit={handleSend}
          className="p-4 border-t bg-white flex items-center space-x-3"
        >
          <button type="button" className="text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message #${selectedChannel.name}`}
            className="flex-1 border rounded-lg p-2 focus:outline-none"
          />

          <button type="button" className="text-gray-500 hover:text-gray-700">
            <Smile size={20} />
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Send size={18} className="mr-1" /> Send
          </button>
        </form>
      )}
    </main>
  );
}
