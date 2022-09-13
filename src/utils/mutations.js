import { addDoc, setDoc, collection, deleteDoc, doc, query, where, getDocs} from "firebase/firestore";
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

   console.log(docReference);
   console.log(collection(db, "entries"))

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

   await setDoc(docReference, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      userid: entry.userid,
   });

   // await deleteDoc(docReference);

   // await deleteDoc(docReference);

   // const entryRef = collection(db, "entries");
   // const q = query(collection(db, "entries"), where("link", "==", entry.link));

   // const querySnapshot = await getDocs(q);

   
   // const docSnap = await getDoc(entryRef);

   // await deleteDoc(collection(db, "entries"));

   // await updateDoc(docSnap, {
   //    name: entry.name, 
   //    link: entry.link,
   //    description: entry.description,
   //    user: entry.user,
   //    category: entry.category,
   //    userid: entry.userid,
   // });

   // const collectionRef = collection(db, "entries");

   // const docRef = doc(collectionRef);

   // const docID = docRef.id;

   // console.log(docRef);
   // console.log(docID);


   // const entryRef = db.collection("entries").doc(entry.userid).get();

   // await deleteDoc(collection(db, "entries"));

   // await updateDoc(collection(db, "entries"), {
   //    name: entry.name, 
   //    link: entry.link,
   //    description: entry.description,
   //    user: entry.user,
   //    category: entry.category,
   //    userid: entry.userid,
   // });
}

export async function deleteEntry(docReference) {
   // TODO: Create Mutation to Delete Entry

   // await setDoc(docReference, {
   //    name: "boomplosion",
   //    link: entry.link,
   //    description: entry.description,
   //    user: entry.user,
   //    category: entry.category,
   //    userid: entry.userid,
   // });

   // console.log(docReference);

   // querySnapshot.forEach((doc) => {
   // // doc.data() is never undefined for query doc snapshots
   //    console.log(doc);
   // });

   // await deleteDoc(docReference);

   // console.log(docReference);

   // await deleteDoc(doc(db, "entries", docReference));
}