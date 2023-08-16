import React, { useEffect, useState } from 'react'
import { db } from "../firebaseConfig.js";
// import { collection, query, where, getDocs } from "@firebase/firestore";
import { doc, getDoc} from "firebase/firestore"; 
import "./Styles/team.css";

const Team = () => {
    // const [data,setData]=useState([]);
    // async function Fetchsingle(e)
    // {
    //   e.preventDefault();
    //   const docRef = doc(db, "Team_Details","vI5k1qjYBkH6qQo4qZZA");
    //   const docSnap = await getDoc(docRef);
    
    //   if (docSnap.exists()) 
    // {
    //     console.log("Document data:", docSnap.data());
    //     // setData(docSnap.data());
        
    // } 
    // else 
    // {
    // console.log("No such document!");
    // }
    // }
    const [data, setData] = useState(null); // Initialize state to store the fetched data

  async function Fetchsingle(e) {
    // e.preventDefault();
    const docRef = doc(db, "Team_Details", "vI5k1qjYBkH6qQo4qZZA");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data()); // Store the fetched data in the state
    } else {
      console.log("No such document!");
    }
  }




  // Fetch data when the component mounts
  useEffect(() => {
    Fetchsingle();
  }, []);


    
  return (
    <div className='bodyWrap dashboardPage'>
    <div className='heading'>
        <h2>Team Details</h2>
        <hr></hr>
        <button onClick={Fetchsingle}>Get</button>
    <div className='leader'>
        <h4>Team Leader</h4>
        <h6>{data}</h6>
    </div>
    <div class="row">
  <div class="column">
  <h4>Team Member</h4>
  </div>
  <div class="column">
  <h4>Team Member</h4>
  </div>
  <div class="column">
  <h4>Team Member</h4>
  </div>
</div>
    </div>
    </div>
  )
}

export default Team