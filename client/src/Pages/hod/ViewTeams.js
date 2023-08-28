import React, { useState,useEffect } from 'react';
import { getDocs,collection, doc, getDoc,updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import TeamCard from './TeamCards';
import Sidebar from '../../Components/Sidebar';
import {Button, Card,Select} from "antd";


export default function ViewTeams() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { Option } = Select;
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      
      const collectionRef = collection(db, 'Team_Details');

      try {
        const querySnapshot = await getDocs(collectionRef);
        const documents = [];
        
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        setData(documents);
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
  

  // const handleMentorChange = async (userid, selectedMentor) => {
    
  //   const teamDocRef = doc(db, 'Team_Details', userid);

  //   try {
  //     await updateDoc(teamDocRef, {
  //       mentor: selectedMentor
  //     });
  //   } catch (error) {
  //     console.error('Error updating mentor:', error);
  //   }
  // };
  const handleUpdateMentor = async (userId, mentor) => {
    if (!mentor) {
      console.log('Select a mentor before setting.');
      return;
    }

   
    const teamDocRef = doc(db, 'Team_Details', userId); 

    try {
      await updateDoc(teamDocRef, {
        mentor: mentor
      });
      console.log(`Mentor set to: ${mentor}`);
    } catch (error) {
      console.error('Error updating mentor:', error);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>; 
  }

 console.log(data);

  return (<>
    <div className="bodyWrap dashboardPage">
    <h1 className='teams'>Teams</h1>
    <div className="app-container">

      <div className="team-column">
   
    <div className="team-cards">
    {data.map((doc, index) => (
            <Card key={index} title={`Team Leader: ${doc.Team_Leader_firstname}`}>
               
              <p><strong>Mail ID:</strong> {doc.Team_Leader_Mailid}</p>
              <p><strong>Registration Number:</strong> {doc.Team_Member1_Regnum}</p>
              <Select
                placeholder="Select a mentor"
                onChange={(selectedMentor) => setSelectedMentor(selectedMentor)}
                style={{ width: '100%' }}
              >
                {mentors.map((mentor, index) => (
                  <Option key={index} value={mentor.Name}>
                    {mentor.Name}
                  </Option>
                ))}
              </Select>
              <Button type="primary" onClick={() => handleUpdateMentor(doc.id, selectedMentor)}>Set Mentor</Button>
            </Card>
          ))}
          </div>
    </div>
  </div>
  </div>
  </>

  );

}
