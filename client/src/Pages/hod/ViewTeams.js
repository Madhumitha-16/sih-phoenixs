import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
//import {query,where} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';

export default function ViewTeams() {
  const [teamData, setTeamData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [docId, setDocId] = useState("");
  
  

    async function Fetchall()
  {    
    const querySnapshot = await getDocs(collection(db, "Team_Details"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    
     
    });

  }
 
  console.log(teamData);
  useEffect(()=>
  {
    Fetchall();
  })
 


 

  
  return (

    <div className='bodyWrap dashboardPage'>
    <div className='heading'>
        <h2>Team Details</h2>
        <hr></hr>
   
    <div className='container'>
    <div className='leader'>
   
    <div className='text-container'>
      <h2><strong>Team Leader:</strong></h2>
      <hr></hr>
      {/* {teamLeaderKeys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Leader_', ''))}</div>
          <div>: {teamLeaderData[key]}</div>
        </div>
      ))} */}
    </div>
    
    </div>
    <div class="row">
  <div class="column">
  <div className='text-container'>
    <h2><strong>Team Member 1</strong></h2>  F
      <hr></hr>
      {/* {teamMember1Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member1_', ''))}</div>
        <div>: {teamMember1Data[key]}</div>
        </div>
      ))} */}
    </div>
  </div>
  <div class="column">
 
  <div className='text-container'>
      <h2><strong>Team Member 2</strong></h2>
      <hr></hr>
      {/* {teamMember2Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member2_', ''))}</div>
        <div>: {teamMember2Data[key]} </div>
        </div>
      ))} */}
    </div>
  </div>
  <div class="column">
  <div className='text-container'>
      <h2><strong>Team Member 3</strong></h2>
      <hr></hr>
      {/* {teamMember3Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member3_', ''))}</div>
        <div>: {teamMember3Data[key]}</div>
        </div>
      ))} */}
    </div>
  </div>
</div>
    </div>
    
    </div>
    </div>
  )
}
