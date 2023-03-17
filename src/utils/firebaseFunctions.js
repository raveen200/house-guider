import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item and updating existing item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "Items", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall items
export const getAllItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "Items"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
