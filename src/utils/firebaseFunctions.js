import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  deleteDoc
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item and updating existing item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "Items", data.title), data, {
    merge: true,
  });
};

// save reservations
export const saveReservation = async (data) => {
  await setDoc(doc(firestore, "Reservations", data.id), data, {
    merge: true,
  });
};



// updateItem 
export const updateItem = async (data) => {
  await setDoc(doc(firestore, "Items", data.id), data, {
    merge: true,
  });
};


// Saving new User and updating existing user data
export const saveUser = async (udata) => {
  await setDoc(doc(firestore, "Users", udata.uid), udata, {
    merge: true,
  });
};



// Deleting Item
export const deleteItem = async (id) => {
  return await deleteDoc(doc(firestore, "Items", id));
};

// getAll items
export const getAllItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "Items"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

// getAllReservations
export const getAllReservations = async () => {
  const reservations = await getDocs(
    query(collection(firestore, "Reservations"), orderBy("id", "desc"))
  );

  return reservations.docs.map((doc) => doc.data());
};


//getAllUsers
export const getAllUsers = async () => {
  const users = await getDocs(
    query(collection(firestore, "Users"), orderBy("uid", "desc"))
  );

  return users.docs.map((doc) => doc.data());
};