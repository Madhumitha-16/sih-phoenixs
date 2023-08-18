import React, { useEffect, useState } from 'react'
import  {db}  from "../firebaseConfig.js";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, getDoc} from "firebase/firestore"; 
import { query, where,collection,getDocs } from "firebase/firestore";
import "./Styles/team.css";
import { useParams } from 'react-router-dom';

const Team = () => {
    const userId = useParams();
    const [teamLeaderData, setTeamLeaderData] = useState({});
    const [teamMember1Data, setTeamMember1Data] = useState({});
    const [teamMember2Data, setTeamMember2Data] = useState({});
    const [teamMember3Data, setTeamMember3Data] = useState({});
    const [docId, setDocId] = useState("");


    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async function fetchUser() {
      try {
        const q = query(
          collection(db, "Team_Details"),
          where("userid", "==", "RRH9ngOiNocRCn81uSjZeLjaXT43")
        );
        const querySnapshot = await getDocs(q);
        
        // Check if there is a document in the query result
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]; // Assuming you're only expecting one document
          setDocId(doc.id);
        } else {
          console.log("No matching documents found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  

      useEffect(() => {
      fetchUser();
    }, [userId.userId]);
   
    const teamLeaderKeys = [
      'Team_Leader_firstname',
      'Team_Leader_lastname',
      'Team_Leader_Regnum',
      'Team_Leader_Mailid',
      'Team_Leader_Course',
      'Team_Leader_Department',
    ];
    const teamMember1Keys = [
      'Team_Member1_firstname',
      'Team_Member1_lastname',
      'Team_Member1_Regnum',
      'Team_Member1_Mailid',
      'Team_Member1_Course',
      'Team_Member1_Department',
    ];
    const teamMember2Keys = [
      'Team_Member2_firstname',
      'Team_Member2_lastname',
      'Team_Member2_Regnum',
      'Team_Member2_Mailid',
      'Team_Member2_Course',
      'Team_Member2_Department',
    ];
    const teamMember3Keys = [
      'Team_Member3_firstname',
      'Team_Member3_lastname',
      'Team_Member3_Regnum',
      'Team_Member3_Mailid',
      'Team_Member3_Course',
      'Team_Member3_Department',
    ];


    useEffect(() => {
      const id=docId;
      console.log(id,"id");
      if (docId) {
        const docRef = doc(db, 'Team_Details', docId); 
        getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
  
            // Filter "Team_Leader" properties
            const teamLeaderProperties = teamLeaderKeys.reduce((obj, key) => {
              obj[key] = docSnap.data()[key];
              return obj;
            }, {});
              setTeamLeaderData(teamLeaderProperties);

              // Filter "Team_Member1" properties
              const teamMember1Properties = Object.keys(docSnap.data())
              .filter(key => key.startsWith('Team_Member1'))
              .reduce((obj, key) => {
                obj[key] = docSnap.data()[key];
                return obj;
              }, {});
            setTeamMember1Data(teamMember1Properties);

            const teamMember2Properties = Object.keys(docSnap.data())
            .filter(key => key.startsWith('Team_Member2'))
            .reduce((obj, key) => {
              obj[key] = docSnap.data()[key];
              return obj;
            }, {});
          setTeamMember2Data(teamMember2Properties);

          // Filter "Team_Member3" properties
          const teamMember3Properties = Object.keys(docSnap.data())
          .filter(key => key.startsWith('Team_Member3'))
          .reduce((obj, key) => {
            obj[key] = docSnap.data()[key];
            return obj;
          }, {});
        setTeamMember3Data(teamMember3Properties);
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
        <h2>Team Details</h2>
        <hr></hr>
    <div className='container'>
    <div className='leader'>
    <div className='text-container'>
      <h2><strong>Team Leader:</strong></h2>
      <hr></hr>
      
      {teamLeaderKeys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Leader_', ''))}</div>
          <div>: {teamLeaderData[key]}</div>
        </div>
      ))}
    </div>
    </div>
    <div class="row">
  <div class="column">
  <div className='text-container'>
    <h2><strong>Team Member 1</strong></h2>  
      <hr></hr>
      {teamMember1Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member1_', ''))}</div>
        <div>: {teamMember1Data[key]}</div>
        </div>
      ))}
    </div>
  </div>
  <div class="column">
 
  <div className='text-container'>
      <h2><strong>Team Member 2</strong></h2>
      <hr></hr>
      {teamMember2Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member2_', ''))}</div>
        <div>: {teamMember2Data[key]} </div>
        </div>
      ))}
    </div>
  </div>
  <div class="column">
  <div className='text-container'>
      <h2><strong>Team Member 3</strong></h2>
      <hr></hr>
      {teamMember3Keys.map(key => (
        <div key={key} style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 90px', marginRight: '0px' }}>{capitalizeFirstLetter(key.replace('Team_Member3_', ''))}</div>
        <div>: {teamMember3Data[key]}</div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Team