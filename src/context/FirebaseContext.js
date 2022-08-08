import React, {createContext } from "react";
import firebase from "firebase/compat";
import 'firebase/auth';
import config from '../config/firebase-config'
import {collection, getDocs, addDoc, doc, deleteDoc, query, orderBy  } from "@firebase/firestore"

const FirebaseContext = createContext()

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser
  },
  signIn: async (email, password) => {
    let msg = "";

    const signInResult = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {

        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disaled":
          case "auth/user-not-found":
            // alert(err.message);
            msg = err.message;
            break;
          case "auth/wrong-password":
            msg = err.message;
            break;
        }
        return null;
      });
    if (signInResult) {

      try {
        // const user = Firebase.getCurrentUser().getIdToken(user);
        const user = Firebase.getCurrentUser();
        if (user) {
          const token = await user.getIdToken();
          return {
            isSuccessful: true,
            message: token
          }
        }
        return {
          isSuccessful: false,
          message: msg
        };
      } catch (err) {
        // return { message: err }
        return {
          isSuccessful: false,
          message: "fail at get id token"
        };
      }
    } else {
      return {
        isSuccessful: false,
        message: msg
      };
    }
  },
  getPendingOrders: async () => {
    try{
      const orders = await getDocs(query(collection(db,"pending-orders"), orderBy("date","asc")))
      return orders.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
    }catch(error){
      console.log("Error in get info from Pending Orders: ", error);
    }
  },
  getCompletedOrders: async () => {
    try{
      const orders = await getDocs(query(collection(db,"completed-orders"), orderBy("date","desc")))
      return orders.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
    }catch(error){
      console.log("Error in get info from Completed Orders: ", error);
    }
  },
  createOrder: async (date, name, address,order,  phone, price ) => {
    try{
      await addDoc(collection(db, "pending-orders"), {date: date, name: name, address: address, order: order, phone: phone, price: price});
      return "succesfully"
    }
    catch(error){
      console.log("Error in send info to Pending Orders: ", error);
    }
  },
  createCompletedOrder: async (date, name, address,order, phone, price ) => {
    try{
      await addDoc(collection(db, "completed-orders"), {date: date, name: name, address: address, order: order,  phone: phone, price: price});
      return "succesfully"
    }
    catch(error){
      return "Error in send info to Completed Orders: " + error;
    }
  },
  deleteOrder: async (id) => {
    const userDoc = doc(db, "pending-orders", id)
    await deleteDoc(userDoc);
  },
  deleteCompletedOrder: async (id) => {
    const userDoc = doc(db, "completed-orders", id)
    await deleteDoc(userDoc);
  }
}
const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}
export { FirebaseContext, FirebaseProvider }