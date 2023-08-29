import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc,updateDoc, Firestore, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import {Button, Card,Select} from "antd";


export default function ViewTeams() {
  const [teamData, setTeamData] = useState({});
  const [loading, setLoading] = useState(true);
  const { Option } = Select;
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [Data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collection1Ref = collection(db, 'Team_Details');
        const collection2Ref = collection(db, 'PhaseI');
    
        const collection1Snapshot = await getDocs(collection1Ref);
        const collection2Snapshot = await getDocs(collection2Ref);
    
        const combinedData = [];
    
        const matchingUserIds = collection1Snapshot.docs
          .map(doc => doc.data().userid)
          .filter(userid => collection2Snapshot.docs.some(d => d.data().userid === userid));
    
        collection1Snapshot.docs.forEach(doc => {
          const docData = doc.data();
          if (matchingUserIds.includes(docData.userid)) {
            const matchingDoc = collection2Snapshot.docs.find(d => d.data().userid === docData.userid);
            if (matchingDoc) {
              combinedData.push({
                userid: docData.userid,
                Team_Leader_firstname: docData.Team_Leader_firstname,
                Team_Leader_Mailid: docData.Team_Leader_Mailid,
                Team_Leader_Regnum: docData.Team_Leader_Regnum,
                Project_Title: matchingDoc.data().Project_Title,
                Domain: matchingDoc.data().Domain,
              });
            }
          }
        });
    
        setData(combinedData); // Set the Data state with combinedData
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
  
  const handleUpdateMentor = async ( mentor) => {
    if (!mentor) {
      console.log('Select a mentor before setting.');
      return;
    }
    const teamDocRef = doc(db, 'Team_Details'); 

    try {
      await updateDoc(teamDocRef, {
        Mentor: mentor
      });
      console.log(`Mentor set to: ${mentor}`);
    } catch (error) {
      console.error('Error updating mentor:', error);
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
   
    {Data.map(item => (
        <Card key={item} title={`Team Leader: ${item.Team_Leader_firstname}`}>
         
        <p>Registration Number: {item.Team_Leader_Regnum}</p>
        <p>Mail ID: <br></br>{item.Team_Leader_Mailid}</p>
        <p>Project Title: {item.Project_Title}</p>
        <p>Domain: {item.Domain}</p>
              <Select
                placeholder="Select a mentor"
                onChange={(selectedMentor) => setSelectedMentor(selectedMentor)}
                style={{ width: '100%',marginBottom:'30px' }}
              >
                {mentors.map((mentor, index) => (
                  <Option key={index} value={mentor.Name}>
                    {mentor.Name}
                  </Option>
                ))}
              </Select>
              <div className='buttonmentor'>
              <Button className='buttonmentor' type="primary" onClick={() => handleUpdateMentor(doc.id, selectedMentor)}>Set Mentor</Button>
              </div>
            </Card>
          ))}
          </div>
    </div>
  </div>
  </div>
  </>

  );

}
