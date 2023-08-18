import React, { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import {  doc,getDoc,getDocs} from "firebase/firestore"; 
import { query, where,collection } from "firebase/firestore";
import { useParams } from 'react-router-dom';
//import {  collection} from "firebase/firestore"; 


const Submissions= ()=> {

   const userId = useParams();
   console.log("submission",userId);
   const[docId,setDocId]=useState("");
  async function fetchUser(e)
  {
   
    const docRef = doc(db, "PhaseI","8MjjIwGPN4DT9xjYp2ho");
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) 
  {
    console.log("Document data:", docSnap.data());
    setDocId(doc.id);
  } 
  else 
  {
  console.log("No such document!");
  }
  }


    useEffect(() => {
      fetchUser();
  }, []);



  useEffect(() => {
    const id=docId;
    console.log(id,"id");
    if (docId) {
      const docRef = doc(db, 'PhaseI', docId); 
      getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } 
        else {
          console.log("No such document!",docId);
         
        }
      })
      .catch(error => {
        console.error("Error fetching document:", error);
       
      });
    }
   
  }, [docId]);



const Submissions = () => {
  
  return (
    <div className='bodyWrap dashboardPage'>
    <div className='heading'>
        <h2>Submissions</h2>
        
        <hr></hr>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 1</h3>
    </div>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 2</h3>
    </div>
    </div>
    <div class="column">
    <div className='text-container'>
      <h3>Phase 3</h3>
    </div>
    </div>

</div>
  )
}
}

export default Submissions