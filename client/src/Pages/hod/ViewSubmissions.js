import { getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { collection, } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


export default function ViewSubmissions() {
    //const [subsData,setSubsData]=useState;
    async function Fetchsubmissions(e)
    {
        e.preventDefault();
        const querySnapshot=await getDocs(collection(db,"PhaseI"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>",doc.data());
            
            
        });
    }

  
    return (
    

    <div>ViewSubmissions
        <button onClick={Fetchsubmissions}>View submission</button>
    </div>
  )
}
