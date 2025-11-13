// src/services/typingService.js
import { db } from "../firebase/config";
import { doc, setDoc, onSnapshot, deleteDoc, collection, query, where } from "firebase/firestore";

// 🟢 Set typing true/false (now with name)
export async function setTypingStatus(userId, channelId, isTyping, name) {
  if (!userId || !channelId) return;

  const typingRef = doc(db, "typingStatus", `${channelId}_${userId}`);

  if (isTyping) {
    await setDoc(
      typingRef,
      { userId, channelId, typing: true, name }, // add name
      { merge: true }
    );
  } else {
    await deleteDoc(typingRef).catch(() => {}); // remove typing
  }
}

// 👀 Listen typing status for a channel
export function listenTyping(channelId, callback) {
  if (!channelId) return () => {};

  const q = query(
    collection(db, "typingStatus"),
    where("channelId", "==", channelId)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const typingUsers = snapshot.docs
      .map((doc) => doc.data())
      .filter((d) => d.typing);
    callback(typingUsers);
  });

  return unsubscribe;
}
