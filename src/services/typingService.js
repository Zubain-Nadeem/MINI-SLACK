import { db } from "../firebase/config";
import {
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  collection,
  query,
  where
} from "firebase/firestore";

// ✅ Set typing status
export async function setTypingStatus(userId, channelId, isTyping, name) {
  if (!userId || !channelId) return;

  const ref = doc(db, "typingStatus", `${channelId}_${userId}`);

  if (isTyping) {
    await setDoc(
      ref,
      {
        userId,
        channelId,
        typing: true,
        name: name || "Unknown"
      },
      { merge: true }
    );
  } else {
    await deleteDoc(ref).catch(() => {});
  }
}

// ✅ Listen typing
export function listenTyping(channelId, callback) {
  if (!channelId) return () => {};

  const q = query(
    collection(db, "typingStatus"),
    where("channelId", "==", channelId)
  );

  return onSnapshot(q, (snapshot) => {
    const users = snapshot.docs
      .map((d) => d.data())
      .filter((u) => u.typing && u.name);
    callback(users);
  });
}
