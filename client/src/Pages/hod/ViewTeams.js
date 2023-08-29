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
  const[prjData,setPrjData]=useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'Team_Details');
      try {
        const querySnapshot = await getDocs(collectionRef);
        const userIDs = querySnapshot.docs.map((doc) => doc.data().userid);
        
        const documents = [];
        querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
        });
        
        setTeamData(documents);
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
  console.log(teamData);

 


  return (<>
    <div className="bodyWrap dashboardPage">
    <h1 className='teams'>Teams</h1>
    <div className="divider"></div> 
    <div className="app-container">

      <div className="team-column">
   
    <div className="team-cards">
   
    {teamData.map((doc, index) => (
      
            <Card key={index} title={`Team Leader: ${doc.Team_Leader_firstname}`}>
              <p><strong>Mail ID:</strong> <br></br>{doc.Team_Leader_Mailid}</p>
              <p><strong>Registration Number:</strong> {doc.Team_Leader_Regnum}</p>
              <p><strong>Project Title:</strong> {doc.project_Title}</p>
              <p><strong>Domain:</strong> {doc.Domain}</p>
              
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
