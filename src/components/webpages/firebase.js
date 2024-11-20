import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAS7oSxE9GqGIfnLypAGUWYf-JS-FD8COY",
  authDomain: "adam-baba.firebaseapp.com",
  projectId: "adam-baba",
  storageBucket: "adam-baba.appspot.com",
  messagingSenderId: "340122551381",
  appId: "1:340122551381:web:21bfcdcac30b7ed52000dc",
  measurementId: "G-NWR6MT0XSZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email: email, accountno: accountno, balance: balance });
};

export const addTransaction = (receiver, sender, amount) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  return db
    .collection("transactions")
    .add({
      receiver: receiver,
      sender: sender,
      amount: amount,
      createdAt: formattedDate,
    });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [
    db
      .collection("users")
      .doc(id1)
      .update({
        balance: Number(balance1) - Number(amount),
      }),
    db
      .collection("users")
      .doc(id2)
      .update({
        balance: Number(balance2) + Number(amount),
      }),
  ];
};

export { db };
// firebase.initializeApp(firebaseConfig);
export default firebaseApp
