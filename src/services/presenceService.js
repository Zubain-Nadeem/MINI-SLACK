// src/services/presenceService.js
import { db } from "../firebase/config";
import { doc, setDoc, serverTimestamp, onSnapshot } from "firebase/firestore";

// 🟢 Set user online
export async function setUserOnline(userId) {
  if (!userId) return;
  await setDoc(
    doc(db, "presence", userId),
    { state: "online", lastSeen: serverTimestamp() },
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
  const unsub = onSnapshot(db.collection("presence"), (snapshot) => {
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(users);
  });
  return unsub;
}
