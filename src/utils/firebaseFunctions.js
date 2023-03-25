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

// Saving new User and updating existing user data
export const saveUser = async (udata) => {
  await setDoc(doc(firestore, "Users", udata.uid), udata, {
    merge: true,
  });
};

// getAll items
export const getAllItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "Items"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};


//getAllUsers
export const getAllUsers = async () => {
  const users = await getDocs(
    query(collection(firestore, "Users"), orderBy("uid", "desc"))
  );

  return users.docs.map((doc) => doc.data());
}