import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc,updateDoc, Firestore, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import {Button, Card,Select,} from "antd";
const { Option } = Select;


export default function ViewTeams() {
  const [loading, setLoading] = useState(true);
  const [teamLeaders, setTeamLeaders] = useState([]); 
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  
 

  useEffect(() => {

    const fetchData = async () => {
      try {
        const teamDetailsRef = collection(db, 'Team_Details');
        const phaseIRef = collection(db, 'PhaseI');

        const teamDetailsSnapshot = await getDocs(teamDetailsRef);
        const phaseISnapshot = await getDocs(phaseIRef);

        const teamDetailsData = teamDetailsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const combinedData = teamDetailsData.map(teamLeader => {
          const phaseIDoc = phaseISnapshot.docs.find(phaseI => phaseI.data().userid === teamLeader.userid);
          if (phaseIDoc) {
            return {
              ...teamLeader,
              Project_Title: phaseIDoc.data().Project_Title,
              Domain: phaseIDoc.data().Domain
            };
          } else {
            return {
              ...teamLeader,
              Project_Title: 'NA',  // Set to 'NA' if not submitted
              Domain: 'NA'          // Set to 'NA' if not submitted
            };
          }
        });

        setTeamLeaders(combinedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  


  
    const fetchMentors = async () => {
    
      const mentorsCollectionRef = collection(db, 'Staffs');

      try {
        const querySnapshot = await getDocs(mentorsCollectionRef);
        const mentorList = querySnapshot.docs.map((doc) => doc.data());
        setMentors(mentorList);
        
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
    

  }, []);

  //button func
  const handleUpdateMentor = async (userId, mentorName) => {
    if (!mentorName) {
      console.log('Select a mentor before setting.');
      return;
    }

    const teamQueryRef = query(collection(db, 'Team_Details'), where('userid', '==', userId));
    const teamQuerySnapshot = await getDocs(teamQueryRef);

    if (!teamQuerySnapshot.empty) {
      const teamDocRef = teamQuerySnapshot.docs[0].ref;

      try {
        await updateDoc(teamDocRef, {
          Mentor: mentorName
        });
        console.log(`Mentor set to: ${mentorName}`);
      } catch (error) {
        console.error('Error updating mentor:', error);
      }
    }
  };


  
  
  if (loading) {
    return <div>Loading...</div>; 
  }

  return (<>
    <div className="bodyWrap dashboardPage">
    <h1 className='teams'>Teams</h1>
    <div className="divider"></div> 
    <div className="app-container">
    <div className="team-column">
    <div className="team-cards">
   
    {teamLeaders.map(teamLeader => (
               <Card key={teamLeader.id} title={`Team Leader: ${teamLeader.Team_Leader_firstname}`}>
               <p>Mail ID: {teamLeader.Team_Leader_Mailid}</p>
               <p>Registration Number: {teamLeader.Team_Leader_Regnum}</p>
               <p>Project Title: {teamLeader.Project_Title}</p>
               <p>Domain: {teamLeader.Domain}</p>
         
               <Select
                 placeholder="Select a mentor"
                 onChange={(selectedMentor) => setSelectedMentor(selectedMentor)}
                 style={{ width: '100%', marginBottom: '15px' }}
               >
                 {mentors.map(mentor => (
                   <Option key={mentor.id} value={mentor.Name}>
                     {mentor.Name}
                   </Option>
                 ))}
               </Select>
         
               <Button
                 type="primary"
                 onClick={() => handleUpdateMentor(teamLeader.userid,selectedMentor)}
               >
                 Set Mentor
               </Button>
                
             </Card>
            ))}
   </div>
    </div>
  </div>
  </div>
  </>

  );

}
