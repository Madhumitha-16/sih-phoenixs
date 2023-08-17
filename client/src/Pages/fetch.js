import React from 'react';

import { collection, query, where, getDocs } from "@firebase/firestore";
import { doc, getDoc} from "firebase/firestore"; 

export default function Fetch() {
  async function Fetchsingle(e)
  {
    e.preventDefault();
    const docRef = doc(db, "Team_Details","vI5k1qjYBkH6qQo4qZZA");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) 
  {
    console.log("Document data:", docSnap.data());
  } 
  else 
  {
  console.log("No such document!");
  }
  }


  async function Fetchmul(e)
  {
const q = query(collection(db, "test2"), where("Email", "==", true));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
console.log(doc.id, " => ", doc.data());
});
  }


  async function Fetchall(e)
  {    
    const querySnapshot = await getDocs(collection(db, "test2"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  
  return (
    <div>fetch
      <button onClick={Fetchall}>fetchall</button>
      <button onClick={Fetchsingle}>fetchone</button> 
      <button onClick={Fetchmul}>fetchmul</button>

     </div>
      
  );
}


