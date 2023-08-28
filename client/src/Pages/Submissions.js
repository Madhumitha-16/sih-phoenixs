import React, { useEffect, useState } from 'react'
import  {db}  from "../firebaseConfig.js";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, getDoc} from "firebase/firestore"; 
import { query, where,collection,getDocs } from "firebase/firestore";
import "./Styles/team.css";
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading.js';
import {CheckCircleFilled} from '@ant-design/icons';
import Loading from '../Components/Loading.js';
//import {  collection} from "firebase/firestore"; 


const Submissions =() =>{

    const userId = useParams();
    const [docId, setDocId] = useState("");
    const [phase1Details, setPhase1Details] = useState("");
    console.log("submission",userId.userId);
    const [loading, setLoading] = useState(true);


   async function fetchUser()
   {
   
  try {
   
    const q = query(
      collection(db, "PhaseI"),
      where("userid", "==", userId.userId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]; 
      setLoading(false);

      setDocId(doc.id);
      setLoading(false);
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
   // console.log(id,"id");
    if (docId) {
      const docRef = doc(db, 'PhaseI', docId); 
      getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setPhase1Details(docSnap.data());
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

  console.log(phase1Details.Domain,"phase1");

  return (
    <div className='bodyWrap dashboardPage'>
    <div className='heading'>
        <h2>Submissions</h2>  
        <hr></hr>
    </div>
    {loading ? <Loading /> :
    <div>
    <div class="column submission">
    <div className='text-container'>
    <div className='row'>
    <div style={{ display: 'flex' }}>
          <div style={{ flex: '0px 0 0px', marginRight: '0px' }}><strong><h3>Phase 1</h3></strong></div>
          <div> <CheckCircleFilled style={{color:"green",fontSize:"20px",margin:'15px 10px'}}/> </div>
      </div>
  </div>
  <hr></hr>
  <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 90px', marginRight: '0px',paddingBottom:'10px' }}>Project Title</div>
          <div>: {phase1Details.Project_Title}</div>
      </div>
      <div style={{ display: 'flex',paddingBottom:'10px' }}>
          <div style={{ flex: '0 0 90px', marginRight: '0px' }}>Domain</div>
          <div>: {phase1Details.Domain}</div>
      </div>
      <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 90px', marginRight: '0px' }}>Abstract</div>
          <div>: {phase1Details.Abstract}</div>
      </div>
 
</div>
    </div>
    <div class="column submission">
    <div className='text-container'>
      <h3>Phase 2</h3>
    </div>
    </div>
    <div class="column submission">
    <div className='text-container'>
      <h3>Phase 3</h3>
    </div>
    </div>
    </div>
    }
</div>
  )

}

export default Submissions