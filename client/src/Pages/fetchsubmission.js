import React from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc, getDocs} from "firebase/firestore"; 
import {  collection} from "firebase/firestore"; 

export default function Fetchsub() {
  async function Fetchsingle(e)
  {
    e.preventDefault();
    const docRef = doc(db, "PhaseI","8MjjIwGPN4DT9xjYp2ho");
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

  async function Fetchall(e)
  {    
    const querySnapshot = await getDocs(collection(db, "Team_Details"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <div>fetch
      <button onClick={Fetchsingle}>Fetchsingle</button>
      <button onClick={Fetchall}>Fetchall</button>

     </div>
  );

}