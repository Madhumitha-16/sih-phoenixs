import React, { useEffect, useState } from 'react'
import  {db}  from "../firebaseConfig.js";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, getDoc} from "firebase/firestore"; 
import { query, where,collection,getDocs } from "firebase/firestore";
import "./Styles/team.css";
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading.js';
//import {  collection} from "firebase/firestore"; 


const Submissions =() =>{

    const userId = useParams();
    const [docId, setDocId] = useState("");
    //console.log("submission",userId);
   async function fetchUser()
   {
   
  //   const docRef = doc(db, "PhaseI",userId.userId);
  //   const docSnap = await getDoc(docRef);
  
  //   if (docSnap.exists()) 
  // {
  //   console.log("Document data:", docSnap.data());
    
  // } 
  // else 
  // {
  // console.log("No such document!");
  // }
  // }
  try {
   
    const q = query(
      collection(db, "PhaseI"),
      where("userid", "==", userId.userId)
    );
    
    const querySnapshot = await getDocs(q);
    
    // Check if there is a document in the query result
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]; // Assuming you're only expecting one document
      setDocId(doc.id);
    } 
    else {
      console.log("No matching documents found.");
    }
  
  } 
  catch (error) {
    console.error("Error fetching user:", error);
  }
   }


    useEffect(() => {
      fetchUser();
  }, []);

  useEffect(() => {
    const id=docId;
   // console.log(id,"id");
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

export default Submissions