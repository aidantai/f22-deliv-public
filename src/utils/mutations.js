import { addDoc, setDoc, updateDoc, collection, deleteDoc, doc, query, where, getDocs} from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

export async function addEntry(entry) {

   var docReference = await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });

   // Save and store document reference

   await setDoc(docReference, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
      docref: docReference,
   });
}

export async function updateEntry(entry, docReference) {
   // TODO: Create Mutation to Edit Entry

   await updateDoc(docReference, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      category: entry.category,
   });

   // await setDoc(docReference, {
   //    name: entry.name,
   //    link: entry.link,
   //    description: entry.description,
   //    user: entry.user,
   //    category: entry.category,
   //    // The ID of the current user is logged with the new entry for database user-access functionality.
   //    // You should not remove this userid property, otherwise your logged entries will not display.
   //    userid: entry.userid,
   //    docref: docReference,
   // });
}

export async function deleteEntry(entry, docReference) {
   // TODO: Create Mutation to Delete Entry

   deleteDoc(docReference);

   // const q = query(collection(db, "entries"), where("userid", "==", entry.userid));
   // const querySnapshot = await getDocs(q);

   // querySnapshot.forEach((doc) => {
   // // doc.data() is never undefined for query doc snapshots
   //    console.log(doc.ref);
   //    deleteDoc(doc.ref);
   // });
}