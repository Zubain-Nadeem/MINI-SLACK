// src/services/presenceService.js
import { db } from "../firebase/config";
import { doc, setDoc, serverTimestamp, onSnapshot, collection } from "firebase/firestore";

// 🟢 Set user online (with optional name)
export async function setUserOnline(userId, name) {
  if (!userId) return;
  await setDoc(
    doc(db, "presence", userId),
    { state: "online", lastSeen: serverTimestamp(), name },
    { merge: true }
  );
  window.addEventListener("beforeunload", () => setUserOffline(userId));
}

// 🔴 Set user offline
export async function setUserOffline(userId) {
  if (!userId) return;
  await setDoc(
    doc(db, "presence", userId),
    { state: "offline", lastSeen: serverTimestamp() },
    { merge: true }
  );
}

// 👀 Listen to all users’ presence
export function listenPresence(callback) {
  const unsub = onSnapshot(collection(db, "presence"), (snapshot) => {
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(users);
  });
  return unsub;
}
